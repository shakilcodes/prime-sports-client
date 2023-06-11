import React from 'react';
import useMyErolled from '../../../Hooks/useMyErolled';

const ErolledHistory = () => {
    const [data] = useMyErolled()
    return (
        <div className='w-full'>
        <h1 className='text-3xl font-bold my-7 text-center'>Payment History: {data.length}</h1>
       <div>
           <table className="table">
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Price</th>
                       <th>TransectionId</th>
                       <th>Erolled Date</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {
                       data.map((t, index) => <tr key={t._id}>
                           <td>{index + 1}</td>
                           <td>
                               <div className="flex items-center space-x-3">
                                   <div className="avatar">
                                      
                                   </div>
                                   <div>
                                       <div className="font-bold">{t.title}</div>
                                       <div className="text-sm opacity-50"></div>
                                   </div>
                               </div>
                           </td>
                           <td>
                               $ {t.price}
                               <br />
                           </td>
                           <td>
                               {t.transactionsId}
                               <br />
                           </td>
                           <td>{t.date}</td>
                           
                       </tr>)
                   }

               </tbody>


           </table>
       </div>
   </div>
    );
};

export default ErolledHistory;