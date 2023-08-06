import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthPorvider/AuthPorvider';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const { logIn, googleSignUp } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/'

    const googleLogIn = () => {
        googleSignUp()
            .then(result => {
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

    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                
              

            })
            .catch(error => {
                const errorFind = error.message;
                setError(errorFind)

            })
    }
    const [isTrue, setIstrue] = useState(true)
    const visibleHandle = () => {
        setIstrue(!isTrue)
    }
    

    return (
        <div className='bg-black pb-5'>
            <h1 className='text-7xl text-center mt-10 text-white  font-bold'> Login Please</h1>

            <form className='mb-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="hero ">
                    <div className="hero-content w-96 bg-white rounded-md flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body ">
                                <h1 className='text-red-500'>{error}</h1>
                                <div className="form-control ">
                                    <p className='text-warning text-center'></p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative'>
                                        {
                                            isTrue ?
                                                <>
                                                    <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                                </> :
                                                <>
                                                    <input type="text" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                                </>
                                        }
                                    </div>
                                    <div className='absolute left-[320px] bottom-[250px]'>
                                    <h1 onClick={visibleHandle} className='cursorPoint text-xl'> <AiFillEyeInvisible></AiFillEyeInvisible></h1>
                                    </div>
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button className="btn bg-[#ffad02] ">Login</button>
                                    <div className='text-center  text-white font-bold'>
                    <button onClick={googleLogIn} className='btn bg-[#ffad02] w-full'> <FaGoogle></FaGoogle> Google</button>
                </div>
                                    <label className="label">
                                        <a href="/signUp" className="label-text-alt link link-hover">First time this website? <span className='text-primary'>SignUp</span></a>
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

export default Login;