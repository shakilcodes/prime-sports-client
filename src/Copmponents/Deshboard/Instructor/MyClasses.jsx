import React from 'react';
import { Link } from 'react-router-dom';
import useSingleInstuctor from '../../Hooks/useSingleInstructor';

const MyClasses = () => {
    const [data] = useSingleInstuctor()
    console.log(data)
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold my-7'>Total Classes: {data.length}</h1>
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
                                <td> <p className=''> Students: 0</p></td>
                                <td>
                                    <p className=''>{d.status}</p>
                                </td>
                                <td>
                                    <Link to={`/deshboard/updateClass/${d._id}`} className='btn btn-sm'>Update</Link>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;