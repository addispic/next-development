"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
// icons
import { RiDeleteBin6Line } from "react-icons/ri";


const DeleteNoteBtn = ({_id}:{_id: string}) => {
    // hooks
    const router = useRouter()

    // delete note handler
    const deleteNoteHandler = async () => {

        const response = await fetch(`http://localhost:5000/api/notes/delete/${_id}`,{
            method: 'DELETE'
        })
        const data = await response.json()
        if(data.message === "note deleted successfully"){
            router.push('/')
        }
        console.log(data)
    }
  return (
    <button onClick={deleteNoteHandler}>
        <RiDeleteBin6Line className='text-red-300 transition-colors ease-in-out duration-150 hover:text-red-500'/>
    </button>
  )
}

export default DeleteNoteBtn