import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import SingelInventory from './SingelInventory';
import './ManageInventories.css';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';


const ManageInventories = () => {
    // const [inventoryItems, setInventoryItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [items, setInventoryItems, loading] = useInventoryItems();
    
    return (
        <div className='all-inventories-container'>
            <div className="container">
                <h2 className='text-center text-primary fs-1 fW-bold'>All Inventories Items</h2>
                <div className="line-top"></div>
                <div className="line-bottom"></div>




                {
                    items ? 

                        (<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                            {
                                items.map(InventoryItem => <SingelInventory
                                    key={InventoryItem._id}
                                    InventoryItem={InventoryItem}
                                ></SingelInventory>)
                            }
                        </div>) : (<Loading></Loading>)
                }
            </div>

            <div className='add-inventory-btn-container'>
                <Link className='add-inventory-btn' to='/additem'>Add New Inventory</Link>
            </div>
        </div>
    );
};

export default ManageInventories;