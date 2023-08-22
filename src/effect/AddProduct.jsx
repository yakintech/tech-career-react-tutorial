import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0);
    const [unitsInStock, setunitsInStock] = useState(0);
    const [products, setproducts] = useState([]);

    useEffect(() => {
        
        getProducts();
    
    }, [])
    

    const add = () => {

        var newProduct = {
            name,
            unitPrice,
            unitsInStock
        }
        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                alert('Success!!');
                getProducts();
            })

    }


    const getProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            setproducts(res.data);
        })
    
    }


    return (<>
        <h1>Add Product Page</h1>
        <div>
            <label>Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Unit Price</label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <label>Units In Stock</label>
            <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
        <hr />
        <ul>
            {
                products && products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default AddProduct