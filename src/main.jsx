import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Route from './components/Route'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AUthProvider from './Providers/AUthProvider'
import Orders from './components/Orders'
import Private from './components/routes/Private'
import Profile from './components/Profile'





const router = createBrowserRouter([
  {
    path:'/',
    element: <Route></Route>,
    children: [
      {
        path: '/' ,
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/orders',
        element: <Private><Orders/></Private>
      },
      {
        path:'/profile',
        element:<Private> <Profile></Profile></Private>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AUthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AUthProvider>
  </React.StrictMode>,
)
