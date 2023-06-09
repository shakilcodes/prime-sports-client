import React from 'react';
import { useParams } from 'react-router-dom';
import useClasses from '../../Hooks/useClasses';

const FeedBackInstructor = () => {
    const [allClass] = useClasses()
    const {id} = useParams()
    const foundedData = allClass.find(d => d._id == id)
    return (
        <div className='w-full px-20'>
            <h1 className='text-5xl text-red-500 mb-10'>Your FeedBack</h1>
            <h1 className='text-xl'>{foundedData.feedBack}</h1>
        </div>
    );
};

export default FeedBackInstructor;