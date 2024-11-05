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

  return (
    <div className="flex flex-col h-[91.5vh]">
      {/* note list */}
      <div className="flex-1 max-h-[85.5vh] px-3 overflow-y-auto" id="note-list-container">
        {
          notes.map((noteItem: {_id: string;text: string; images: string []; createdAt: string})=>{
            return (
              <div key={noteItem._id} className='my-3 border-b border-green-200 mb-5'>
                {/* note content */}
                <div className='mb-1'>
                  {/* image */}
                  {
                    noteItem.images.length > 0 && <div className='mb-3'>
                      <div className={`grid ${noteItem.images.length  > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {
                          noteItem.images.map(imageItem => {
                            return (
                              <div key={imageItem} className={`w-full h-full ${noteItem.images.length % 2 !== 0 && "last:col-span-2"}`}>
                                <img className='w-full h-full object-center object-cover' src={`http://localhost:5000/${imageItem}`} alt="note image" />
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  }
                  {/* text */}
                  <div className='text-sm '>
                    <p>{noteItem.text}</p>
                  </div>
                </div>
                {/* footer */}
                <footer className="flex items-center gap-x-3 mt-2.5 mb-5">
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
