import { useEffect, useState } from "react";

const useMyItems = () => {
    const [items, setMyItems] = useState([]);

    useEffect( () => {
        fetch('https://auto-accord.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[items]);


    return [items, setMyItems]
};

export default useMyItems;