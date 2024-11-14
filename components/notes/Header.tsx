// icons
import { PiBookOpenTextFill } from "react-icons/pi";


// sub components
import NoteCounter from "./NoteCounter";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-emerald-500 text-white px-3 py-1.5">
      {/* left */}
      <div>
        <PiBookOpenTextFill className="text-2xl text-neutral-100 cursor-pointer" />
      </div>
        <NoteCounter />
    </header>
  );
}
