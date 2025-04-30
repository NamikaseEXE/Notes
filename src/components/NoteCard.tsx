import React from 'react'
import { Note } from '@/generated/prisma/client'
import { useNotes } from '@/context/NoteContext'
import { HiTrash, HiPencil } from 'react-icons/hi'

export default function NoteCard({ note }: { note: Note }) {
    const { deleteNote, setSelectedNote } = useNotes();
    return (
        <div key={note.id} className='bg-slate-400 p-4 m-2 flex justify-between'>
            <div>
                <h2 className='text-2xl font-bold'>{note.title}</h2>
                <p>{note.content}</p>
                <p> Creada el: {new Date(note.createdAt).toLocaleDateString()}</p>
            </div>
            <div className='flex gap-x-2'>
                <button onClick={async () => {
                    if (confirm('Are you sure you want to delete this note?')) {
                        await deleteNote(Number(note.id))
                    }
                }}>
                    <HiTrash className='text-2xl text-red-600'/>
                </button>
                <button
                    onClick={() => setSelectedNote(note)}>
                        <HiPencil className='text-2xl'/>
                </button>
            </div>
        </div>
    )
}
