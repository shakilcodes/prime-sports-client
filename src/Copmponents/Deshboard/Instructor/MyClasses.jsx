import React from 'react';
import useSingleInstuctor from '../../Hooks/useSingleInstructor';

const MyClasses = () => {
    const [data] = useSingleInstuctor()
    console.log(data)
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
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{d.title}</td>
                                <td>{d.email}</td>
                                <button className='btn btn-sm'>Update</button>
                                <button className='btn btn-sm'>Delete</button>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;