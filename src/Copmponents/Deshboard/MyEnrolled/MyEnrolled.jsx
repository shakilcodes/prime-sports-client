import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthPorvider/AuthPorvider';
import useMyErolled from '../../Hooks/useMyErolled';

const MyEnrolled = () => {
    // const {user} = useContext(AuthContext)
    // const [datas, setDatas] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/payments/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setDatas(data))
    // }, [])
    const [data] = useMyErolled()
    const datas = data;
    console.log(datas)
    return (
        <div className='w-full'>
             <h1 className='text-3xl font-bold my-7'>My Erolled: {datas.length}</h1>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            <th>Erolled Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((t, index) => <tr key={t._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={t.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{t.title}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $ {t.price}
                                    <br />
                                </td>
                                <td>
                                    {t.instructorName}
                                    <br />
                                </td>
                                <td>{t.date}</td>
                                
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyEnrolled;