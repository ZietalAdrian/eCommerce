import { FC } from "react";

interface ShoppingCartProps {
  userCart: User[];
  setUserCart: (user: User[]) => void;
}

type User = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const ShoppingCart: FC<ShoppingCartProps> = ({ userCart, setUserCart }) => {
  const onRemove = (id: any) => {
    const copy = [...userCart];
    const res = copy.filter((item: any) => {
      return !(item._id === id);
    });
    setUserCart(res);
  };

  return (
    <div className="bg-red-500 w-[250px] h-[80vh] absolute -right-3 top-5 ">
      <div className="h-[73vh] overflow-scroll">
        {userCart &&
          userCart.map((item: any) => {
            return (
              <div key={item._id} className="flex bg-green-500 m-1">
                <div>
                  <img
                    src={require("../images/shoes.jpg")}
                    alt=""
                    className="w-[100px] m-1"
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <h1>{item.title}</h1>
                  <h2>${item.price}</h2>
                  <button
                    onClick={() => onRemove(item._id)}
                    className="bg-slate-200 rounded-2xl px-2 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-[70%] mx-auto mt-3">
        <button className="w-full bg-yellow-300 rounded-full">Payment</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
