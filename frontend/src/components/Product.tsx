import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getItem = async () => {
    try {
      const res = await axios.get("http://localhost:3001/products/" + id);
      res && setProduct(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      {!isLoading && (
        <div>
          {product ? (
            <article className="flex justify-center py-[50px] bg-cyan-100">
              <div className="p-10 bg-white">
                <img
                  src={require("../images/shoes.jpg")}
                  alt=""
                  className="border-solid border-black border-[1px] p-10"
                />
              </div>
              <div className="relative bg-red-500/50 w-[400px] p-5">
                <h1 className="text-3xl mb-1">{product.title}</h1>
                <h2 className="text-base mb-4">{product.description}</h2>
                <h3 className="text-xs">ID: {id}</h3>
                <h2 className="text-xl absolute bottom-28 pl-1">
                  $ {product.price}
                </h2>
                <button className="text-xl absolute bottom-14 bg-gray-200 w-[200px] py-1">
                  Add to Cart</button>
              </div>
            </article>
          ) : (
            <div>
              <h1 className="text-3xl text-center mt-[200px]">
                Produkt o podanym ID nie istnieje
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
