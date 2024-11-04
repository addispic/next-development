"use client"
import React, {useState,useEffect,useRef} from 'react'

// icons
import { IoMdAttach } from "react-icons/io";
import { GrSend } from "react-icons/gr";

const NewNote = () => {
    // states
    // note text
    const [noteText,setNoteText] = useState<string>("")
    // files
    const [noteFiles,setNoteFiles] = useState<File[]>([])

    // reference
    // note text area reference
    const noteTextAreaReference = useRef<HTMLTextAreaElement | null>(null)

    // effect
    // note text area height
    useEffect(()=>{
        if(noteTextAreaReference.current){
            noteTextAreaReference.current.style.height = '18px'
            noteTextAreaReference.current.style.height = `${noteTextAreaReference.current.scrollHeight}px`
        }
    },[noteText])

    // handler
    // note text change handler
    const noteTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(e.target.value)
    }
    // note files change handler
    const noteFilesChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const files = e.target.files
            let noteF: File[] = []
            for(let i = 0 ; i < files.length; i++){
                noteF.push(files[i])
            }
            setNoteFiles(noteF)
        }
    }
  return (
    <div className='px-[5%] py-1.5 flex items-end gap-x-5'>
        {/* file picker */}
        <div>

        <input type="file" multiple onChange={noteFilesChangeHandler} accept='image/*' id='file-input' hidden />
        <label htmlFor="file-input">
            <IoMdAttach className='text-2xl text-green-600 cursor-pointer'/>
        </label>
        </div>
        {/* text */}
        <div className='flex-1 border border-green-600 rounded-sm text-sm p-1'>
            <textarea onChange={noteTextHandler} value={noteText} ref={noteTextAreaReference} className='focus:ring-0 focus:outline-none border-none w-full resize-none h-[18px] max-h-[350px]' id='note-text-textarea' name="text" placeholder='note . . .'></textarea>
        </div>
        {/* send button */}
        <button>
            <GrSend className='text-green-600 text-xl'/>
        </button>

    </div>
  )
}

export default NewNote