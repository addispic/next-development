"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {filesize} from 'filesize';

// icons
import { IoMdAttach } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const NewNote = () => {
  // states
  // note text
  const [noteText, setNoteText] = useState<string>("");
  // files
  const [noteFiles, setNoteFiles] = useState<File[]>([]);
  //   file description
  const [noteFileDescription, setNoteFileDescription] = useState<string>("");

  // hooks
  const router = useRouter()

  // reference
  // note text area reference
  const noteTextAreaReference = useRef<HTMLTextAreaElement | null>(null);
  //   note file description reference
  const noteFileDescriptionReference = useRef<HTMLTextAreaElement | null>(null);

  // effect
  // note text area height
  useEffect(() => {
    if (noteTextAreaReference.current) {
      noteTextAreaReference.current.style.height = "18px";
      noteTextAreaReference.current.style.height = `${noteTextAreaReference.current.scrollHeight}px`;
    }
  }, [noteText]);

  //   note file description
  useEffect(() => {
    if (noteFileDescriptionReference.current) {
      noteFileDescriptionReference.current.style.height = "18px";
      noteFileDescriptionReference.current.style.height = `${noteFileDescriptionReference.current.scrollHeight}px`;
    }
  }, [noteFileDescription]);

  // handler
  // note text change handler
  const noteTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value);
  };
  // note files change handler
  const noteFilesChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files;
      let noteF: File[] = [];
      for (let i = 0; i < files.length; i++) {
        noteF.push(files[i]);
      }
      setNoteFiles(noteF);
    }
    e.target.value = "";
  };

  //   note description change handler
  const noteDescriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteFileDescription(e.target.value);
  };

  // remove file handler
  const removeFileHandler = (index: number) => {
    // console.log(index)
    let filteredNoteFiles = noteFiles.filter((fileItem, i) => i !== index);
    setNoteFiles(filteredNoteFiles);
  };

  // add new note text only handler
  const addNewNoteTextOnlyHandler = async () => {
    if(noteText.trim()){
      let formData = new FormData()
      formData.append("text",noteText)
      const response = await fetch("http://localhost:5000/api/notes/new",{
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      console.log(data)
      if(data.newNote){
        router.push("/")
      
      if(noteTextAreaReference.current){
        noteTextAreaReference.current.style.height = "18px"
      }
      setNoteText("")
    }
    }

  }

  // add new note with file handler
  const addNewNoteWithFileHandler = async () => {
    if(noteFiles.length > 0 && noteFileDescription.trim()){
      let formData = new FormData()
      formData.append("text",noteFileDescription)
      Array.from(noteFiles).forEach((file, index) => {
        formData.append(`images`, file);
      });
      const response = await fetch("http://localhost:5000/api/notes/new",{
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      if(data.newNote){
        router.push("/")
        setNoteFiles([])
        setNoteFileDescription("")
      }
    }
  }
  return (
    <div className="px-[5%] py-1.5 flex items-end gap-x-5">
      {/* file picker */}
      <div>
        <input
          type="file"
          multiple
          onChange={noteFilesChangeHandler}
          accept="image/*"
          id="file-input"
          hidden
        />
        <label htmlFor="file-input">
          <IoMdAttach className="text-2xl text-green-600 cursor-pointer" />
        </label>
      </div>
      {/* text */}
      <div className="flex-1 border border-green-600 rounded-sm text-sm p-1">
        <textarea
          onChange={noteTextHandler}
          value={noteText}
          ref={noteTextAreaReference}
          className="focus:ring-0 focus:outline-none border-none w-full resize-none h-[18px] max-h-[350px]"
          id="note-text-textarea"
          name="text"
          placeholder="note . . ."
        ></textarea>
      </div>
      {/* send button */}
      <button onClick={addNewNoteTextOnlyHandler}>
        <GrSend className="text-green-600 text-xl" />
      </button>

      {/* file description */}
      {noteFiles && noteFiles.length > 0 && (
        <div className="fixed left-0 top-0 w-screen h-screen z-50">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[75%] md:w-[60%] lg:w-[50%]  xl:w-[40%] bg-white shadow-2xl rounded-md overflow-hidden p-5">
            {/* file list */}
            <div>
              {noteFiles.map((noteFileItem, index) => {
                console.log(noteFileItem.name);
                let imageUrl = URL.createObjectURL(noteFileItem);
                return (
                  <div
                    key={`${noteFileItem.name}-${index}`}
                    className="flex items-center justify-between mb-1.5"
                  >
                    {/* left */}
                    <div className="flex items-center gap-x-1.5">
                      {/* image */}
                      <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                        <img
                          className="w-full h-full object-center object-cover"
                          src={imageUrl}
                          alt="note image file"
                        />
                      </div>
                      {/* text */}
                      <div>
                        <p className="text-sm text-green-600">
                          {noteFileItem.name}
                        </p>
                        <p className="text-neutral-500 text-[.75rem] -mt-1 lowercase">{filesize(noteFileItem.size)}</p>
                      </div>
                    </div>
                    {/* remove file button */}
                    <button
                      onClick={() => {
                        removeFileHandler(index);
                      }}
                    >
                      <IoMdClose className="text-xl text-red-300 transition-colors ease-in-out duration-150 hover:text-red-500" />
                    </button>
                  </div>
                );
              })}
            </div>
            {/* file description & send button */}
            <div className="flex gap-x-3 items-end mt-2">
              {/* textarea */}
              <div className="w-full border-b border-green-600 text-sm px-2">
                <textarea
                  ref={noteFileDescriptionReference}
                  onChange={noteDescriptionChangeHandler}
                  value={noteFileDescription}
                  className="focus:ring-0 focus:outline-none border-none bg-transparent resize-none w-full p-0 h-[18px] max-h-[150px]"
                  name="text"
                  id="file-description-textarea"
                  placeholder="description"
                ></textarea>
              </div>
              {/* button */}
              <button onClick={addNewNoteWithFileHandler}>
                <GrSend className="text-green-600 text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNote;
