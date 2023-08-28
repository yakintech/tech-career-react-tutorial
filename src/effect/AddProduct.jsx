import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext';

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0);
    const [unitsInStock, setunitsInStock] = useState(0);
    const [products, setproducts] = useState([]);


    const { cart, setCart } = useContext(cartContext);

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

    const addToCart = (item) => {

        //eğer ürün daha önce eklenmemişse quantity 1 olarak diziye eklerim. Ürün eklenmişse quantity 1 artar

        var productControl = cart.find(q => q.id == item.id);


        if(productControl){
            productControl.quantity = productControl.quantity + 1;
            setCart([...cart]);
        }
        else{
            var newCartItem = {
                id: item.id,
                name : item.name,
                unitPrice: item.unitPrice,
                quantity : 1
            }

            setCart([...cart, newCartItem]);
        }

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
                products && products.map(item => {
                    return <>
                        <li>{item.name} - {item.unitPrice.toFixed(2)}</li>
                        <button onClick={() => addToCart(item)}>Add To Cart</button>
                    </>
                })
            }
        </ul>
    </>)
}

export default AddProduct