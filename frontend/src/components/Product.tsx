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
            <div className="text-center">
              <h1>ID: {id}</h1>
              <h2>Title: {product.title}</h2>
              <h2>Description: {product.description}</h2>
              <h2>Price: {product.price}</h2>
            </div>
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
