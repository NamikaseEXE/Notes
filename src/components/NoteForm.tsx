'use client'
import React, { useState }  from 'react'
import { useRouter } from 'next/navigation'
import { useNotes } from '@/context/NoteContext'

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createNote } = useNotes();
  return (
    <form action="" onSubmit={async (e) => {
        e.preventDefault()
        await createNote({
            title,
            content
        })
    }}>

        <input type="text" name="title" autoFocus placeholder='title'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <textarea name="content" placeholder='content'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className='px-5 py-2 text-white bg-blue-600 rounded-md
        hover:bg-blue-700'>
            Save
        </button>
    </form>
  )
}
