import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";

import Grid from "./components/pages/Grid";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import NotFound from "./components/pages/NotFound";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
};

type UserType = {
  _id: string;
  name: string;
};

function App() {
  const [shoppingCart, setShoppingCart] = useState(false);
  const [userCart, setUserCart] = useState<ProductType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

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

  const logout = async () => {
    axios
      .get("http://localhost:3001/users/logout")
      .then((res) => console.log(res.data))
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <nav className="mb-10">
        <div className="h-10 flex justify-end items-center mx-8">
          {!user ? (
            <ul className="flex pr-5 mr-8 gap-5 border-solid border-r-[1px] border-black">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          ) : (
            <div className="flex justify-end">
              <div>Welcome {user.name}</div>
              <button
                className="mr-8 pr-5 ml-8 border-solid border-r-[1px] border-black"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
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
          <Route
            path="/login"
            element={
              user ? <Navigate replace to="/" /> : <Login setUser={setUser} />
            }
          />
          <Route
            path="/signup"
            element={user ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
