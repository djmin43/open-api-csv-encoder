import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link>
        <span>create new</span>
      </Link>
      <Link>
        <span>edit</span>
      </Link>
    </div>
  )
}

export default Navbar
