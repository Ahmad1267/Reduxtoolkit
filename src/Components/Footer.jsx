import React from 'react'

function Footer() {
  return (
    <div>
<footer className="bg-gray-900">
  <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

    <span className="text-sm text-gray-400 text-center">
      © 2026{" "}
      <a
        href="https://flowbite.com/"
        className="text-white font-semibold hover:underline"
      >
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>

    <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-medium text-gray-400">
      <li>
        <a href="#" className="hover:text-white transition duration-300">
          About
        </a>
      </li>

      <li>
        <a href="#" className="hover:text-white transition duration-300">
          Privacy Policy
        </a>
      </li>

      <li>
        <a href="#" className="hover:text-white transition duration-300">
          Licensing
        </a>
      </li>

      <li>
        <a href="#" className="hover:text-white transition duration-300">
          Contact
        </a>
      </li>
    </ul>

  </div>
</footer>

    </div>
   
  )
}

export default Footer
