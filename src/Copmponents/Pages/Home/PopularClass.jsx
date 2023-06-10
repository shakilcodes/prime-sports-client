import React from 'react';
import useClasses from '../../Hooks/useClasses';

const PopularClass = () => {
    const [data] = useClasses()
    const slice = true;
    const popular = slice ? data.slice(0, 6) : data;

    return (
        <div className='md:mx-32 md:mt-20'>
            <h1 className='md:text-5xl text-2xl text-center my-10 font-bold'>Popular Classes</h1>
            <div className='md:grid grid-cols-3 gap-7 justify-items-center'>
                {
                    popular.map(d => <div key={d._id} className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-[400px] h-[350px]' src={d.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.title}</h2>
                            <p>Instructor: {d.instructorName}</p>
                            <p>Students: {d.numberOfStudents}</p>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;