import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import useCart from '../../Hooks/useCart';
import './Payment.css'

const CheckoutForm = () => {

    const [data, isLoading] = useCart()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const findedOne = data.find(d => d._id == id)
    
    const stripe = useStripe();
    const element = useElements()
    const [cardError, setCardError] = useState('')
    
    const [clientSecret, setClientSecret] = useState("");
    const [succeeded, setSuccseeded] = useState('')
//     const [cartData, setCartData] = useState([])

//    useEffect(()=>{
//     fetch(`http://localhost:5000/carts/${user?.email}`)
//     .then(res => res.json())
//     .then(datas => setCartData(datas))
//    },[])

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: findedOne.price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)

            })
    }, [findedOne]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement);
        if (card === null) {
            return
        }
        // console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
            console.log('error', error)
        }
        else {
            console.log('payment method', paymentMethod)
            setCardError('')
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    }
                }
            }
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            const transactionsId = paymentIntent.id;
            setSuccseeded(transactionsId)

            const payment = {
                email: user?.email,
                transactionsId,
                image: findedOne.image,
                title: findedOne.title,
                price: findedOne.price,
                instructorName: findedOne.instructorName,
                id: findedOne._id,
                date: new Date(),
                status: 'succeeded'
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                })

            const shaki = 'shakil'

            fetch(`http://localhost:5000/carts/updateSuccess/${findedOne._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                       
                       
                    }
                })

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {succeeded && <p className='text-green-500'>payment successfull your TraCode: {succeeded}</p>}
        </>
    );
};

export default CheckoutForm;

