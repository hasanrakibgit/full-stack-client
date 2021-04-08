import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data =>{
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURl: imageURL
        };
        const url =`https://thawing-wave-03262.herokuapp.com/addProducts`
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log ('server side response', res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '861332e40264dee2db522db616a3ae0c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function(response){
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        });

    }

    const history = useHistory()
    const handleBackToAdmin = () => {
        history.push('/admin')
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Product Name     </label>
                <input name="name" defaultValue=" "   ref={register} placeholder = "Enter Name"/>
                <br/>
                <label>Product Price    </label>
                <input name="price" defaultValue=" "  ref={register} />
                <br/>
                <label>Product Weight   </label>
                <input name="weight" defaultValue=" "  ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
            <button onClick={handleBackToAdmin}>Back</button>
        </div>
    );
};

export default AddProducts;