import { FC, useEffect, useState } from "react";
import axios from "axios";
import ProductThumb from "../ProductThumb";

interface GridProps {
  getId: (id: string) => void;
}

const Grid: FC<GridProps> = ({ getId }) => {
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
    <div className="grid grid-cols-3 place-items-center gap-10 pb-20">
      {grid &&
        grid.map((item) => {
          const { _id, title, price } = item;
          return (
            <ProductThumb
              id={_id}
              key={_id}
              title={title}
              price={price}
              getId={getId}
            />
          );
        })}
    </div>
  );
};

export default Grid;
