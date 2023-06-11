import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthPorvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
            fetch('https://prime-sports-server.vercel.app/addAClass',{
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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You Successfully added a Class',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            navigate('/deshboard/myclasses')
        })
        })
        .catch(err => {
            console.log(err)
        })
        
        

        
        
    }


    return (
        <div className='w-full'>
            <div className=''>
                <h1 className='my-10 font-bold text-4xl text-center'>Add a Class</h1>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <div className='flex'>
                            <label className='text-xl font-bold p-2'>Class name :</label>
                            <input className='bg-gray-200 w-[600px] p-2 rounded-md ms-5' type="text" placeholder='Your Class name' name='ClassName' />

                        </div>
                        <div className="flex">
                            <label className='text-xl font-bold p-2'>Class Image :</label>
                            <input type="file" name='image' className="bg-gray-200 ms-3  rounded-md  file-input" />

                        </div>
                        <div className='flex'>
                            <label className='text-xl font-bold'>Instructor name: </label>
                            <input className='bg-gray-200 w-[600px] p-2 rounded-md' type="text" defaultValue={user?.displayName} />
                        </div>
                        <div className='flex'>
                            <label className='text-xl font-bold'>Instructor email: </label>
                            <input className='bg-gray-200 w-[600px] p-2 rounded-md ' type="text" defaultValue={user?.email} />
                        </div>
                        <div className='flex'>
                            <label className='text-xl font-bold'>Available seats: </label>
                            <input className='bg-gray-200 ms-2 w-[600px] p-2 rounded-md ' type="text" placeholder='Available seats' name='AvailableSeats' />
                        </div>
                        <div className='flex ps-2'>
                            <label className='text-xl font-bold p-2'>Price: </label>
                            <input  className='bg-gray-200  w-[600px] p-2 rounded-md ms-20' type="text" placeholder='Price' name='Price' />
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <button className='btn w-full'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;