"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation'
import axios, {AxiosError} from "axios";

export default function Home() {
  // states
  // username
  const [username, setUsername] = useState<string>("");
  // password
  const [password, setPassword] = useState<string>("");

  // hooks
  const router = useRouter()

  // form submit handler
  const formSubmitHandler = async () => {
    if (username.trim() && password) {
      try{
        const response = await axios.post("/api/auth/login",{username,password})
        if (response.data.message === "authorized") {
          router.push("/dashboard")
        }
      }catch(err){
        const error = err as AxiosError; 
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      <div className="p-10">
        {/* username */}
        <div className="w-[300px] p-1 border border-neutral-300 rounded-md mb-3">
          <input
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="username"
            className="focus:ring-0 focus:outline-none border-none bg-transparent w-full"
          />
        </div>
        {/* password */}
        <div className="w-[300px] p-1 border border-neutral-300 rounded-md mb-3">
          <input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="focus:ring-0 focus:outline-none border-none bg-transparent w-full"
          />
        </div>
        {/* button */}
        <button onClick={()=>{
          formSubmitHandler()
        }} className="px-10 py-1.5 bg-neutral-700 rounded-md text-white transition-colors ease-in-out duration-150 hover:bg-neutral-600">
          Login
        </button>
      </div>
    </div>
  );
}
