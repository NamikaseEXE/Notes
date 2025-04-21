import NoteForm from '@/components/NoteForm';
import { useContext } from 'react';

// async function loadNotes() {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const data = await res.json();
//   return data;
// }

export default async function HomePage() {
  // const notes = await loadNotes();
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
