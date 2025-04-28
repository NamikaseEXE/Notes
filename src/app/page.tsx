'use client'
import NoteForm from '@/components/NoteForm';
import { NoteContext } from '@/context/NoteContext'
import { useContext, useEffect } from 'react';



export default function HomePage() {
  // const notes = await loadNotes();
  const { notes, loadNotes } = useContext(NoteContext)
  console.log(notes);
  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />
        {notes.map((note: any) => (
          <div key={note.id} className='bg-slate-400 p-4 m-2'>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
