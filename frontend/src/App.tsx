import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

import Grid from "./components/Grid";
import Home from "./components/Home";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import ShoppingCart from "./components/ShoppingCart";
import axios from "axios";

type User = {
  id: string;
  title: string;
  description: string;
  price: number;
};

function App() {
  const [shoppingCart, setShoppingCart] = useState(false);
  const [userCart, setUserCart] = useState<User[]>([]);

  const isFoundProduct = (id: any) => {
    const res = userCart.find((item: any) => {
      return item._id === id;
    });
    return res;
  };

  const getId = async (id: string) => {
    if (isFoundProduct(id)) {
      console.log("This product is already in the shopping cart");
    } else {
      const res = await axios.get("http://localhost:3001/products/" + id);
      res && setUserCart((prev: any) => [...prev, res.data]);
    }
  };

  return (
    <div className="pb-32">
      <nav className="mb-10">
        <div className="h-10 flex justify-end items-center mx-8">
          <button onClick={() => setShoppingCart((prev: boolean) => !prev)}>
            <FaShoppingBag className="text-xl" />
          </button>
          <div className="relative">
            {shoppingCart && (
              <ShoppingCart userCart={userCart} setUserCart={setUserCart} />
            )}
          </div>
        </div>
        <div>
          <ul className="flex justify-center gap-10 text-xl bg-slate-300">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Grid getId={getId} />} />
            <Route path=":id" element={<Product getId={getId} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
