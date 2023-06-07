import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    // TODO
    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content ">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <><div className='text-2xl font-semibold text-center'>
                                   <li><Link>Admin</Link></li>
                                    <li><Link to="/deshboard/allUsers">All Users</Link></li>
                                    <li><Link>All Classes</Link></li>
                                </div></> :
                                <><div className='text-2xl font-semibold text-center'>
                                    <h1>Students</h1>
                                    <li><Link to="/deshboard/myselected">My Selected Classes</Link></li>
                                    <li><Link>My Enrolled Classes</Link></li>
                                </div></>
                        }
                        <h1 className='border border-gray-400 border-bottom-[5px]'></h1>
                        <div className='text-xl text-center mt-10 font-semibold'>
                            <p><Link to='/'>Home</Link></p>
                            <p className='my-3'> <Link to='/classes'>Classes</Link></p>
                            <p> <Link to='/instructor'>Instructor</Link></p>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Deshboard;