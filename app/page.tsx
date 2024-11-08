// icons
import { PiBookOpenTextFill } from "react-icons/pi";
import { RiUser6Line } from "react-icons/ri";

// components
import NewNoteForm from "@/components/NewNoteForm";
import NotesList from "@/components/NotesList";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="max-w-[820px] mx-auto h-screen flex flex-col py-1.5">
        {/* header */}
        <header className="flex items-center justify-between px-3 py-2 bg-green-500 text-white">
          {/* left */}
          <div>
            <PiBookOpenTextFill className="text-xl cursor-pointer" />
          </div>
          {/* right */}
          <div className="flex items-center gap-x-1">
            <span className="text-sm">Haddis</span>
            <RiUser6Line />
          </div>
        </header>
        {/* content */}
        <div className="flex-1 px-1.5 overflow-y-auto" id="note-list-container">
          <NotesList />
        </div>
        {/* add new note */}
        <NewNoteForm />
      </div>
    </div>
  );
}
