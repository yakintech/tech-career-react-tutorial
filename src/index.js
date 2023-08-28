import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { CartProvider } from './context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <CounterProvider>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </CounterProvider>
  </CartProvider>



);

