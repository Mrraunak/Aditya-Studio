import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';


const Navbar = () => {
  const toogleMenu = () => {
    if (ref.current.classList.contains('h-0')){
      ref.current.classList.remove('h-0')
      ref.current.classList.add('h-512')
    }
    else if (!ref.current.classList.contains('h-0')){
      ref.current.classList.remove('h-512')
      ref.current.classList.add('h-0')
    }
  }
  const ref = useRef()
  return (
    <header>
      
      <div className=" w-full z-10 bg-white top-0 border-b border-grey-light">
        <div className="w-full flex flex-wrap items-center lg:justify-between mt-0 py-4 justify-center">
          <div className=" mx-0 px-0 lg:pl-4 flex items-center lg:mx-4"><img
            src="../logo-blues.png" className="rounded h-12" /><span className="text-teal-700 no-underline hover:no-underline font-bold text-xl text-purple-800"><Link href="/"><a
            >Aadi Sharma</a></Link></span></div>
          <div className="pr-4 absolute top-1 right-1 pt-3"><button onClick={toogleMenu} className="lg:hidden flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none"><svg
            className="fill-current h-3 w-3" viewBox="0 0 20 20"
            xmlns="../external.html?link=http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></button></div>
          <div ref={ref} className="w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto h-0 lg:h-auto overflow-hidden mt-2 lg:mt-0 z-20 transition-all" id="nav-content">
            <ul className="flex items-center flex-col lg:flex-row">
              <Link href="/"><button><li className="mx-2 my-2"><a>Home</a></li></button></Link>
              <Link href="/products"><button><li className="mx-2 my-2"><a>Products</a></li></button></Link>
              <Link href="/blogs"><button><li className="mx-2 my-2"><a>Blogs</a></li></button></Link>
              <Link href="/contact"><button><li className="mx-2 my-2"><a>Contact</a></li></button></Link>
            </ul>
            <div className="text-center my-2 px-4"><Link href={'/login'}><a id="login" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Login</a></Link>
              <Link href={'/register'}><a id="signup" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Signup</a></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar