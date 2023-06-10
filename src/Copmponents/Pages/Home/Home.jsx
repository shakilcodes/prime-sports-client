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
        <>
            <div className='relative '>
            <button className='absolute z-30' onClick={toggleMode}>Toggle Mode</button>
            </div>
            <div className="content"></div>
            <div>


                <div className="content">
                    {isDarkMode ? (
                        <p><Slider></Slider>
                            <PopularClass></PopularClass>
                            <PopularInstructors></PopularInstructors>
                            <ExtraSection></ExtraSection>
                            <Footer></Footer>
                        </p>
                    ) : (
                        <p><Slider></Slider>
                            <PopularClass></PopularClass>
                            <PopularInstructors></PopularInstructors>
                            <ExtraSection></ExtraSection>
                            <Footer></Footer>
                        </p>
                    )}
                </div>



            </div>
        </>
    );
};

export default Home;