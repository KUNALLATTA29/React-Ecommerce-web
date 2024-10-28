import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './component/Contact.jsx'
import Root from './Redux/Root.jsx'
import Home from './component/Home.jsx'
import Notfound from './component/Notfound.jsx'
import ProductDetail from './component/ProductDetail.jsx'
import LogIn from './component/LogIn.jsx'
import Cart from './component/Cart.jsx'
import { AuthProvider } from './component/AuthContext.jsx'
import { Navigate } from 'react-router-dom'
import { useAuth } from './component/AuthContext.jsx'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path: 'product/:id',
      element: <ProtectedRoute><ProductDetail /></ProtectedRoute>,
    },
    {
      path:"contact",
      element:<ProtectedRoute><Contact /></ProtectedRoute>
    },
    {
      path: '*',
      element: <Notfound />
    },
    {
      path: 'login',
      element: <LogIn/>
    },
    {
      path:'/cart',
      element:<ProtectedRoute><Cart /></ProtectedRoute>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
