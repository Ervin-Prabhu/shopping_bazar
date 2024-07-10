import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
