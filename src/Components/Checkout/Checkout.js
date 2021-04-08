import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkOut, setCheckOut] = useState([]);
    const {productId} = useParams();
    useEffect(()=> {
        fetch('http://localhost:5055/products')
        
        .then(res => res.json())
        .then(data => setCheckOut(data))
        console.log(checkOut)
    }, [])
    const result = checkOut.filter(pd => (pd._id == productId))
    console.log(result[0])
    const placeOrder =()=>{
        const newOrder = {...loggedInUser, ...result, orderTime: new Date()}
        fetch('http://localhost:5055/placeOrder',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then (res => res.json())
        .then (data => {
            if(data){
                alert('Your Order Placed Successfully. Go to Order for your details')
            }
        })
    }
    return (
        <div>
            <h2>Hello {loggedInUser.displayName}, thanks for selecting this item.</h2>
            <h3>You Have select {result[0]?.name} </h3> 
            <h5>Weight is {result[0]?.weight} </h5>
            <h4>Price is {result[0]?.price}</h4>
            <button onClick={placeOrder}>Checkout</button>
            <Order></Order>
        </div>
    );
};

export default Checkout;