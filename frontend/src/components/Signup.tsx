import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid place-items-center bg-slate-500 py-10">
      <form className="h-[500px] flex flex-col bg-white px-20 py-10 rounded-xl relative">
        <h1 className="text-2xl text-center">Signup</h1>
        <label className="mt-6 text-sm">Username</label>
        <input
          placeholder="Type your username"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        <label className="mt-6 text-sm">Create password</label>
        <input
          placeholder="Create your password"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        <label className="mt-6 text-sm">Confirm password</label>
        <input
          placeholder="Confirm your password"
          className="p-2 text-sm border-solid border-b-[1px] border-black outline-none"
        />
        <button className="mt-10 py-2 bg-green-500 rounded-full">Signup</button>
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
