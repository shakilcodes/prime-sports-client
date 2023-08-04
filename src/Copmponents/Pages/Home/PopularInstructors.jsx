import useClasses from '../../Hooks/useClasses';

const PopularInstructors = () => {
    const [data]= useClasses()
    const slice = true;
    const popular = slice ? data.slice(0, 6) : data;
    return (
        <div id='popularCouches' className=' text-center md:mt-20'>
            <h1  className='md:text-5xl text-2xl text-center my-6 md:my-10 font-bold'>Popular Instructors</h1>
            <div  className='md:grid grid-cols-3 gap-7 justify-items-center'>
                {
                    popular.map(d => <div data-aos="zoom-in-down " key={d._id} className="card md:w-[400px] bg-base-100 mb-5 shadow-xl">
                        <figure><img className='w-[400px] h-[350px]' src={d.instructorImage} /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">{d.instructorName}</h2>
                            <p>Students: {d.numberOfStudents}</p>
                            
                        
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;