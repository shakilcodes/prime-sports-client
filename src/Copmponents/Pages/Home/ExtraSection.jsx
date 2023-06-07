import React, { useEffect, useState } from 'react';
import useClasses from '../../Hooks/useClasses';

const ExtraSection = () => {
    const [data] = useClasses()
    const [achivment, setachivment] = useState([])
    const gallary = achivment.galleryImages
    useEffect(() => {
        fetch('extraSection.json')
            .then(res => res.json())
            .then(datas => setachivment(datas))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center my-10 font-bold'>{achivment.sectionTitle}</h1>
            <div className='grid grid-cols-4 gap-7'>
                {
                    gallary?.map((d, index) => <div key={index} className="card w-72 h-96 bg-base-100 shadow-xl">
                        <figure><img className='w-[270px] h-[230px] rounded-3xl' src={d.image} alt="Shoes" /></figure>
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