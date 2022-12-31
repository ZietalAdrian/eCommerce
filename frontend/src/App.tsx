import Grid from "./components/Grid";
import Home from "./components/Home";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  return (
    <div className="h-screen">
      <nav className="mb-10">
        <div className="h-10 flex justify-end items-center mx-8">
          <button onClick={() => setShoppingCart((prev: boolean) => !prev)}>
            <FaShoppingBag className="text-xl" />
          </button>
          <div className="relative">
            {shoppingCart && (
              <div className="bg-red-500 w-[250px] h-[80vh] absolute -right-3 top-5"></div>
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
            <Route index element={<Grid setCartItems={setCartItems} />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
