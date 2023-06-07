import React from 'react';
import useClasses from '../../Hooks/useClasses';

const Classes = () => {
    const [data] = useClasses()
    console.log(data)
    return (
        <div>
            <div className='mx-20'>
                {
                    data.map(i => <div key={i._id} className="card card-side bg-base-100 mb-5 shadow-xl">
                    <figure><img className='w-[400px] h-[300px]' src={i.image} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{i.title}</h2>
                      <p>Instructor: {i.instructorName}</p>
                      <p>Availabel Seat: {i.numberOfStudents}</p>
                      <p>Price: {i.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary ">Select</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Classes;