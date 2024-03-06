import { Oval } from "react-loader-spinner";
import { useState } from "react";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const showPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <form className="w-1/3 bg-slate-50 rounded p-4 max-lg:w-2/3 max-sm:w-full">
      <div className="flex justify-evenly w-full">
        <h3 className="text-center p-2 w-3/5 rounded-full cursor-pointer">
          Login
        </h3>
      </div>
      <div className="flex flex-col mt-5">
        <div>
          <label htmlFor="email">Email Address</label>
          <span className="text-red-500"> *</span>
        </div>
        <input
          className="mt-2 w-full p-2 border-2 focus:outline-none focus:border-blue-400 rounded"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="mt-3">
        <div>
          <label htmlFor="password">Password</label>
          <span className="text-red-500"> *</span>
        </div>
        <input
          className="mt-2 w-full p-2 border-2 focus:outline-none focus:border-blue-400 rounded"
          type={show ? "text" : "password"}
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="-ml-12 bg-slate-200 p-1 rounded text-xs w-10"
          onClick={showPassword}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      <button
        className="mt-4 w-full rounded p-2 text-center bg-blue-500 text-white"
        type="submit"
      ></button>
      <button
        className="mt-2 w-full rounded p-2 text-center bg-slate-500 text-white"
        type="submit"
      ></button>
    </form>
  );
};
