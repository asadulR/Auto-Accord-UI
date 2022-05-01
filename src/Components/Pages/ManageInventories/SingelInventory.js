import React from 'react';
import './ManageInventories.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useInventoryItems from '../../../hooks/useInventoryItems';
import toast, { Toaster } from 'react-hot-toast';
AOS.init();

const SingelInventory = ({ InventoryItem }) => {
    const { description, img, name, quantity, price, supplier, _id, code } = InventoryItem;
    const [items, setInventoryItems] = useInventoryItems();

    const handleDelete = (code) => {
        //  deleting inventory from allitems collection
        const proceed = window.confirm('Are you sure deleting the item?')

        if (proceed) {
            const itemDeleteUrl = `http://localhost:4000/items/${code}`;

            fetch(itemDeleteUrl, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    const remainingInventoryItems = items.filter(item => item.code !== code);

                    setInventoryItems(remainingInventoryItems);
                    toast.success('Inventory Deleted');
                });


            //  deleting inventory from myAddedItems collection
            const myItemDeleteUrl = `http://localhost:4000/myitems/${code}`;

            fetch(myItemDeleteUrl, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                })
        }

    }

    return (
        <div data-aos="fade-up"
            data-aos-duration="2000" className='col single-item-container'>
            <div className="img-overlay-container">
                <img className=' w-100 rounded inv-item-img' src={img} alt="" />
                <h4 className="img-over">Price: ${price}</h4>
            </div>
            <h4 className='gray text-center fw-bolder mt-2'>{name}</h4>
            <p className='d-flex justify-content-around text-brown'><small>Quantity: {quantity}</small> <small>Supplier: {supplier}</small></p>
            <p className='px-1 text-cente gray'>{description}</p>

            <div className='btns-container'>
                <button className='stockupdate-btn ms-3'>Stock Update</button>
                <button onClick={() => handleDelete(code)} className='delete-btn'>Delete Stock</button>
            </div>
            <Toaster/>
        </div>
    );
};

export default SingelInventory;