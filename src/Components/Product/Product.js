import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {


    return (
        <div className="card">

            <img style={{ height: '300px' }} src={product.imageURl} alt="" />
            <div className="card-details">
                <h2>{product.name}</h2>
                <h4>{product.price}</h4>
                <h5>{product.weight}</h5>
                <h3><Link to={`/checkOut/${product._id}`}>Buy Now</Link></h3> 
            </div>


            
        </div>
    );
};

export default Product;