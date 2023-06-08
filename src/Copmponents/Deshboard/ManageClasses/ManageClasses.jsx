import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useManageClasses from '../../Hooks/useManageClass';
import useUsers from '../../Hooks/useUsers';

const ManageClasses = () => {
    // const data = useLoaderData()
    const [data, refetch] = useManageClasses()

    const handleApprove = user => {
        fetch(`http://localhost:5000/approve/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
               refetch()
                alert('successfully Approved')
            }
        })
    }
    
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold my-7'>Total Users: {data.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{d.instructorName}</td>
                                <td>{d.email}</td>
                                <td>
                                   <button className='btn btn-sm'>{d.status}</button>
                                   
                                   
                                </td>
                                <td><button onClick={()=> handleApprove(d)} className='btn btn-sm'>Approve</button></td>
                                <td><button className='btn btn-sm'>denied</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;

