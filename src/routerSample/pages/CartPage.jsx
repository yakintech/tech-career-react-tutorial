import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/CartContext'

function CartPage() {

    const { cart, setCart } = useContext(cartContext)

    var totalPrice = 0;

    cart.forEach(item => {
        totalPrice = totalPrice + ( item.unitPrice * item.quantity )
    });

    const removeItem = (id) => {
        var filteredCart = cart.filter(q => q.id != id);
        setCart(filteredCart)
    }

    return (<>
    <h1>Total: {totalPrice.toFixed(2)}</h1>
    <button onClick={() => setCart([])}>Empty</button>
    <ul>
        {
            cart.map(item => {
                return <>
                <li>{item.name} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}</li>
                <button onClick={() => removeItem(item.id)}>Remove Item</button>
                </>
            })
        }
    </ul>
    </>)
}

export default CartPage