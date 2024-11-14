"use client"

// icons
import { RiDeleteBin5Line } from "react-icons/ri";
// hooks
import {useAppSelector,useAppDispatch} from '../../lib/hooks'

// slices
import {deleteNote} from '../../lib/features/notes/notesSlice'

export default function NotesList(){
    const value = useAppSelector((state)=> state.notes)

    // hooks
    const dispatch = useAppDispatch()
    
    
    return <main>
        {
            value.notes.map((item)=>{
                return (
                    <div key={item._id} className="p-5 bg-neutral-100 my-5 rounded-md">
                        <div className="text-sm">
                            <p>
                                {item.note}
                            </p>
                        </div>
                        <footer className="mt-2 flex items-center gap-x-5">
                            {/* date */}
                            <div className="text-xs italic"><span>3 weeks ago</span></div>
                            <button className="text-neutral-400 hover:text-red-600" onClick={()=>{
                                dispatch(deleteNote(item._id))
                            }}>
                                <RiDeleteBin5Line />
                            </button>
                        </footer>
                    </div>
                )
            })
        }
    </main>
}