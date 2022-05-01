import { useEffect, useState } from "react";

const useInventoryItems = () => {

    const [items, setInventoryItems] = useState([]);
    useEffect( () => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then(data => {
            setInventoryItems(data)
        })
    },[items]);


    return [items, setInventoryItems]
};

export default useInventoryItems;