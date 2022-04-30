import React from 'react';
import './InventoryItems.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Item = ({ item }) => {
    const { description, img, name, quantity, price, supplier } = item;
    console.log(img);

    return (
        <div className='col item-container py-3' data-aos="fade-up"
            data-aos-duration="2000">
            <div className="overlay-container">
                <img className=' w-100 rounded item-img' src={img} alt="" />
                <h4 className="overlayy">Price: ${price}</h4>
            </div>
            <h4 className='gray text-center fw-bold mt-2'>{name}</h4>
            <p className='d-flex justify-content-around text-brown'><small>Quantity: {quantity}</small> <small>Supplier: {supplier}</small></p>
            <p className='px-4 text-center gray'>{description}</p>

            <button className='stock-update d-flex justify-content-center align-items-center' >Stock Update</button>
        </div>
    );
};

export default Item;