import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useUsers from '../../Hooks/useUsers';
import Footer from '../../Root/Shared/Footer/Footer';
import ExtraSection from './ExtraSection';
import PopularClass from './PopularClass';
import PopularInstructors from './PopularInstructors';
import Slider from './Slider';
import './Home.css'
import { FaToggleOn } from 'react-icons/fa';
import SportsPress from '../../SportsPress/SportsPress';
import LookingFruther from '../../LookingFurther/LookingFruther';
import OurPrinciple from '../../OurPrinciple/OurPrinciple';

const Home = () => {


    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className=''>
            <div className='relative '>
                <button className='absolute text-white z-10' onClick={toggleMode}><FaToggleOn className='md:text-3xl text-xl'></FaToggleOn></button>
            </div>
            <div className="content"></div>
            <div>


                <div className="content">
                    {isDarkMode ? (
                        <p><Slider></Slider>
                            <div className='md:max-w-[1280px] mx-auto '>
                                <PopularClass></PopularClass>
                                <PopularInstructors></PopularInstructors>
                                <ExtraSection></ExtraSection>
                            </div>
                        </p>
                    ) : (
                        <p><Slider></Slider>
                            <div className='md:max-w-[1280px] mx-auto'>
                                <PopularClass></PopularClass>
                                <SportsPress></SportsPress>
                                <PopularInstructors></PopularInstructors>
                                <LookingFruther></LookingFruther>
                                <OurPrinciple></OurPrinciple>
                                <ExtraSection></ExtraSection>
                            </div>
                        </p>
                    )}
                </div>



            </div>
        </div>
    );
};

export default Home;