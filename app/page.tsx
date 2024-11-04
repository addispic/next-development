
// components
// new note
import NewNote from "@/components/NewNote";

export default function Home() {
  return (
    <div className="flex flex-col h-[91.5vh]">
      {/* note list */}
      <div className="flex-1 bg-yellow-200">note list</div>
      {/* add new note */}
      <NewNote />
    </div>
  );
}
