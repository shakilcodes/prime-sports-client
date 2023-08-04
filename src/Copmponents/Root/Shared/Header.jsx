import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import Swal from 'sweetalert2';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import './Header.css'

const Header = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const { user, logOut } = useContext(AuthContext)
    const SignOutBtn = () => {
        logOut().then(result => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log Out Success',
                showConfirmButton: false,
                timer: 1500
            })

        }).catch(error => {
        })
    }
    return (
        <div className='fixed z-10 left-0 right-0 top-0 '>
            <div className='bg-black'>

                <nav className=''>
                    <div className="navbar max-w-[1280px] m-auto text-white">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-white rounded-box w-52 z-50">

                                    <Link to='/'>Home</Link>
                                    <Link to='/signUp'>SignUp</Link>
                                    <Link to='/instructor'>Instructors</Link>
                                    <Link to='/classes'>Classes</Link>
                                    {
                                        user ? <Link to='/deshboard'>Deshboard</Link> : ''
                                    }




                                </ul>
                            </div>
                            <div className=''>
                                <Link to='/' className="btn btn-ghost normal-case md:text-3xl titlePrime">Prime Sports</Link>
                                <p className='Academy md:ms-16'>Academy</p>
                            </div>
                        </div>
                        <div className="navbar-center navmiddle  lg:flex gap-3 text-xl font-bold">
                            <Link to='/'>Home</Link>
                            <a href='#popularCouches'>Best Couches</a>
                            <a href='#Gallery'>Gallary</a>
                            <Link to='/instructor'>Instructors</Link>
                            <Link to='/classes'>Classes</Link>
                            <Link to='/blog'>Blog</Link>
                            {
                                user ? '' : <Link to='/signUp'>SignUp</Link>
                            }
                            {
                                user ? <div>
                                    {
                                        isInstructor.admin ?
                                            <>
                                                <div>
                                                    <div className='flex gap-3'>
                                                        <Link to='/deshboard/myclasses'>Deshboard</Link>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                {
                                                    !isAdmin?.admin ?

                                                        <div className='flex gap-3'>
                                                            <Link to='/deshboard/myselected'>Deshboard</Link>
                                                        </div>

                                                        :
                                                        <div className='flex gap-3'>
                                                            <Link to='/deshboard/manageClasses'>Deshboard</Link>
                                                        </div>

                                                }
                                            </>
                                    }

                                </div>
                                    :
                                    ''
                            }

                        </div>
                        <div className="navbar-end gap-2" >
                            <div>
                                <h1>
                                    {
                                        user ? <img className='w-16 h-16 rounded-full' src={user.photoURL} alt="" /> : ''
                                    }
                                </h1>
                            </div>
                            <div>
                                {
                                    user ? <button onClick={SignOutBtn} className='btn'>LogOut</button> : <Link className='btn' to='/login'>LogIn</Link>
                                }
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;