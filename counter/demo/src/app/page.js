"use client"
import React, { useState } from 'react'

const page = () => {
  const [num, setnum] = useState(0)


  return (
    <div>
      <h1 className='text-6xl ml-50 mt-20'>num  {num}</h1>
      <button className='text-6xl ml-50 mt-10' onClick={()=>{setnum(num+1)}}>+</button>  
      <button className='text-6xl ml-30 mt-10' onClick={()=>{setnum(num-1)}}>-</button>  
    </div>
  )
}

export default page
