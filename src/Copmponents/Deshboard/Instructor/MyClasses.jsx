import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useClasses from '../../Hooks/useClasses';
import useNumberStuden from '../../Hooks/useNumberStudent';
import useSingleInstuctor from '../../Hooks/useSingleInstructor';

const MyClasses = () => {
    const [data] = useSingleInstuctor()
    const [totalData, setTotalData] = useState([])
    const [allClass] = useClasses()
    const allDAta = allClass.map(d => d.title)
    console.log(allClass)
    
    const [students] = useNumberStuden()
    // console.log(students)
    for(const s of allClass){
        const student = students.filter(d => d.title == s.title)
        // const stu = student.map(d => console.log(d))
        const a = student[0]
        const b = student[1]
        console.log(b)
    }
    
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
                            <th>Status</th>
                            <th>FeedBack</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{d.title}</td>
                                <td>{d.email}</td>
                                <td>
                                    <p className=''>{d.status}</p>
                                    
                                </td>
                                <td> <p className='text-red-500'> {d.feedBack}</p></td>
                                
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





