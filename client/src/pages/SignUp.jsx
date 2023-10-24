import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <div className="modal-signup">
        <h1 className="text-3xl text-center font-semibold my-8">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="rounded-lg p-3 border"
            placeholder="username"
          />
          <input
            type="email"
            className="rounded-lg p-3 border"
            placeholder="e-mail"
          />
          <input
            type="password"
            className="rounded-lg p-3 border"
            placeholder="password"
          />
          <button className="bg-slate-700 uppercase rounded-lg p-3 text-white hover:opacity-90 disabled:opacity-80">
            Sign up
          </button>
        </form>
        <div className="flex gap-3 mt-4">
          <p>Already have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-800 font-semibold">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
