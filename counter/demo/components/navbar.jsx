import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className='w-full h-20 bg-red-500'>
      <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/cources"}>cources</Link>
    </div>
  )
}

export default navbar
