import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthPorvider/AuthPorvider';
import { FaGoogle } from 'react-icons/fa';
import useUsers from '../Hooks/useUsers';



const SignUp = () => {
    const [error, setError] = useState('')
    const { signUp, googleSignUp } = useContext(AuthContext)
   

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from.pathname || '/'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmpassword) {
            return alert('password is not match')
        }
        console.log(data)
        signUp(data.email, data.password).then(result => {
            const user = result.user;

            updateName(data.name, data.photo, user)
            console.log(user)
            setError("")
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

    const googleLogIn = () => {
        googleSignUp()
            .then(result => {
                // navigate('/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                const user = result.user;

                const saveUser = { name: user.displayName, email: user.email }

                fetch('https://prime-sports-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                const errors = error.message
            }
            )
    }

    console.log(error)
    const updateName = (name, photo, user) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then((result) => {
                const usersInfo = { name, email: user.email }
                fetch('https://prime-sports-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
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

            <form className='mt-5 mb-0' onSubmit={handleSubmit(onSubmit)}>

                <div className="hero">
                    <div className="hero-content w-96 flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body">
                                <h1 className='text-red-500'>{error}</h1>
                                <div className="form-control">
                                    <p className='text-warning'></p>

                                    <input type="text"  {...register("name")} placeholder="name" name='name' className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className="form-control">

                                    <input type="text" {...register("photo")} placeholder="Photo URL" name='photo' className="input input-bordered" />
                                    {errors.photo && <span className='text-red-500'>PhotoURL is required</span>}
                                </div>
                                <div className="form-control">

                                    <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                                <div className="form-control">

                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/


                                    })} placeholder="password" name='password' className="input input-bordered" />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                    {errors.password?.type === "minLength" && <p className='text-red-500'>password must be 6 characters</p>}
                                    {errors.password?.type === "pattern" && <p className='text-red-500'>password must have one Capital later and one special character characters</p>}

                                </div>
                                <div className="form-control">

                                    <input type="password" {...register("confirmpassword", { required: true })} placeholder="Confirm password" name='confirmpassword' className="input input-bordered" />
                                    {errors.confirmpassword && <span className='text-red-500'>Password match is required</span>}
                                    <label className="label mt-0">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-primary text-white">SignUp</button>

                                    <label className="label mt-0">
                                        <a href="/login" className="label-text-alt link link-hover">Already have account? <span className='text-primary'>Login</span></a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='flex justify-center '>
                <button onClick={googleLogIn} className=" btn bg-primary text-white"><FaGoogle className='text-xl'></FaGoogle> Google</button>
            </div>


        </div>

    );
};

export default SignUp;