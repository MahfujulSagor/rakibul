import React from 'react'
import { Link } from 'react-router'

const Notfound = () => {
  return (
    <div className='w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>
      <h1 className='text-9xl md:text-[160px] lg:text-[240px] font-bold text-center'>404</h1>
      <p className='text-center font-medium text-3xl'>Hmm...</p>
      <p className='text-center'>We're fairly sure this page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
      <Link to="/" className='underline font-medium'>Let's head back</Link>
    </div>
  )
}

export default Notfound
