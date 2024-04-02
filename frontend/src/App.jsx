import './App.css'
import NavBar from './components/nav/NavBar.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './components/session/Signin.jsx'
import Signup from './components/session/Signup.jsx'

// function Layout() {
  
// }

const router = createBrowserRouter([
  {
    path: '/',
    element:<NavBar />
  },
  {
    path: 'signin',
    element: <Signin />
  },
  {
    path: 'signup',
    element: <Signup/>
  }
])


function App() {
  return <RouterProvider router={router} />
}


export default App
