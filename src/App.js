import { Link, Route, Routes } from "react-router-dom"
import Home from "./routerSample/pages/Home"
import About from "./routerSample/pages/About"
import Contact from "./routerSample/pages/Contact"
import Blog from "./routerSample/pages/Blog"
import NotFound from "./routerSample/pages/NotFound"
import ProductPage from "./effect/ProductPage"
import AddProduct from "./effect/AddProduct"
import SupplierPage from "./routerSample/pages/SupplierPage"
import SupplierDetail from "./routerSample/pages/SupplierDetail"
import CounterPage from "./routerSample/pages/CounterPage"
import CartPage from "./routerSample/pages/CartPage"
import { useContext } from "react"
import { cartContext } from "./context/CartContext"


function App() {

    const {cart, setCart} = useContext(cartContext)

    return <>
        <nav>
            <ul style={{display:'flex', justifyContent:'space-between', fontSize:25}}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/cart'>Cart <span style={{color:'red'}}>( {cart.length} ) </span></Link></li>
                <li><Link to='/addproduct'>Add Product</Link></li>
                <li><Link to='/suppliers'>Suppliers</Link></li>
                <li><Link to='/counterpage'>Counter Page</Link></li>



            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/suppliers" element={<SupplierPage />} />
            <Route path="/suppliers/:id" element={<SupplierDetail />} />
            <Route path="/counterpage" element={<CounterPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<NotFound />} />

        </Routes>

        <h1>Site Footer</h1>
    </>
}

export default App