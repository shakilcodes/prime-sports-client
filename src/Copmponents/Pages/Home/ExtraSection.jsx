import React, { useEffect, useState } from 'react';

const ExtraSection = () => {
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
            <div className='grid grid-cols-2 gap-7'>
                {
                    gallary?.map((d, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-[400px] h-[350px]' src={d.image} alt="Shoes" /></figure>
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