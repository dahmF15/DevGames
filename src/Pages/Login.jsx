import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="w-[45rem] h-[30rem] rounded-3xl shadow-2xl overflow-hidden 
                   bg-white bg-opacity-20 backdrop-blur-md  "
      >
        <h1 className="text-3xl font-bold text-center mt-10 text-white">
          Login
        </h1>
        <div>
          <input
            placeholder="Email"
            type="email"
            className="border-solid border-2 border-gray-300 py-2 px-4 rounded-lg w-[25rem] mt-20 ml-40"
          />
          <input
            placeholder="Password"
            type="password"
            className="border-solid border-2 border-gray-300 py-2 px-4 rounded-lg w-[25rem] mt-10 ml-40"
          />
          <button className="bg-pink-600 font-bold text-white py-2 px-4 rounded-lg mt-10 ml-40" type="submit">
            Login
          </button>
          <h3 className="text-white text-center mt-10">Don't have an account? <a href="/Signup"><span className="text-pink-600 hover:text-pink-300">Let's create one</span></a></h3>
        </div>
      </form>
    </div>
  );
}
