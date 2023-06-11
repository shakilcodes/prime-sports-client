import React from 'react';
import useClasses from '../../Hooks/useClasses';
import useUsers from '../../Hooks/useUsers';
import useAdmin from '../../Hooks/useAdmin';

const Instructors = () => {
    const [data] = useClasses()
   
    return (
        <div className="overflow-x-auto md:max-w-[1280px] m-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Classes taken</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((t, index) => <tr key={t._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={t.instructorImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{t.instructorName}</div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {t.email}
                                <br />
                            </td>
                            <td>{t.title}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Instructors;