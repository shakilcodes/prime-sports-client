import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const MySelected = () => {
    const [data, refetch] = useCart()
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/carts/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                // alert('deleted successfully')
            }
            
           
        })
    }
    return (
        <div className='w-full'>
        <h1 className='text-3xl font-bold my-7'>Total Users: {data.length}</h1>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{d.title}</td>
                            <td>{d.email}</td>
                           
                            <td><Link to={`/deshboard/payment/${d._id}`} className='btn btn-sm'>PaY</Link></td>
                            <td><Link onClick={()=>handleDelete(d._id)} className='btn btn-sm'>Delete</Link></td>
                        </tr>
                        
                        )
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MySelected;