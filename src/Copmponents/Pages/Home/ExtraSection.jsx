import React, { useEffect, useState } from 'react';
import useClasses from '../../Hooks/useClasses';
import useInstructor from '../../Hooks/useInstructor';
import useSingleInstuctor from '../../Hooks/useSingleInstructor';

const ExtraSection = () => {
    // const [isInstructor] = useInstructor()
    // console.log(isInstructor)
    // const [data] = useClasses()
    const [achivment, setachivment] = useState([])
    const gallary = achivment.galleryImages
    useEffect(() => {
        fetch('extraSection.json')
            .then(res => res.json())
            .then(datas => setachivment(datas))
    }, [])
    return (
        <div className='md:px-10 md:mt-20'>
            <h1 className='md:text-5xl text-center text-3xl my-5 md:my-10 font-bold'>{achivment.sectionTitle}</h1>
            <div className='md:grid grid-cols-4 gap-7'>
                {
                    gallary?.map((d, index) => <div key={index} className="card md:w-72 md:h-96 bg-base-100 shadow-xl">
                        <figure><img className='rounded-2xl md:w-[270px] md:h-[230px] rounded-3xl' src={d.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.caption}</h2>
                            <p>Students: {d.date}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ExtraSection;