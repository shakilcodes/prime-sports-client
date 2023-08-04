import React from 'react';
import basketball from './../../../asset/press/pngwing.com.png'

const LookingFruther = () => {
    return (
        <>
        <h1 className='text-5xl font-bold text-center mt-32'>This is Why you should <br /> Looking further</h1>
            <div className='flex gap-20 justify-center items-center mt-10'>
                <div className='text-2xl font-bold text-right'>
                    <p className=''>Training</p>
                    <p className='my-16  mr-10'>Authority</p>
                    <p className=''>Youth Academy</p>
                </div>
                <div className='md:w-[400px] md:h-[400px]'>
                    <img src={basketball} alt="" />
                </div>
                <div className='text-2xl font-bold'>
                    <p>Precision $ Timing</p>
                    <p className='my-16 ms-10'>Team Unity</p>
                    <p>Championship</p>
                </div>
            </div>
        </>
    );
};

export default LookingFruther;