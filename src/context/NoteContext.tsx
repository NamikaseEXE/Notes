'use client'
import { createContext, useContext, useState } from "react";
import { CreateNote } from '@/interfaces/Note'
import { Note } from '@/generated/prisma/client'

export const NoteContext = createContext<{
    notes: Note[];
    loadNotes: () => Promise<void>;
    createNote: (note: CreateNote) => Promise<void>;
    deleteNote: (id: number) => Promise<void>;
    selectedNote: Note | null;
    setSelectedNote: (note: Note|null) => void;
}>({
    notes: [],
    loadNotes: async () => { },
    createNote: async (note: CreateNote) => { },
    deleteNote: async (id: number) => { },
    selectedNote: null,
    setSelectedNote: (note: Note|null) => {}
});

export const useNotes = () => {
    const context = useContext(NoteContext)
    if (!context) {
        throw new Error('useNotes must be used within a NotesProvider')
    }
    return context
}

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    async function loadNotes() {
        const res = await fetch("/api/notes");
        const data = await res.json();
        setNotes(data);
    }
    async function createNote(note: CreateNote) {
        const res = await fetch("api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        })
        const newNote = await res.json();
        setNotes([...notes, newNote])
    }
    async function deleteNote(id: number) {
        const res = await fetch('http://localhost:3000/api/notes/' + id, {
            method: 'DELETE',
        })
        const data = await res.json();
        setNotes(notes.filter((note) => note.id != id))
    }
    return (
        <NoteContext.Provider value={{ 
            notes, loadNotes, createNote, deleteNote, selectedNote, setSelectedNote 
            }}>
            {children}
        </NoteContext.Provider>
    )
}

