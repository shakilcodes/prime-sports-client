import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClasses from '../../Hooks/useClasses';

const FeedBack = () => {
    const { id } = useParams()
    const [allClass] = useClasses()
    const findedData = allClass.find(d => d._id == id)
    console.log(findedData)
    const handleFeedback = event => {
        event.preventDefault()
        const feedBack = event.target.text.value;
        const status = 'denied'
        const update = {feedBack, status}
        fetch(`http://localhost:5000/feedBack/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'FeedBack sent',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })




    }
    return (
        <div className='w-9/12 p-5'>
            <form onSubmit={handleFeedback}>
                <h1 className='text-5xl text-center mb-5'>FeedBack</h1>
                <textarea className='p-5 rounded-3xl' placeholder='FeedBack' name="text" id="" cols="58" rows="10"></textarea> <br />
                <button className='w-[600px] text-white'>Submit</button>
            </form>
        </div>
    );
};

export default FeedBack;