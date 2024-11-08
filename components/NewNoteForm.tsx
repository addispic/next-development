"use client"
import React,{useState,useEffect,useRef} from "react";
// icons
import { GrSend } from "react-icons/gr";

const NewNoteForm = () => {
    // states
    // local states
    // is focus
    const [isFocus,setIsFocus] = useState<boolean>(false)
    // text
    const [text,setText] = useState<string>("")

    // reference
    const textareaReference = useRef<HTMLTextAreaElement>(null)

    // effects
    useEffect(()=>{
        if(textareaReference.current){
            textareaReference.current.style.height = "20px"
            textareaReference.current.style.height = `${textareaReference.current.scrollHeight}px`
        }
    },[text])


    // submit handler
    const submitHandler = () => {
        if(text.trim()){
            console.log({text})
        }
        setText("")
        if(textareaReference.current){
            textareaReference.current.style.height  = "20px"
        }
    }


  return (
    <div className="bg-neutral-50 p-1.5 flex items-end gap-x-3">
      <div
        className={`flex-1 border px-1.5 pt-1 p-0.5 rounded-sm ${
          isFocus || text ? "border-green-600" : "border-neutral-300"
        }`}
      >
        <textarea
          className="w-full focus:ring-0 focus:outline-none border-none resize-none h-[20px] bg-transparent p-0 text-sm"
          placeholder="note . . ."
          ref={textareaReference}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        ></textarea>
      </div>
      <button onClick={submitHandler}>
        <GrSend
          className={`text-2xl ${
            text.trim() ? "text-green-500" : "text-neutral-500"
          }`}
        />
      </button>
    </div>
  );
};

export default NewNoteForm;
