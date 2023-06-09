import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
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

                fetch('http://localhost:5000/users', {
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
        // console.log(data);
        logIn(data.email, data.password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                //    setPassword('')
                // event.target.reset();

            })
            .catch(error => {
                const errorFind = error.message;
                // setPassword(error.message)
                console.log(error.message)
                setError(errorFind)

            })
    }


    return (
        <div>
            <h1 className='text-7xl text-center mt-10  font-bold'>Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero ">
                    <div className="hero-content w-96 flex-col">
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
                                    <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button className="btn bg-primary text-white">Login</button>
                                    <label className="label">
                                        <a href="/signUp" className="label-text-alt link link-hover">First time this website? <span className='text-primary'>SignUp</span></a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className=''>
                <div className='text-center  text-white font-bold'>
                    <button onClick={googleLogIn} className='mx-auto text-white btn bg-primary px-10 rounded-md'>Login with Google</button>
                </div>

            </div>
        </div>

    );
};

export default Login;