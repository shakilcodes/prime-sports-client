import { useState } from 'react';
import useClasses from '../../Hooks/useClasses';

const PopularInstructors = () => {
    const [data] = useClasses()
    const slice = true;
    const popular = slice ? data.slice(0, 4) : data;
    return (
        <div  className=' text-center md:mt-32'>
            <h1 className='md:text-5xl text-2xl text-center my-6 md:my-10 font-bold md:mb-[150px] text-white'>Popular Couches</h1>
            <div className='md:flex gap-7 justify-items-center'>
                {
                    popular.map(d => <div data-aos="zoom-in-down " key={d._id} className="card md:w-[300px] md:h-[350px] bg-base-100 mb-5 rounded-none shadow-xl mt-10">
                        <figure className=''><img className='md:w-[200px] absolute left-[50px] border-[6px] border-white  rounded-full md:h-[200px] ' src={d.instructorImage} /></figure>
                        <div className="card-body mt-16">
                            <h2 className="text-3xl font-bold">{d.instructorName}</h2>
                            {/* <p>Students: {d.numberOfStudents}</p> */}
                            <p>{slice ? d.description.slice(0, 80)  : ''} </p>
                            <button className='bg-[#ffad02]'>Details</button>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;