import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  );
}

export default App;
