import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-lg opacity-80 bg-slate-300 p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto  flex-col md:flex-row">
        <Link to={"/"}>
          {" "}
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap m-1">
            <span className="text-slate-500 opacity-100">Amor</span>
            <span className="text-slate-900 opacity-100">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 rounded-3xl p-3 flex items-center m-1">
          <input
            type="text"
            placeholder="Search item..."
            className="outline-none cursor-pointer bg-transparent w-24 md:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-5 items-center">
          <Link to={"/"}>
            <li className="hover:text-green-700 hover:underline  opacity-100 text-slate-900 text-md md:text-xl  hidden md:inline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-green-700 hover:underline text-slate-900 text-md md:text-xl  hidden md:inline">
              About
            </li>
          </Link>{" "}
          <Link to={"/sign-in"}>
            <li className="text-white  text-slate-900 text-md md:text-xl  font-bold bg-green-600 rounded-lg hover:bg-green-700 hover:rounded-3xl md:px-6 md:py-3">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
