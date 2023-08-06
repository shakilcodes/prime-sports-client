import React from 'react';
import one from './../../../asset/Sponsored/1.png'
import two from './../../../asset/Sponsored/2.png'
import three from './../../../asset/Sponsored/3.png'
import four from './../../../asset/Sponsored/4.png'
import five from './../../../asset/Sponsored/5.png'
import six from './../../../asset/Sponsored/6.png'

const OurSponsor = () => {
    return (
        <div className='text-white max-w-[1280px]'>
            <h1 className='text-5xl text-center font-bold mt-24'>Our Sponsors</h1>
            <div className='flex gap-10 items-center justify-center bg-white mt-10'>
                <img className='w-[200px] h-[180px]'  src={one} alt="" />
                <img className=' w-[180px] h-[120px]' src={two} alt="" />
                <img className='w-[200px] h-[150px]'src={three} alt="" />
                <img className='w-[160px] h-[120px]'src={four} alt="" />
                <img className='w-[150px] h-[100px]'src={five} alt="" />
                <img className='w-[150px] h-[100px]'src={six} alt="" />
            </div>
            <span id='Gallery'></span>
        </div>
    );
};

export default OurSponsor;