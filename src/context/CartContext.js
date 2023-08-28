import { createContext, useState } from "react";


export const cartContext = createContext(null);


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    return <cartContext.Provider value={{cart,setCart}}>{children}</cartContext.Provider>

}