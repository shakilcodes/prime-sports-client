import React from 'react';
import Footer from '../../Root/Shared/Footer/Footer';
import ExtraSection from './ExtraSection';
import PopularClass from './PopularClass';
import PopularInstructors from './PopularInstructors';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>      
            <Footer></Footer>
        </div>
    );
};

export default Home;