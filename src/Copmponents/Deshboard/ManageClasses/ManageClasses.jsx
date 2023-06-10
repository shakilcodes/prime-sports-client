import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import useClasses from '../../Hooks/useClasses';
import useManageClasses from '../../Hooks/useManageClass';
import useUsers from '../../Hooks/useUsers';

const ManageClasses = () => {
    // const data = useLoaderData()
    const { loading } = useContext(AuthContext)
    if (loading) {
        return 'loadiing'
    }
    const [data, refetch] = useManageClasses()
    // const [allClass] = useClasses()
    console.log(data)

    const handleApprove = user => {
        fetch(`http://localhost:5000/approve/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold my-7'>Total Classes: {data?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>AvailableSeats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((d, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={d.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{d.title}</td>
                                <td>{d.instructorName}</td>
                                <td>{d.email}</td>
                                <td>{d.AvailableSeats}</td>
                                <td>{d.price}</td>
                                <td>
                                    <p className='btn btn-sm'>{d.status}</p>


                                </td>
                                <td><button disabled={d.status === 'Approved' || d.status === "denied"} onClick={() => handleApprove(d)} className='btn btn-primary'>Approve</button></td>
                                <td><Link disabled={d.status === 'denied' || d.status === 'Approved'} to={`/deshboard/feedback/${d._id}`} className='btn btn-primary'>denied & FeedBack</Link></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;


