import { FC } from "react";
import { Link } from "react-router-dom";

type ProductThumbProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const ProductThumb: FC<ProductThumbProps> = ({
  id,
  title,
  description,
  price,
}) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-[300px] p-3 bg-lime-500 cursor-pointer"
    >
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
    </Link>
  );
};

export default ProductThumb;
