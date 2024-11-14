"use client"
import {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";

// hooks
import {useAppDispatch} from '../../lib/hooks'

// slices
// notes
import {addNewNote} from "../../lib/features/notes/notesSlice"

// icons
import { GrSend } from "react-icons/gr";

export default function AddNewNoteForm(){
    // state
    const [note,setNote] = useState<string>("")
    const [isFocus,setIsFocus] = useState<boolean>(false)
    // ref
    const textareaRef = useRef<HTMLTextAreaElement>(null)


    // hooks
    const dispatch = useAppDispatch()
    // effect
    useEffect(()=>{

        if(textareaRef.current){
            textareaRef.current.style.height = "20px"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    },[note])

    // submit handler
    const addNewNoteSubmitHandler = () => {
        if(note.trim()){
            dispatch(
              addNewNote({ note, _id: uuidv4(), date: `${Date.now()}` })
            );
        }

        setNote("")
    }
    return (
      <main className="px-3 py-1 pt-3 bg-neutral-100 flex items-end gap-x-3">
        {/* text area */}
        <div
          className={`flex-1 border px-3 py-1 rounded-sm ${
            isFocus ? "border-emerald-500" : "border-neutral-300"
          }`}
        >
          <textarea
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            ref={textareaRef}
            value={note}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setNote(e.target.value);
            }}
            className="w-full text-sm focus:outline-none focus:ring-0 resize-none bg-transparent border-none h-[20px]"
            name=""
            id=""
            placeholder="note . . . "
          ></textarea>
        </div>
        {/* button */}
        <button onClick={addNewNoteSubmitHandler}>
          <GrSend
            className={`text-2xl ${
              note ? "text-emerald-600" : "text-neutral-500"
            }`}
          />
        </button>
      </main>
    );
}