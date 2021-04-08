import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://thawing-wave-03262.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div style ={{textAlign:'center'}}>
            <h1>You Have ordered {orders.length} items.</h1>
            {
                orders.map(od=> <li><span style={{color:'blue',fontWeight:'bold'}}>Product Name :</span> {od[0].name} <span style={{color:'blue',fontWeight:'bold'}}> Weight : </span> {od[0].weight} <span style={{color:'blue',fontWeight:'bold'}}> Price :</span> {od[0].price} <span style={{color:'blue',fontWeight:'bold'}}>Order Time :</span>{od.orderTime}</li>)
            }
        </div>
    );
};

export default Order;