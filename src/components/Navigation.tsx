import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-green-500 text-white' >
        <h3 className='font-boll' >Github Search</h3>
        <span>
            <Link to="/" className="mr-2">Home</Link>
            <Link to="/" className="mr-2">Favorites</Link>
        </span>
    </nav>
  )
}

export default Navigation