import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ManageProducts = () => {

    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/manageProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, []);

    const history = useHistory()
    const handleBackToAdmin = () => {
        history.push('/admin')
    }
    const deleteProduct = id => {

        fetch(`http://localhost:5055/deleteProduct/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log('product deleted', result)
            })
        console.log('button clicked', id)

    }

    return (
        <div style={{ textAlign: 'center' }}>

            {
                
                manageProducts.map(mpd => <li> Product Name : {mpd.name} Price : {mpd.price} Weight :{mpd.weight}   
                     <button onClick ={() => deleteProduct( mpd._id)} >   Delete   </button> </li>)

            }

            <button onClick={handleBackToAdmin}>Back</button>
        </div>
    );
};

export default ManageProducts;