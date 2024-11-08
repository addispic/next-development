import React from "react";

// icons
import { RiDeleteBin5Line } from "react-icons/ri";

// interface
interface SingleNoteProps {
    setNotes: React.Dispatch<React.SetStateAction<{_id: string,text: string}[]>>;
    noteItem: {_id: string; text: string;}
}
const SingleNote: React.FC<SingleNoteProps> = ({ noteItem, setNotes }) => {
  console.log(noteItem);

//   delete note
const deleteNoteHandler = (_id: string) => {
    setNotes(prev => prev.filter(noteItem => noteItem._id !== _id))
}
  return (
    <div className="mb-4">
      <div className="p-5 bg-neutral-100 rounded-md overflow-hidden text-sm text-neutral-700">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          nostrum esse quaerat? Reprehenderit nam commodi earum debitis, cum
          porro eaque ab quidem non ipsum!
        </p>
      </div>
      <button onClick={()=>{
        deleteNoteHandler(noteItem._id)
      }} className="ml-3 text-red-500">
        <RiDeleteBin5Line />
      </button>
    </div>
  );
};

export default SingleNote;
