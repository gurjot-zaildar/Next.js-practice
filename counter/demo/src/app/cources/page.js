"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from "../../../public/dragon.jpg"

const page = () => {
  return (
    <div>
      cources page
      <Link href={"/cources/react"}>go to react</Link>
      <Image src={image} />
    </div>
  )
}

export default page
