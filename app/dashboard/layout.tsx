"use client"
import React, {useState,useEffect} from "react"
import axios from 'axios'
import {useRouter} from 'next/navigation'

export default function DashboardLayout({children}: {children: React.ReactNode}){
    // states
    const [isLoginSuccess,setIsLoginSuccess] = useState<boolean>(false)
    // hooks
    const router = useRouter()

    // effect
    useEffect(()=>{
        (async ()=>{
           const {message,error} = await getUser()
           if(error){
            router.push("/")
           }
           if(message){
            setIsLoginSuccess(true)
           }
        })()
    },[])

    if(!isLoginSuccess){
        return <h1>Loading . . . </h1>
    }
    return (
        <main>
            <h3>Dashboard Layout</h3>
            {children}
        </main>
    )
}

async function getUser() {
    try{
        const response = await axios.get("/api/auth/me")
        return {
            message: "authorized",
            error: null
        }
    }catch(err){
        return {message: null,error: "unauthorized"}
    }
}