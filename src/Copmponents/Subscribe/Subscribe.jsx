import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='text-white text-center mt-40'>
                <h1 className='text-5xl font-bold'>Subscribe Prime Sports</h1>
                <p className='text-xl mt-2'>Get Latest News and Update</p>
            </div>
            <div className='py-8 flex justify-center '>
                <input className='' placeholder='Email Address' type="text" />
                <button className='h-11 w-[200px] bg-[#ffad02]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;