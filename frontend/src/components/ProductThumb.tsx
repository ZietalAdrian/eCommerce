import { FC } from "react";
import { Link } from "react-router-dom";

interface ProductThumbProps {
  id: string;
  title: string;
  price: number;
  setCartItems: any;
}

const ProductThumb: FC<ProductThumbProps> = ({
  id,
  title,
  price,
  setCartItems,
}) => {
  return (
    <article className="w-[300px] p-3 bg-lime-500">
      <Link to={`/products/${id}`} className="w-[200px] cursor-pointer">
        <img src={require("../images/shoes.jpg")} alt="" />
      </Link>
      <div className="flex justify-between px-5 pt-1">
        <div>{title}</div>
        <div>${price}</div>
      </div>
      <button
        onClick={() => setCartItems((prev: any[]) => [...prev, id])}
        className="bg-red-500 w-full mt-1 p-1"
      >
        Add to Cart
      </button>
    </article>
  );
};

export default ProductThumb;
