import React from 'react';
import { Link, Route, Router, Switch, } from 'react-router-dom';


const Admin = () => {


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>You can add and manage Products here</h1>


            <h1><Link to="/addProducts">Add Products</Link> </h1>

            <h1><Link to="/manageProducts">Manage Products</Link> </h1>



        </div>
    );
};

export default Admin;