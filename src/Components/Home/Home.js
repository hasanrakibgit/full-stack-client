import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import image from '../../images/giphy.gif';
import './Home.css';
const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-wave-03262.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                {
                    products.length === 0 && <img src={image} alt="" />
                }
            </div>

            <div className="container">
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;