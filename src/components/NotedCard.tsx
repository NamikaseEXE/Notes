import React from 'react'
import { Note } from '@/interfaces/Note'
import { useNotes } from '@/context/NoteContext'

export default function NotedCard({ note }: { note: Note }) {
    const { deleteNote } = useNotes();
    return (
        <div key={note.id} className='bg-slate-400 p-4 m-2 flex justify-between'>
            <div>
                <h2 className='text-2xl font-bold'>{note.title}</h2>
                <p>{note.content}</p>
            </div>
            <div className='flex gap-x-2'>
                <button onClick={async () => {
                    if (confirm('Are you sure you want to delete this note?')) {
                        await deleteNote(note.id)
                    }
                }}>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
