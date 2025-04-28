'use client'
import { createContext, useState } from "react";

export const NoteContext = createContext<{
    notes: any[];
    loadNotes: () => Promise<void>;
}>({
    notes: [],
    loadNotes: async () => {}
});

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
    const [notes, setNotes] = useState([]);
    async function loadNotes() {
        const res = await fetch("/api/notes");
        const data = await res.json();
        setNotes(data);
    }
    return (
        <NoteContext.Provider value={{ notes, loadNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

