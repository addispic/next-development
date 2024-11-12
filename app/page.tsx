"use client"
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import axios, {AxiosError} from 'axios'

export default function Home() {
  // states
  // username
  const [username,setUsername] = useState<string>("")
  // password
  const [password,setPassword] = useState<string>("")

  // hooks
  const router = useRouter()

  // submit handler
  const formSubmitHandler = async () => {
    if(username.trim() && password.trim()){
      try{
        const response = await axios.post("/api/auth/login",{username,password})
        if(response.data.message === "authorized"){
          router.push("/dashboard")
        }
      }catch(err){
        const error = err as AxiosError;
        console.log(error.message)
      }

    }
  }
  return (
    <main className="p-5">
      {/* home */}
      <h3>Home Page</h3>
      {/* form */}
      <div>
        {/* username */}
        <div className="mb-3 border border-neutral-400 rounded-md px-3 py-2 w-[300px]">

        <input value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
          setUsername(e.target.value)
        }} className="focus:ring-0 w-full focus:outline-none border-none" type="text" placeholder="username" />
        </div>
        {/* password */}
        <div className="mb-3 border border-neutral-400 rounded-md px-3 py-2 w-[300px]">

        <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
          setPassword(e.target.value)
        }} className="focus:ring-0 w-full focus:outline-none border-none" type="password" placeholder="password" />
        </div>
        {/* button */}
        <button onClick={()=>{
          formSubmitHandler()
        }} className="px-12 py-2 bg-blue-600 hover:bg-blue-500 text-white">Login</button>
      </div>
    </main>
  );
}
