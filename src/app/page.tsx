'use client'
import NoteForm from '@/components/NoteForm';
import { useNotes } from '@/context/NoteContext'
import { useEffect } from 'react';
import NoteCard from '@/components/NoteCard'



export default function HomePage() {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />
        {notes.map((note) => (
          <NoteCard note={note} key= {note.id}/>
        ))}
      </div>
    </div>
  )
}
