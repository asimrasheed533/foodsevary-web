import "./style.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import Cart from "./screens/Cart";
import Details from "./screens/Details";

import Home from "./screens/Home";
import Products from "./screens/Products";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Header from "./compounts/Header";
import Footer from "./compounts/Footer";
import Signin from "./screens/Signin";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function App({}) {
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    axios.get(`${window.location.origin}/api/products`).then((res) => {
      setProducts(res.data.filter((product) => product.isActive === true));
    });
  }, []);

  return (
    <BrowserRouter>
      <Header products={products} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/products/:id"
          element={<Products products={products} />}
        />
        <Route path="/details/:id" element={<Details />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="*"
          element={<div className="not__found">Page Not Found</div>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
