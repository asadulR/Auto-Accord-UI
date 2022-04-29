import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/experts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setExperts(data)
                setLoading(false)
            });
    }, []);

    return (
        <div className='experts-container'>
           <div className="container">
               <>
                    {
                        loading? 
                        (<Loading></Loading>) :

                        (
                            <h2>{experts.length}</h2>
                        )
                    }
               </>
           </div>
        </div>
    );
};

export default Experts;