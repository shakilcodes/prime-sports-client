import React from 'react';

const OurPrinciple = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-5xl font-bold text-center'>Our Principles</h1>
            <div className='mt-10 flex gap-5'>
                <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1 id='popularCouches' className='mt-5 text-xl font-bold text-center my-3'>Lessons</h1>
                            <p className='text-start'>
                                Cultivate a thirst for continuous learning, embracing knowledge as the key to personal and collective development. </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1 id='popularCouches' className='mt-5 text-xl font-bold text-center my-3'>Proficiency</h1>
                            <p className='text-start'>
                                Pursue excellence, honing skills to perfection, striving for mastery, and unleashing one's full potential in every endeavor.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1 id='popularCouches' className='mt-5 text-xl font-bold text-center my-3'>Participation</h1>
                            <p className='text-start'>
                                Embrace inclusion, involving all actively to contribute and engage in the shared journey of growth and achievement. </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down " className="card md:w-[400px] md:h-[250px]  mb-5   mx-auto border">
                    <div className='flex gap-3 items-center'>

                        <div className='px-3'>
                            <h1 id='popularCouches' className='mt-5 text-xl font-bold text-center my-3'>TeamWork</h1>
                            <p className='text-start'>
                                Forge a harmonious alliance, leveraging collective strengths, communication, and support to achieve shared goals and triumph together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPrinciple;