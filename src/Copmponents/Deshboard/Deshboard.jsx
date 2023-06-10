import React from 'react';
import { useContext } from 'react';
import { FaChalkboard, FaChalkboardTeacher, FaEdit, FaHome, FaSignInAlt, FaUserTag } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthPorvider/AuthPorvider';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import {  } from "react-icons/go";
import { AiFillFileAdd } from 'react-icons/ai';
import { GrRadialSelected, GrCheckboxSelected, GrHistory } from "react-icons/gr";


const Deshboard = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const SignOutBtn = () => {
        navigate('/')
        logOut().then(result => {
            console.log(result)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log Out Success',
                showConfirmButton: false,
                timer: 1500
            })


        }).catch(error => {
            console.log(error)
        })
    }
    const [isAdmin] = useAdmin()
    const admin = isAdmin.admin;
    const [isInstructor] = useInstructor()
    const instructor = isInstructor.admin;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex mt-10 flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[390px] h-full bg-slate-300 text-base-content ">
                        {
                            instructor ?
                                <>
                                    <div className='text-2xl font-semibold text-center'>
                                        <li>Instructor</li>
                                        <li><Link to="/deshboard/addAClass"> <AiFillFileAdd></AiFillFileAdd> Add a Class</Link></li>
                                        <li><Link to='/deshboard/myclasses'><FaChalkboard></FaChalkboard> My Classes</Link></li>
                                    </div>
                                </> :
                                <><div>
                                    {
                                        admin ?
                                            <><div className='text-2xl font-semibold text-center'>
                                                <li>  Admin</li>
                                                <li><Link to='/deshboard/manageClasses'><FaEdit></FaEdit>  Manage Classes</Link></li>
                                                <li><Link to="/deshboard/allUsers"><FaUserTag></FaUserTag> Manage Users</Link></li>

                                            </div></> :
                                            <><div className='text-2xl font-semibold text-center'>
                                                <h1>Students</h1>
                                                <li><Link to="/deshboard/myselected"><GrRadialSelected></GrRadialSelected>My Selected Classes</Link></li>
                                                <li><Link to='/deshboard/myEnrolled'><GrCheckboxSelected></GrCheckboxSelected> My Enrolled Classes</Link></li>
                                                <li><Link to='/deshboard/enrolledHistory'><GrHistory></GrHistory> Payment History</Link></li>
                                            </div></>
                                    }
                                </div></>
                        }

                        <h1 className='border border-gray-400 border-bottom-[5px]'></h1>
                        <div className='text-xl mt-10 ms-20 font-semibold'>
                            <div className='flex items-center gap-1'>
                                <FaHome></FaHome>
                                <p className=''><Link to='/'> Home</Link></p>
                            </div>
                           <div className='flex items-center gap-1'>
                            <FaChalkboard></FaChalkboard>
                           <p className='my-3'> <Link to='/classes'>Classes</Link></p>
                           </div>
                            <div className='flex items-center gap-1'>
                                <FaChalkboardTeacher></FaChalkboardTeacher>
                                <p> <Link to='/instructor'>Instructor</Link></p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaSignInAlt></FaSignInAlt>
                                <p className='mt-3'><Link onClick={SignOutBtn}>SignOut</Link></p>
                            </div>
                            
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Deshboard;