import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthPorvider/AuthPorvider';


const SignUp = () => {
    // useTitle('SignUp')
    const [error, setError] = useState('')

    const { signUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const hanleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const confirmpassword = form.confirmpassword.value
        const name = form.name.value
        const photo = form.photo.value
        if (password !== confirmpassword) {
            return alert('password is not match')
        }
        console.log(password, confirmpassword)

        signUp(email, password).then(result => {
            const user = result.user;

            updateName(name, photo, user)
            console.log(user)
            setError("")
            event.target.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sign Up success',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
            // console.log(loggedUser)
        }).catch(error => {
            setError(error.message)
            console.log(error.message)
            const gotedError = error.message;
            setError(gotedError)

        })
    }
    console.log(error)
    const updateName = (name, photo, user) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then((result) => {
                const usersInfo = { name, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(usersInfo)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'user Added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1 className='text-7xl mt-5 text-center font-bold '>SignUp Please</h1>

            <form className='mt-5' onSubmit={hanleSignUp}>

                <div className="hero">
                    <div className="hero-content w-96 flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body">
                                <h1 className='text-red-500'>{error}</h1>
                                <div className="form-control">
                                    <p className='text-warning'></p>
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='confirmpassword' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-primary text-white">SignUp</button>
                                    <label className="label">
                                        <a href="/login" className="label-text-alt link link-hover">Already have account? <span className='text-primary'>Login</span></a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>

    );
};

export default SignUp;