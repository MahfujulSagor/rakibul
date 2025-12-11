import React from 'react'
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
     <BeatLoader size={40} />
    </div>
  )
}

export default Loading
