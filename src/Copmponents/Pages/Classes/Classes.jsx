import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import useClasses from '../../Hooks/useClasses';
const Classes = () => {
  const navigate = useNavigate()
  const {user, loading} = useContext(AuthContext)
  if(loading){
    return 'Loaddiiiinngggg'
  }
    const [data] = useClasses()
    console.log(user)
    const handleCart = item => {
        
        const {title, AvailableSeats, price, instructorName, email, image: imageFromBB} = item;
        const addToCart = {title, AvailableSeats, price, instructorName, email, image: imageFromBB, userEmail: user?.email, userName: user?.displayName}
        console.log(addToCart)


      fetch('http://localhost:5000/carts',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addToCart)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data._id)
        if(data.insertedId){
           alert ('successfully Add a Class')
           navigate('/')
        }
    })
    
    .catch(err => {
        console.log(err)
    })
    }
   
    return (
        <div>
            <div className='mx-20'>
                {
                    data.map(i => <div key={i._id} className="card card-side bg-base-100 mb-5 shadow-xl">
                    <figure><img className='w-[400px] h-[300px]' src={i.image} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{i.title}</h2>
                      <p>Instructor: {i.instructorName}</p>
                      <p>Availabel Seat: {i.AvailableSeats}</p>
                      <p>Price: {i.price}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=> handleCart(i)} className="btn btn-primary ">Select</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Classes;