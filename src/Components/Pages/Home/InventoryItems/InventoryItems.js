import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import './InventoryItems.css'
import Item from './Item';

import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect( () => {
        setLoading(true)

        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then(data => {
            const slicedItem = data.slice(0, 6);
            setInventoryItems(slicedItem)
            setLoading(false)
        });
    },[]);


    const manageInventoryBtn = () =>{
        navigate('/manageinventories');
    };

    return (
        <section className='in-stock-section'>
            <div className="container">
                <p className='text-center gray mb-1'> Visit the Inventory page to see all items</p>
                <h2 className='text-center fs-1 fw-bold'>In Our Stock</h2>
                <div className="line-top"></div>
                <div className="line-bottom"></div>

                {
                    loading ? (<Loading></Loading>) :

                    (<div className='row row-cols-1 row-cols-lg-2 g-4'>
                        {
                            inventoryItems.map(item => <Item
                            key={item._id}
                            item={item}
                            ></Item>)
                        }
                    </div>)
                }



                <button onClick={manageInventoryBtn} className='manage-inventories d-flex justify-content-center align-items-center'>Manage Inventories</button>
            </div>
        </section>
    );
};

export default InventoryItems;