import React from 'react'
import Website from './website/page'
import { BookProvider } from './contexts/BookContext'

function Page() {
  return (
    <>
    <BookProvider>
      <Website/>
    </BookProvider>
    </>
  )
}

export default Page
