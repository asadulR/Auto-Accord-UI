import React from 'react';

const SingelInventory = ({InventoryItem}) => {
    const { description, img, name, quantity, price, supplier } = InventoryItem;
    
    return (
        <div className='col single-item-container'>
            <div className="img-overlay-container">
                <img className=' w-100 rounded inv-item-img' src={img} alt="" />
                <h4 className="img-over">Price: ${price}</h4>
            </div>
            <h4 className='gray text-center fw-bolder mt-2'>{name}</h4>
            <p className='d-flex justify-content-around text-brown'><small>Quantity: {quantity}</small> <small>Supplier: {supplier}</small></p>
            <p className='px-1 text-cente gray'>{description}</p>
        </div>
    );
};

export default SingelInventory;