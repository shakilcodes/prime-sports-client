import React from 'react';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';

const AllUsers = () => {
    const [data, refetch] = useUsers()
    const makeAdmin = user => {
        fetch(`https://prime-sports-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully updated Admin role',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    const makeInstructor = user => {
        fetch(`https://prime-sports-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully updated Instructor role',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold my-7 text-center'>Total Users: {data.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Istuctor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.role === 'instructor' ? 'Instructor' : <button onClick={()=> makeInstructor(d)} className='btn btn-primary'>Make Instructor</button>}</td>
                                <td>{d.role === 'admin' ? 'admin' : <button onClick={()=> makeAdmin(d)} className='btn btn-primary'>Make amdin</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;