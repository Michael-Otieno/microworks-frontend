import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import signup from "../assets/signup.png";


function Admin({loginUser}) {
  
  return (
    <div className="flex justify-center w-full">
      <div className="text-center bg-homeBg w-1/4 pt-12">
        <div>
          <h2 className="font-semibold">
            <span className="text-green">KOT</span>{" "}
            <span className="text-white">Microworks</span>
          </h2>
          <div className="flex justify-center mt-5">
            <img src={image1} />
          </div>
          <div className="flex justify-center mt-6">
            <img src={image1} />
          </div>
          <div className="flex justify-center mt-6">
            <img src={image1} />
          </div>
          <div className="flex justify-center mt-6">
            <img src={image1} />
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-homeBg2 h-screen flex justify-center items-center">
        <form className="rounded-lg  relative flex flex-col  bg-white outline-none w-1/2" onSubmit={loginUser}>
        <div className="flex justify-center">
        <img src={signup} alt='' className="h-40 w-1/2"/>
        </div>

          {/*header*/}
          <div className="text-center p-5 rounded-t">
            <h3 className="text-3xl font-semibold">Log in to KTC-Micrworks</h3>
          </div>
          {/*body*/}

          <div className="relative px-5  flex-auto">
            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor mb-4"
              name="username"
              
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-2"
              name="password"
              
            />
            <p className="float-right">
              <Link to='' className="text-blue">Forgot Password?</Link>
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-center p-6">
            <button
              className="rounded px-8 py-1 text-xl text-white bg-green outline-none w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
