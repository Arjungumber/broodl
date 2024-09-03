import React from 'react'
import { FaSpinner } from "react-icons/fa";


const Loading = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center'>
 <FaSpinner className='fa-solid fa-spinner animate-spin text-4xl sm:text-5xl'/>
    </div>
  )
}

export default Loading