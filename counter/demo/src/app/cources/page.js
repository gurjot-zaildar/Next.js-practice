import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      cources page
      <Link href={"/cources/react"}>go to react</Link>
    </div>
  )
}

export default page
