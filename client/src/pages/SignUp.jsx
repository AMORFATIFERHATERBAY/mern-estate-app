import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(true);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
  };

  return (
    <div id="modal-signup" className="max-w-lg mx-auto p-3">
      <div>
        <h1 className="bg-black text-white text-3xl text-center font-semibold my-8 p-2">
          Sign Up
        </h1>
        <form onSubmit={submitHandle} className="flex flex-col gap-4">
          <input
            type="text"
            id="username"
            className="rounded-lg p-3 border"
            placeholder="username"
            onChange={onChangeHandle}
          />
          <input
            type="email"
            id="email"
            className="rounded-lg p-3 border"
            placeholder="e-mail"
            onChange={onChangeHandle}
          />
          <input
            type="password"
            id="password"
            className="rounded-lg p-3 border"
            placeholder="password"
            onChange={onChangeHandle}
          />
          <button className="bg-rose-700 uppercase rounded-3xl  p-3 text-white hover:opacity-90 disabled:opacity-80">
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <button className="bg-white border border-zinc-800 rounded-3xl  p-3 text-stone-700 hover:opacity-90 disabled:opacity-80">
            <div className=" flex flex-wrap items-center justify-center">
              <div
                style={{
                  height: "18px",
                  marginRight: "8px",
                  minWidth: "18px",
                  width: "18px",
                }}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              </div>
              <p>Sign up with Google</p>
            </div>
          </button>
        </form>
        <div
          style={{ height: "1px" }}
          className="content-none mt-4  bg-slate-400"
        ></div>
        <div className="flex gap-3 mt-4  ">
          <p>Already have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-800 font-semibold">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
        <div
          style={{ height: "1px" }}
          className="content-none mt-4  bg-slate-400"
        ></div>
      </div>
    </div>
  );
}
