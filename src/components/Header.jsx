import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
      <nav className="bg-white w-full h-[50px] flex items-center justify-between px-7">
        <h1 className="text-black text-2xl pt-1 font-serif hover:text-blue-500 cursor-pointer ml-25">
          Coding Vibes
        </h1>
        <ul className="flex gap-15 justify-center text-black text-xl font-serif mr-30">
          <li> <Link to={"/"} className="hover:text-blue-700 cursor-pointer">Home</Link></li>
          <li> <Link to={"/about"} className="hover:text-blue-700 cursor-pointer">About</Link></li>
          <li> <Link to={"/cards"} className="hover:text-blue-700 cursor-pointer">Products</Link></li>
          <li> <Link to={"/contact"} className="hover:text-blue-700 cursor-pointer">Contact</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header
