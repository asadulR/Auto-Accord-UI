import React from 'react';
import './ManageInventories.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SingelInventory = ({ InventoryItem }) => {
    const { description, img, name, quantity, price, supplier } = InventoryItem;

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
                <button className='delete-btn'>Delete Stock</button>
            </div>
        </div>
    );
};

export default SingelInventory;