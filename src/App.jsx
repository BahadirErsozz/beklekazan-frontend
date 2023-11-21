import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";
import Addresses from "./pages/Addresses/Addresses";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="admin" element={<Admin />}>
          {" "}
        </Route>
        <Route path="login" element={<Login />}>
          {" "}
        </Route>
        <Route path="product/:productId" element={<Product />}>
          {" "}
        </Route>
        <Route path="sepetim" element={<Basket />}>
          {" "}
        </Route>
        <Route path="adreslerim" element={<Addresses />}>
          {" "}
        </Route>
        <Route path="siparislerim" element={<Orders />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
