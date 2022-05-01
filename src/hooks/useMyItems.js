import { useEffect, useState } from "react";

const useMyItems = () => {
    const [items, setMyItems] = useState([]);

    useEffect( () => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[items]);


    return [items, setMyItems]
};

export default useMyItems;