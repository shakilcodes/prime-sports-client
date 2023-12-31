import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import useAdmin from '../../Hooks/useAdmin';
import useClasses from '../../Hooks/useClasses';
import useInstructor from '../../Hooks/useInstructor';
import useUsers from '../../Hooks/useUsers';
const Classes = () => {
  const [data] = useClasses()
  const navigate = useNavigate()
  const { user, loading } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
 

 

  const approvedClasses = data.filter(d => d.status === 'Approved')
  const handleCart = item => {
    const { title, AvailableSeats, price, instructorName, email, image: imageFromBB } = item;
    const status = "unpaid"
    const addToCart = { title, AvailableSeats, price, instructorName, email, image: imageFromBB, userEmail: user?.email, userName: user?.displayName, status }

    fetch('https://prime-sports-server.vercel.app/carts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addToCart)
    })
      .then(res => res.json())
      .then(data => {
        if (!user) {
          return Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log in First',
            showConfirmButton: false,
            timer: 1500

          }),
            navigate('/login')


        }
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added to Your Cart',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
        }
      })

      .catch(err => {
      })
  }


  return (
    <div>
      <div className='md:max-w-[1280px] m-auto mt-10'>
        {
          approvedClasses.map(i => <div key={i._id} className="card card-side bg-base-100 mb-5 shadow-xl">
            <figure><img className='w-[400px] h-[300px]' src={i.image} alt="Movie" /></figure>
            <div className="card-body">
              <h2 className="card-title">{i.title}</h2>
              <p>Instructor: {i.instructorName}</p>
              <p>Availabel Seat: {i.AvailableSeats}</p>
              <p>Price: {i.price}</p>
              <div className="card-actions justify-end">
                <button disabled={!i?.AvailableSeats || isAdmin.admin == true || isInstructor.admin == true} onClick={() => handleCart(i)} className="btn btn-primary ">Select</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Classes;