import React from 'react'

export default function NoteForm() {
  return (
    <form action="">

        <input type="text" name="title" autoFocus placeholder='title'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'/>

        <textarea name="content" placeholder='content'
        className='w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none
        focus:ring-2 focus:ring-blue-600 my-2'/>

        <button type="submit" className='px-5 py-2 text-white bg-blue-600 rounded-md
        hover:bg-blue-700'>
            Save
        </button>
    </form>
  )
}
