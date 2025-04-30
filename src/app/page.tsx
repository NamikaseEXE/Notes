'use client'
import NoteForm from '@/components/NoteForm';
import { useNotes } from '@/context/NoteContext'
import { useEffect } from 'react';
import NotedCard from '@/components/NotedCard'



export default function HomePage() {
  const { notes, loadNotes } = useNotes();

  console.log(notes);
  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />
        {notes.map((note) => (
          <NotedCard note={note} key= {note.id}/>
        ))}
      </div>
    </div>
  )
}
