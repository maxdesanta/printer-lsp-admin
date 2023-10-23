import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";

// import layout
import AuthLayout from "../components/Layout/AuthLayout";
import HomePageLayout from "../components/Layout/HomePageLayout";

// import pages
import Register from "../pages/Register";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Customer from "../pages/Customer";
// import Orders from "../pages/Orders";

export default function Router() {
  return (
    <Routes> 
      <Route element={<ProtectRoute />}>
        <Route element={<HomePageLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct />} />
          <Route path="/customers" element={<Customer />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
