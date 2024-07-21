import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MyState from "./context/data/myState";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productinfo/Productinfo";
import AddProduct from "./pages/admin/pages/Addproduct";
import Allproducts from "./pages/allproducts/Allproducts";
import UpdateProduct from "./pages/admin/pages/Updateproduct";
// import Layout from "./components/layout/Layout";
const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order/>
            </ProtectedRoute>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
              </ProtectedRouteForAdmin>} />
          <Route path="/*" element={<Nopage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/allproducts" element={<Allproducts/>}/>
          <Route path="/productinfo/:id" element={<ProductInfo/>}/>
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
              </ProtectedRouteForAdmin>}/>
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoute=({children})=>{
  const user=localStorage.getItem('user')
  if(user){
    return children
  }
  else <Navigate to={'/login'}/>
}

export const ProtectedRouteForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'))
  if(admin.user.email=='akshajvasudeva@gmail.com'){
    return children
  }
  else <Navigate to={'/login'}/>
}