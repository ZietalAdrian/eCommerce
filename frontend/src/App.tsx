import Grid from "./components/Grid";
import Home from "./components/Home";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="my-10 bg-slate-200">
        <ul className="flex justify-center gap-10 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Grid />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
