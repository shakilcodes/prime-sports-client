import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header';

const Root = () => {
    return (
        <div className='fontPrimary'>
            <div className='mb-[99px]'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;