import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthPorvider";
import { useNavigate } from "react-router-dom";

const imgeAPI = import.meta.env.VITE_IMAGE_API;
const AddAClass = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return 'Loading............'
    }
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.ClassName.value
        const AvailableSeats = form.AvailableSeats.value
        const price = form.Price.value
        const instructorName = user?.displayName
        const email = user?.email
        const image = form.image.files[0];
        const status = 'pending'
        
        const inputValues = { title, AvailableSeats, price, instructorName, email, status }

        const imgHostingULR = `https://api.imgbb.com/1/upload?key=${imgeAPI}`
        const formData = new FormData()
        formData.append('image', image)
        fetch(imgHostingULR, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imageData => {
            const imageFromBB = imageData.data.display_url;
           const {title, AvailableSeats, price, instructorName, email, status} = inputValues;
           const newInputValue = {title, AvailableSeats, price, instructorName, email, status, image: imageFromBB}
            fetch('http://localhost:5000/addAClass',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newInputValue)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data._id)
            if(data.insertedId){
               alert ('successfully added new a class')
            }
            navigate('/')
        })
        })
        .catch(err => {
            console.log(err)
        })
        
        

        
        
    }


    return (
        <div className=' '>
            <h1 className='my-10 font-bold text-4xl text-center'>Add A Class</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex text-start flex-col gap-5 justify-center items-center'>
                    <div>
                        <label className='text-xl font-bold p-2'>Class name :</label>
                        <input className='bg-gray-200 w-[700px] p-2 rounded-md ms-5' type="text" placeholder='Your Class name' name='ClassName' />

                    </div>
                    <div className="-ms-80">
                        <label className='text-xl font-bold p-2'>Class name :</label>
                        <input type="file" name='image' className="bg-gray-200  rounded-md  file-input" />

                    </div>
                    <div>
                        <label className='text-xl font-bold'>Instructor name: </label>
                        <input className='bg-gray-200 w-[700px] p-2 rounded-md' type="text" defaultValue={user?.displayName} />
                    </div>
                    <div>
                        <label className='text-xl font-bold'>Instructor email: </label>
                        <input className='bg-gray-200 w-[700px] p-2 rounded-md ' type="text" defaultValue={user?.email} />
                    </div>
                    <div>
                        <label className='text-xl font-bold'>Available seats: </label>
                        <input className='bg-gray-200 w-[700px] p-2 rounded-md ' type="text" placeholder='Available seats' name='AvailableSeats' />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Price: </label>
                        <input className='bg-gray-200 w-[700px] p-2 rounded-md ms-16' type="text" placeholder='Price' name='Price' />
                    </div>
                </div>
                <div className='text-center my-8'>
                    <button className='btn'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddAClass;