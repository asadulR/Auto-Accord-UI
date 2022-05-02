import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import './UpdateInventory.css';
import { useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import PageTitle from '../Shared/PageTitle/PageTitle';
AOS.init();

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({});
    const [quantity, setQuantity] = useState();
    const [deliveriedquantity, setDeliveriedQuantity] = useState();

    useEffect(() => {
        setLoading(true);
        const url = `https://auto-accord.herokuapp.com/items/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventory(data)
                setQuantity(data.quantity);
                setDeliveriedQuantity(data.quantity - 1)
                setLoading(false);
            })
    }, [setQuantity]);

    const { name, price, supplier, img, description, sold } = inventory;

    //  Delivered inventory
    const quantityReduce = () => {
        setDeliveriedQuantity(Number(deliveriedquantity) - 1)
        setQuantity(Number(quantity) - 1)
        const newQuantity = { quantity: deliveriedquantity };

        const url = `https://auto-accord.herokuapp.com/items/${inventoryId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newQuantity)
        })

            .then(res => res.json())
            .then(data => {
                console.log('Success: ', data)

                // alert('Qusntity updated successfully')

            })
            .catch((error) => {
                console.error("Error: ", error)
            });


    }

    //  restock inventory items
    const handleRestock = e => {
        e.preventDefault();
        const restock = e.target.restock.value;
        const restockedQuantity = Number(restock) + Number(quantity);
        setQuantity(restockedQuantity);
        const updatedQuantity = { quantity: restockedQuantity };


        const url = `https://auto-accord.herokuapp.com/items/${inventoryId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity)
        })

            .then(res => res.json())
            .then(data => {
                console.log('Success: ', data)
                toast.success('Inventory Restocked!');
                // alert('Qusntity updated successfully')

            })
            .catch((error) => {
                console.error("Error: ", error)
            });

        e.target.reset();
    }

    const manageInventoryBtn = () => {
        navigate('/manageinventories');
    };
    return (
        <div className='update-inventory'>
            <PageTitle title="Update"></PageTitle>
            <h2 className='text-center fs-1 fw-bolder text-primary mb-5 pb-5'>Update this item</h2>
            <div className="container">
                {
                    loading ? (<Loading></Loading>) :

                        (<div>
                            <div className='row row-cols-1 row-cols-lg-2 g-4'>
                                <div className='col text-center'><img className='img-fluid rounded' src={img} alt="" /></div>
                                <div className='col'>
                                    <h2 className='text-center gray fw-bold'>{name}</h2>
                                    <h5 className='fw-bold gray mt-5 d-flex'>Price : <span className='ms-2 s-color'>${price}</span></h5>
                                    <h5 className='fw-bold gray mt-3 d-flex'>Quantity : <span className='ms-2 s-color'>{quantity}</span></h5>
                                    <h5 className='fw-bold mt-3 gray d-flex'>Sold : <span className='ms-2 s-color'>{sold}</span></h5>
                                    <h5 className='fw-bold mt-3 gray d-flex'>Supplier : <span className='ms-2 s-color'>{supplier}</span></h5>

                                    <p className='gray mt-3'>{description}</p>
                                    {
                                        quantity? (<button className='delivered-btn' onClick={quantityReduce}>Delivered</button>)
                                         :
                                    (<button className='delivered-btn bg-danger text-white'>Sold out</button>)}
                                </div>
                            </div>

                            <div className='form-container'>
                                <h4 className='fw-bold text-center text-primary'>Add Some Quantity To Restock the item</h4>
                                <form onSubmit={handleRestock} className='quantity-form text-center'>
                                    <input type="number" name='restock' placeholder='Restock the item' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <input className='restock-btn btn' type="submit" value="Restock" />
                                </form>
                            </div>
                            <Toaster/>
                            <button onClick={manageInventoryBtn} className='manage-inventories d-flex justify-content-center align-items-center'>Manage Inventories</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UpdateInventory;