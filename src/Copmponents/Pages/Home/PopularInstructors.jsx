import useClasses from '../../Hooks/useClasses';

const PopularInstructors = () => {
    const [data]= useClasses()
    const popular = data;
    return (
        <div>
            <h1 className='text-5xl text-center my-10 font-bold'>Popular Instructors</h1>
            <div className='grid grid-cols-3 gap-7'>
                {
                    popular.map(d => <div key={d._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-[400px] h-[350px]' src={d.instructorImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.instructorName}</h2>
                            <p>Students: {d.numberOfStudents}</p>
                            
                        
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;