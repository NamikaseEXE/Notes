'use client'
import { createContext, useState } from "react";

const NoteContext = createContext({});
export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
    const [notes, setNotes] = useState([]);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

