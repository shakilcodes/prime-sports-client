import React from 'react';
import { MdPlayLesson, MdCoPresent, MdSettings, MdPeople } from "react-icons/md";

const OurPrinciple = () => {
    return (
        <div className='mt-32 text-white'>
            <h1 className='text-5xl font-bold text-center'>Our Principles</h1>
            <div className='mt-10 flex gap-5'>
                <div data-aos="zoom-in-down " className="card shadow-xl md:w-[400px] md:h-[280px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1  className='mt-2 text-xl font-bold text-center my-3'> <MdPlayLesson className='text-5xl mx-auto text-[#FFAD02]'></MdPlayLesson> Lessons</h1>
                            <p className='text-center'>
                                Cultivate a thirst for continuous learning, embracing knowledge as the key to personal <span className='text-[#FFAD02]'>more</span> </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card shadow-xl md:w-[400px] md:h-[280px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1  className='mt-2 text-xl font-bold text-center my-3'> <MdSettings className='text-5xl mx-auto text-[#FFAD02]'></MdSettings> Proficiency</h1>
                            <p className='text-center'>
                                Pursue excellence, honing skills to perfection, striving for mastery, and unleashing one's <span className='text-[#FFAD02]'>more</span></p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card shadow-xl md:w-[400px] md:h-[280px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1  className='mt-2 text-xl font-bold text-center my-3'><MdCoPresent className='text-5xl mx-auto text-[#FFAD02]'></MdCoPresent> Participation</h1>
                            <p className='text-center'>
                                Embrace inclusion, involving all actively to contribute and engage in the shared journey of <span className='text-[#FFAD02]'>more</span> </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card shadow-xl md:w-[400px] md:h-[280px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1  className='mt-2 text-xl font-bold text-center my-3'> <MdPeople className='text-5xl mx-auto text-[#FFAD02]'></MdPeople> TeamWork</h1>
                            <p className='text-center'>
                                Forge a harmonious alliance, leveraging collective strengths, communication, and support to achieve <span className='text-[#FFAD02]'>more</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default OurPrinciple;