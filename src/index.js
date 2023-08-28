import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterProvider>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </CounterProvider>


);

