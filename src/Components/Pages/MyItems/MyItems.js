import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Auth/Firebase.init';
import Loading from '../Shared/Loading/Loading';
import MyItem from './MyItem';
import './MyItems.css';
import { BsFillCloudDownloadFill } from "react-icons/bs";




const MyItems = () => {

    // Load my added Inventory items
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    const email = user?.email;
    // console.log(email);
    useEffect(() => {
        const url = `https://auto-accord.herokuapp.com/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data ?
                    setMyItems(data)
                    : <Loading />
            });

    }, [myItems, user])
    return (
        <div className='my-items-container'>
            <div className="container">
                <h2 className='text-center mb-5 pb-4 fw-bolder text-primary'>You have added {myItems.length} items so far <BsFillCloudDownloadFill/></h2>

                <div className='row row-cols-1 g-5'>
                    {
                        myItems.map(myitem => <MyItem
                            key={myitem._id}

                            item={myitem}
                        ></MyItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyItems;