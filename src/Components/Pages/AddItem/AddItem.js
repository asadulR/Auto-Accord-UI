import React from 'react';
import './AddItem.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Auth/Firebase.init';
import toast, { Toaster } from 'react-hot-toast';
AOS.init();
const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const img = event.target.img.value;
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const email = user?.email;

        const item = {img, name, supplier, price, quantity, description, email};

        //  adding my item to all items collection
        const inventoryUrl = `http://localhost:4000/items/`;

        fetch (inventoryUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(result => {
            toast.success("Inventory Item Added");
            console.log(result);
        })


        // Adding my item to myitem database collection
        const myInventoryUrl = `http://localhost:4000/myitems/`;

        fetch (myInventoryUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(result => {
            // toast.success("Inventory Item Added");
            console.log(result);
        })


        event.target.reset();
    };


    return (
        <div className='add-item-container'>
            <div className="container">
                <h2 className='text-white text-center'>Add a New Inventory Item</h2>
                <form onSubmit={handleAddItem} className="item-form-container row g-4" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="col-md-6">
                        <input type="email" name='email' value={user?.email} readOnly className="form-control" id="inputEmail4 " />
                    </div>
                    <div className="col-md-6">
                        <input type="text" required name='supplier' placeholder='Your name *' className="form-control" id="inputname " />
                    </div>
                    <div className="col-12">
                        <input type="text" name='name' className="form-control" required id="inputItemName" placeholder="Inventory item name *" />
                    </div>
                    <div className="col-md-3">
                        <input type="number" required name='price' placeholder='Price *' className="form-control" id="inputPrice " />
                    </div>
                    <div className="col-md-3">
                        <input type="number" required name='quantity' placeholder='Quantity *' className="form-control" id="inputQuantity " />
                    </div>

                    <div className="col-md-6">
                        <input type="text" required placeholder='Photo URL *' name='img' className="form-control" id="inputPhotoUrl" />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" required id="exampleFormControlTextarea1" name='description' placeholder='Item Description *' rows="5"></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <input type="submit" className="btn mt-4 add-item-btn" value='ADD ITEM' />
                    </div>
                </form>
            </div>
            <Toaster/>
        </div>
    );
};

export default AddItem;