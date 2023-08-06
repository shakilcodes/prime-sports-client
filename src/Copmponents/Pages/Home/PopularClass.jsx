import React from 'react';
import useClasses from '../../Hooks/useClasses';
import { motion } from 'framer-motion';



const PopularClass = () => {
    const [data] = useClasses()
    const slice = true;
    const popular = slice ? data.slice(0, 6) : data;

    return (
        <div className=' md:mt-20 text-white'>
            <h1 className='md:text-5xl text-2xl text-center my-10 font-bold'>Popular Classes</h1>
            <div className='md:grid grid-cols-3 gap-7 justify-items-center'>
                {
                    popular.map(d => <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    > <div key={d._id} className="card md:w-[400px] bg-[#141313]  shadow-xl border text-center mb-5">
                       
                            <figure><img className='w-[400px] h-[300px] rounded-b-2xl' src={d.image} /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl text-center">{d.title}</h2>
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

