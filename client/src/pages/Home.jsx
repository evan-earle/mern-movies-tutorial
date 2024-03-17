import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { useState } from "react";

export const Home = () => {
  const [authType, setAuthType] = useState("login");

  const changeAuthType = (auth) => {
    setAuthType(auth);
  };
  return (
    <div className="min-h-full h-screen flex items-center flex-col py-6 px-4">
      <h1 className="w-1/3 flex justify-center mb-3 p-4 rounded bg-slate-50 text-3xl max-lg:w-2/3 max-sm:w-full">
        FilmFindr
      </h1>
      {authType === "login" ? (
        <Login authType={changeAuthType} />
      ) : (
        <Register authType={changeAuthType} />
      )}
    </div>
  );
};
