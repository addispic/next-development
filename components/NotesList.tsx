"use client"
import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

// components
import SingleNote from "./SingleNote";

const NotesList = () => {
    // notes
    const [notes, setNotes] = useState<{ text: string; _id: string }[]>([
      {
        text: "Addis",
        _id: uuidv4(),
      },
      {
        text: "Addis",
        _id: uuidv4(),
      },
      {
        text: "Addis",
        _id: uuidv4(),
      },
    ]);
  return <div>
    {
        notes.map((item: {_id: string; text: string})=>{
            return (
                <div key={item._id}>
                    <SingleNote noteItem={item} setNotes={setNotes}/>
                </div>
            )
        })
    }
  </div>;
};

export default NotesList;
