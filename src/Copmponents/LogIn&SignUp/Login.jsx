import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthPorvider/AuthPorvider';

const Login = () => {
    const [error, setError] = useState('')
    const { logIn, googleSignUp } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/'

    const googleLogIn = () => {
        googleSignUp()
        .then(result => {
            const user = result
            navigate(from, { replace: true })
            })
            .catch(error => {
                const errors = error.message
            }
            )
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        logIn(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                //    setPassword('')
                event.target.reset();

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

            <form onSubmit={handleLogin}>
                <div className="hero pt-10">
                    <div className="hero-content w-96 flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <div className="card-body h-[450px]">
                                <h1 className='text-red-500'>{error}</h1>
                                <div className="form-control">
                                    <p className='text-warning text-center'></p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
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
                <div className='text-center mt-5 text-white font-bold'>
                    <button onClick={googleLogIn} className='mx-auto bg-primary p-4 px-10 rounded-md'>Login with Google</button>
                </div>

            </div>
        </div>

    );
};

export default Login;