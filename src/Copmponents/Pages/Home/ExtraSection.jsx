import React, { useEffect, useState } from 'react';
import useClasses from '../../Hooks/useClasses';
import useInstructor from '../../Hooks/useInstructor';
import useSingleInstuctor from '../../Hooks/useSingleInstructor';
import one from './../../../../asset/Achievmants/14.jpg'
import two from './../../../../asset/Achievmants/12.jpg'
import three from './../../../../asset/Achievmants/20.jpg'
import four from './../../../../asset/Achievmants/17.jpg'
import five from './../../../../asset/Achievmants/16.jpg'
import six from './../../../../asset/Achievmants/11.jpg'
import seven from './../../../../asset/Achievmants/15.jpg'
import eight from './../../../../asset/Achievmants/18.jpg'
import nine from './../../../../asset/Achievmants/19.jpg'

const ExtraSection = () => {
    const [achivment, setachivment] = useState([])
    const gallary = achivment.galleryImages
    useEffect(() => {
        fetch('extraSection.json')
            .then(res => res.json())
            .then(datas => setachivment(datas))
    }, [])
    return (
        <div className=' md:mt-32 fontPrimary  '>
            <h1 className='md:text-5xl text-center text-3xl my-5 md:my-16 font-bold text-white'>Fresh Sports Gallary</h1>
            {/* <div className='md:grid grid-cols-4 gap-7'>
                {
                    gallary?.map((d, index) => <div data-aos="flip-left" key={index} className="card md:w-64 md:h-96 bg-base-100 shadow-xl mb-3">
                        <figure><img className='rounded-2xl md:w-[270px] md:h-[230px] ' src={d.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.caption}</h2>
                            <p>Students: {d.date}</p>
                        </div>
                    </div>)
                }
            </div> */}
            <div className=''>
                <div className='md:flex justify-center gap-5'>
                    <img className='h-[300px] w-[300px] rounded-md shadow-2xl ' src={seven} alt="" />
                    <img className='h-[300px] w-[300px] rounded-md shadow-2xl' src="https://i.postimg.cc/3wjTWKFP/Money-1.jpg" alt="" />
                    <img className='h-[300px] w-[300px] rounded-md shadow-2xl' src="https://i.postimg.cc/WbDcgm7m/carlosyulo-2022-06-18-09-23-31.jpg" alt="" />
                    <img className='h-[300px] w-[300px] rounded-md shadow-2xl' src="https://i.postimg.cc/zDc9zb1y/Chipcoge.jpg" alt="" />
                </div>
                <div className='md:flex justify-around gap-5 mt-5'>
                    <img className='w-[300px] h-[300px] rounded-md shadow-2xl' src={one} alt="" />
                    <img className='w-[300px] h-[300px]  rounded-md shadow-2xl' src={two} alt="" />
                    <img className='w-[300px] h-[300px] rounded-md shadow-2xl' src={three} alt="" />
                    <img src={four} className='w-[300px] h-[300px] rounded-md shadow-2xl' alt="" />
                </div>
                <div className='md:flex justify-around gap-5 mt-5'>
                    <img className='w-[300px] h-[300px] rounded-md shadow-2xl' src={five} alt="" />
                    <img className='w-[300px] h-[300px]  rounded-md shadow-2xl' src={six} alt="" />
                    <img className='w-[300px] h-[300px] rounded-md shadow-2xl' src={eight} alt="" />
                    <img src={nine} className='w-[300px] h-[300px] rounded-md shadow-2xl' alt="" />
                </div>
                
            </div>

        </div>
    );
};

export default ExtraSection;