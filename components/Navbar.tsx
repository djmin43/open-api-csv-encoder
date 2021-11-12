import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link href="/create" passHref>
        <span>create new</span>
      </Link>
      <Link href="/edit" passHref>
        <span>edit</span>
      </Link>
    </div>
  )
}

export default Navbar
