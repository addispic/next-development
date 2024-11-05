"use client"
import React from 'react'
// icons
import { RiDeleteBin6Line } from "react-icons/ri";
const DeleteNoteBtn = ({_id}:{_id: string}) => {

    // delete note handler
    const deleteNoteHandler = () => {

        console.log(_id)
    }
  return (
    <button onClick={deleteNoteHandler}>
        <RiDeleteBin6Line className='text-red-300 transition-colors ease-in-out duration-150 hover:text-red-500'/>
    </button>
  )
}

export default DeleteNoteBtn