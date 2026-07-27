import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context/AuthContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <ProductProvider>
        <App />
        <ToastContainer />
      </ProductProvider>
    </AuthContext>
  </BrowserRouter>
)
