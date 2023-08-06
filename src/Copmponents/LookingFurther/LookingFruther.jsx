import React from 'react';
import basketball from './../../../asset/press/pngwing.com.png'
import { FaRunning,  } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiStrongMan, GiTimeBomb, GiTeamIdea, GiChampions } from "react-icons/gi";

const LookingFruther = () => {
    return (
        <div className='text-white'>
        <h1 className='text-5xl font-bold text-center mt-32'>This is Why you should <br /> Looking further</h1>
            <div className='flex gap-20 justify-center items-center mt-10 '>
                <div className='text-2xl font-bold text-right'>
                    <p className='flex items-center gap-3 ml-12'>Training <FaRunning className='text-5xl'></FaRunning> </p>
                    <p className='my-16 flex items-center gap-3  mr-10'>Authority <MdAdminPanelSettings className='text-5xl'></MdAdminPanelSettings></p>
                    <p className='flex items-center gap-3'>Youth Academy <GiStrongMan className='text-5xl'></GiStrongMan> </p>
                </div>
                <div className='md:w-[400px] md:h-[400px]'>
                    <img className='' src={basketball} alt="" />
                </div>
                <div className='text-2xl font-bold'>
                    <p className='flex items-center gap-3'><GiTimeBomb className='text-5xl'></GiTimeBomb> Precision & Timing</p>
                    <p className='my-16 ms-10 flex items-center gap-3'><GiTeamIdea className='text-5xl'></GiTeamIdea> Team Unity</p>
                    <p className='flex items-center gap-3'><GiChampions className='text-5xl'></GiChampions> Championship</p>
                </div>
            </div>
        </div>
    );
};

export default LookingFruther;