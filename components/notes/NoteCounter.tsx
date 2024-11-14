"use client"
import {useAppSelector} from '../../lib/hooks'

export default function NoteCounter(){
    const value = useAppSelector((state) => state.notes) 
    return <main>
        <p className="text-sm">
            <span className="font-bold">{value.notes.length}</span> notes
        </p>
    </main>
}