// provider
import StoreProvider from "../StoreProvider";
// components
import NotesList from "@/components/notes/NotesList";
import AddNewNoteForm from "@/components/notes/NewNote";

export default function Counter() {
  return (
    <main className="h-[92vh] flex flex-col">
      {/* note list */}
      <div className="flex-1 overflow-y-auto">
        
            <NotesList />
        
      </div>
      {/* add new note */}
      
        <AddNewNoteForm />
      
    </main>
  );
}
