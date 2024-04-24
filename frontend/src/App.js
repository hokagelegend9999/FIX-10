import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import AddVendingPoint from "./pages/AddVendingPoint";
import Region from "./components/page/System/Region";
import VendingPoints from "./pages/VendingPoints";
import Setting from "./pages/Setting";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/region" element={<Region />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/vendingpoints" element={<VendingPoints />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/vendingpoints/add" element={<AddVendingPoint />} />
         
       
         
          <Route path="/region" element={<Region />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
