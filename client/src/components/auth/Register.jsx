import { Oval } from "react-loader-spinner";
import { useState } from "react";

export const Register = ({ authType }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFileInputChange = () => {};

  return (
    <form className="w-1/3 bg-slate-50 rounded p-4 max-lg:w-2/3 max-sm:w-full">
      <div className="flex justify-evenly w-full">
        <h3
          className="text-center p-2 w-3/5 rounded-full cursor-pointer"
          onClick={() => authType("login")}
        >
          Login
        </h3>
        <h3
          className={`text-center p-2 w-3/5 rounded-full cursor-pointer ${
            authType !== "register" ? "bg-blue-200 " : null
          }`}
        >
          Register
        </h3>
      </div>
      <div className="flex flex-col mt-5">
        <div>
          <label htmlFor="username">Name</label>
          <span className="text-red-500"> *</span>
        </div>
        <input
          className="mt-2 w-full p-2 border-2 focus:outline-none focus:border-blue-400 rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
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
      <div className="mt-3">
        <div>
          <label htmlFor="password">Confirm Password</label>
          <span className="text-red-500"> *</span>
        </div>
        <input
          className="mt-2 w-full p-2 border-2 focus:outline-none focus:border-blue-400 rounded"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          placeholder="Enter password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          className="-ml-12 bg-slate-200 p-1 rounded text-xs w-10"
          onClick={handleShowConfirmPassword}
        >
          {showConfirmPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="mt-3">
        <div>
          <label htmlFor="photo">Upload Profile Photo</label>
        </div>
        <input
          className="mt-2 w-full p-2"
          type="file"
          name="image"
          onChange={handleFileInputChange}
        />
        <button
          className="-ml-12 bg-slate-200 p-1 rounded text-xs w-10"
          onClick={handleShowConfirmPassword}
        >
          {showConfirmPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button
        className="mt-4 w-full rounded p-2 text-center bg-blue-500 text-white"
        type="submit"
      >
        {loading ? (
          <Oval
            visible={true}
            height="30"
            width="30"
            color="white"
            secondaryColor="grey"
            ariaLabel="oval-loading"
            wrapperStyle={{ justifyContent: "center" }}
          />
        ) : (
          "Login"
        )}
      </button>
      <button
        className="mt-2 w-full rounded p-2 text-center bg-slate-500 text-white"
        type="submit"
      >
        {loading ? (
          <Oval
            visible={true}
            height="30"
            width="30"
            color="white"
            secondaryColor="grey"
            ariaLabel="oval-loading"
            wrapperStyle={{ justifyContent: "center" }}
          />
        ) : (
          "Login as Guest"
        )}
      </button>
    </form>
  );
};
