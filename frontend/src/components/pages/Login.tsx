import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setUser }: { setUser: any }) => {
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;

    const sendData = () => {
      axios
        .post("http://localhost:3001/users/login", {
          name: name,
          password: password,
        })
        .then((res) => {
          if (res.data.user) {
            setUser(res.data.user);
          } else {
            console.log(res.data);
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    };
    sendData();
  };

  return (
    <div className="grid place-items-center bg-slate-500 py-10">
      <form
        onSubmit={onSubmitHandler}
        className="h-[500px] flex flex-col bg-white px-20 py-10 rounded-xl relative"
      >
        <h1 className="text-2xl text-center">Login</h1>
        <label htmlFor="name" className="mt-6 text-sm">
          Username
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Type your username"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        <label htmlFor="password" className="mt-6 text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Type your password"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        <button type="submit" className="mt-10 py-2 bg-green-500 rounded-full">
          Login
        </button>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs">
          Don't have an account?{" "}
          <Link to="/signup" className=" text-blue-500">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
