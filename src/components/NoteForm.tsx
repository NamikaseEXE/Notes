'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useNotes } from '@/context/NoteContext'

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const { createNote, selectedNote, setSelectedNote } = useNotes();
  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content || '')
    }
  }, [selectedNote])
  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      await createNote({
        title,
        content
      });
      setTitle('');
      setContent('');
      titleRef.current?.focus();
    }}>

      <input type="text" name="title" autoFocus placeholder='title'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
      />

      <textarea name="content" placeholder='content'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className='flex justify-end gap-x-2'>
        <button type="submit" className='px-5 py-2 text-white bg-blue-600 rounded-md
        hover:bg-blue-700'>
          Save
        </button>
        {
          selectedNote && (
            <button type="button" className='px-5 py-2 text-white bg-red-600 rounded-md
         hover:bg-red-500' onClick={() => {
          setSelectedNote(null)
          setTitle('')
          setContent('')
         }}>Cancel
        </button>
          )
        }
      </div>
    </form>
  )
}
