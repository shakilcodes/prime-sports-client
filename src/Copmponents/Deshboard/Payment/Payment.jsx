import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
    
    
    return (
        <div>
            <h1 className='text-4xl'>taka o taka re tui oporadi re</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;