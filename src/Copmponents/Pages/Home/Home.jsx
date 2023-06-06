import React from 'react';
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
        </div>
    );
};

export default Home;