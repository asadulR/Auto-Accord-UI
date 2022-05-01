import React from 'react';
import './MyItems.css'


import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
AOS.init();
const MyItem = ({ item }) => {
    const { img, name, price, description, quantity, supplier, _id, code } = item;


    const handleDelete = code => {
        const proceed = window.confirm('Are you sure deleting the item?')

        if(proceed) {     
            
            //  deleting inventory from myAddedItems collection
            const myItemDeleteUrl = `http://localhost:4000/myitems/${code}`;
            
            fetch(myItemDeleteUrl, {
                method: 'DELETE',
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Stocked Item Deleted')
            });

            //  deleting inventory from allitems collection
            const itemDeleteUrl = `http://localhost:4000/items/${code}`;

            fetch(itemDeleteUrl, {
                method: 'DELETE',

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })

        }
    }
    return (
        <div className="col" data-aos="fade-up"
        data-aos-duration="3000">
            <div className='row row-cols-1 row-cols-md-2 g-4 align-items-center'>
                <div className='col'><img className='img-fluid rounded' src={img} alt="" /></div>
                <div className='col'>
                    <h3 className='text-w fw-bolder mt-sm-2 mb-4 mt-md-0'>{name}</h3>
                    <h6 className='fw-bolder text-w d-flex align-items-center'>Price : <span className='text-w ms-2'> ${price}</span></h6>
                    <h6 className='fw-bolder text-w d-flex align-items-center'>Quantity : <span className='text-w ms-2'> {quantity}</span></h6>
                    <h6 className='fw-bolder text-w d-flex align-items-center'>Supplier : <span className='text-w ms-2'>{supplier}</span></h6>
                    
                    <p className='text-w'>{description}</p>

                    <div className="text-end"><button onClick={() => handleDelete(code)} className=' me-4 item-delete-btn'>Delete Item</button></div>
                </div>
            </div>

            <Toaster/>
        </div>
    );
};

export default MyItem;