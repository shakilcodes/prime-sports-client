import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthPorvider/AuthPorvider';
import useAdmin from './Hooks/useAdmin';
import useInstructor from './Hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isInstructor] = useInstructor()
    const instructor = isInstructor.admin;
    const location = useLocation()

    if(loading){
        return <p className='text-7xl text-center font-bold mt-32'><progress className="progress w-56"></progress></p>
    }
    
    // console.log(user)
        if(user && instructor){
            return children;
        }
        return <Navigate to='/'state={{from: location}} replace></Navigate>;
    };

export default InstructorRoute;