import './App.css'
import NavBar from './components/nav/NavBar.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './components/session/Signin.jsx'
import Signup from './components/session/Signup.jsx'
import Product from './components/products/product.jsx'
import Home from './components/home/home.jsx'
import Checkout from './components/checkout/Checkout.jsx'
import ProductIndex from './components/products/ProductIndex.jsx'
// function Layout() {
  
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'signin',
    element: <Signin />
  },
  {
    path: 'signup',
    element: <Signup/>
  },
  {
    path: 'products/:productId',
    element: <Product />
  },
  {
    path: 'checkout',
    element: <Checkout />
  },
  {
    path: 'products',
    element: <ProductIndex />
  },
  {
    path: '/categories/:category',
    element: <ProductIndex />
  }
])


function App() {
  return <RouterProvider router={router} />
}


export default App
