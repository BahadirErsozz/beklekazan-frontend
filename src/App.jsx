import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";
import Addresses from "./pages/Addresses/Addresses";
import Orders from "./pages/Orders/Orders";
import Order from "./pages/Order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
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
        <Route path="siparis/:orderId" element={<Order />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
