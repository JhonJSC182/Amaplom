import './App.css'
import NavBar from './components/nav/NavBar.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './components/session/Signin.jsx'
import Signup from './components/session/Signup.jsx'
import Product from './components/products/product.jsx'
import Home from './components/home/home.jsx'
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
    path: 'product',
    element: <Product />
  }
])


function App() {
  return <RouterProvider router={router} />
}


export default App
