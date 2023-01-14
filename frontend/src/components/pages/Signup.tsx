import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;

    const sendData = () => {
      axios
        .post("http://localhost:3001/users/signup", {
          name: name,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          res.status === 201 && navigate("/login");
        })
        .catch((err) => console.log(err.data));
    };
    sendData();
  };

  return (
    <div className="grid place-items-center bg-slate-500 py-10">
      <form
        onSubmit={onSubmitHandler}
        className="h-[500px] flex flex-col bg-white px-20 py-10 rounded-xl relative"
      >
        <h1 className="text-2xl text-center">Signup</h1>
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
          Create password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Create your password"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        {/* <label className="mt-6 text-sm">Confirm password</label>
        <input
          placeholder="Confirm your password"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        /> */}
        <button type="submit" className="mt-10 py-2 bg-green-500 rounded-full">
          Signup
        </button>
        <div className="absolute bottom-10 text-xs left-1/2 -translate-x-1/2">
          Already have an account?{" "}
          <Link to="/login" className=" text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
