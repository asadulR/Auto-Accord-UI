import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import SingelInventory from './SingelInventory';
import './ManageInventories.css';
const ManageInventories = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => {
                setInventoryItems(data)
                setLoading(false)
            });
    }, []);
    return (
        <div className='all-inventories-container'>
            <div className="container">
                <h2 className='text-center fs-1 fW-bold'>All Inventories Items</h2>
                <div className="line-top"></div>
                <div className="line-bottom"></div>




                {
                    loading ? (<Loading></Loading>) :

                        (<div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2'>
                            {
                                inventoryItems.map(InventoryItem => <SingelInventory
                                    key={InventoryItem._id}
                                    InventoryItem={InventoryItem}
                                ></SingelInventory>)
                            }
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;