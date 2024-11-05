import {formatDistanceToNow} from 'date-fns'
// icons
import { CiClock2 } from "react-icons/ci";
// components
// new note
import NewNote from "@/components/NewNote";
// delete note btn
import DeleteNoteBtn from "@/components/DeleteNoteBtn";

export default async function Home() {
  const response = await fetch("http://localhost:5000/api/notes")
  const {notes} = await response.json()
  console.log(notes)

  return (
    <div className="flex flex-col h-[91.5vh]">
      {/* note list */}
      <div className="flex-1 max-h-[85.5vh] pr-3 overflow-y-auto" id="note-list-container">
        {
          notes.map((noteItem: {_id: string;text: string; images: string []; createdAt: string})=>{
            return (
              <div key={noteItem._id} className='my-3'>
                {/* note content */}
                <div>note content</div>
                {/* footer */}
                <footer className="flex items-center gap-x-3 mt-1.5">
                  <div className="flex items-center gap-x-1">
                    <CiClock2 className="text-neutral-600"/>
                  <span className="text-xs text-green-600 italic">{formatDistanceToNow(`${new Date(noteItem.createdAt)}`,{addSuffix: true})}</span>
                  </div>
                  <DeleteNoteBtn _id={noteItem._id}/>
                </footer>
              </div>
            )
          })
        }
      </div>
      {/* add new note */}
      <NewNote />
    </div>
  );
}
