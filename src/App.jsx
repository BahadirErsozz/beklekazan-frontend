import Home from "./pages/Home/Home"
import Admin from "./pages/Admin/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="admin" element={<Admin />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
