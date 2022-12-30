import { useEffect, useState } from "react";
import axios from "axios";
import ProductThumb from "./ProductThumb";

const Grid = () => {
  const [grid, setGrid] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/products");
      res && setGrid(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 place-items-center">
      {grid &&
        grid.map((item, index) => {
          const { _id, title, description, price } = item;
          return (
            <ProductThumb
              id={_id}
              key={_id}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
    </div>
  );
};

export default Grid;
