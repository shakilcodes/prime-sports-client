import React from 'react';
import useClasses from '../../Hooks/useClasses';
import { motion } from 'framer-motion';



const PopularClass = () => {
    const [data] = useClasses()
    const slice = true;
    const popular = slice ? data.slice(0, 6) : data;

    return (
        <div className=' md:mt-20 '>
            <h1 className='md:text-5xl text-2xl text-center my-10 font-bold'>Popular Classes</h1>
            <div className='md:grid grid-cols-3 gap-7 justify-items-center'>
                {
                    popular.map(d => <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    > <div key={d._id} className="card md:w-[400px] bg-base-600  shadow-xl  mb-5">
                       
                            <figure><img className='w-[350px] h-[300px] rounded-3xl pt-3' src={d.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.title}</h2>
                            <p>Instructor: {d.instructorName}</p>
                            <p>Students: {d.numberOfStudents}</p>


                        </div>
                    </div> </motion.div>)
                        
                }
            </div>
        </div>
    );
};

export default PopularClass;

