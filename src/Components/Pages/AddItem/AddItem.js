import React from 'react';
import './AddItem.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AddItem = () => {
    return (
        <div className='add-item-container'>
            <div className="container">
                <h2 className='text-white text-center'>Add a New Inventory Item</h2>
                <form className="item-form-container row g-4" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div class="col-md-6">
                        <input type="email" name='email' class="form-control" id="inputEmail4 " />
                    </div>
                    <div class="col-md-6">
                        <input type="text" required name='supplier' placeholder='Your name *' class="form-control" id="inputname " />
                    </div>
                    <div class="col-12">
                        <input type="text" name='name' class="form-control" required id="inputItemName" placeholder="Inventory item name *" />
                    </div>
                    <div class="col-md-3">
                        <input type="number" required name='price' placeholder='Price *' class="form-control" id="inputPrice " />
                    </div>
                    <div class="col-md-3">
                        <input type="number" required name='quantity' placeholder='Quantity *' class="form-control" id="inputQuantity " />
                    </div>

                    <div class="col-md-6">
                        <input type="text" required placeholder='Photo URL *' name='img' class="form-control" id="inputPhotoUrl" />
                    </div>
                    <div class="col-12">
                        <textarea class="form-control" required id="exampleFormControlTextarea1" name='description' placeholder='Item Description *' rows="5"></textarea>
                    </div>

                    <div class="col-12 text-center">
                        <input type="submit" class="btn mt-4 add-item-btn" value='ADD ITEM' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;