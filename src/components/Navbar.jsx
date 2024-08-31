import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuDiv , setMenuDiv] = useState(false);
  const menu = () => {
    setMenuDiv(!menuDiv);
  }
  const closeMenu = () => {
    menuDiv ? setMenuDiv(!menuDiv) : null;
  }
  return (
    <div>
      {menuDiv ? <div>
        <nav className=" list-none flex-col space-y-6 py-8 px-1 border-2 border-slate-200 rounded-lg font-semibold w-1/3 absolute bg-white top-16 right-1 sm:hidden text-center">
        <li onClick={closeMenu} className=' border-b-2 border-black active:bg-slate-300'><Link to='/'>Home</Link></li>
        <li className=' border-b-2 border-black active:bg-slate-300'><Link to='/help'>Help</Link></li>
        <li className='border-b-2 border-black active:bg-slate-300'><Link to='/contact'>Contact Us</Link></li>
        </nav>
      </div> : null}
    <div className=' bg-black flex justify-between py-8 text-white px-12'>
        <h1 className=' font-bold text-lg'>Hand Cricket Game</h1>
        <nav className=' flex list-none space-x-10'>
        <li onClick={menu} className=' text-xl sm:hidden'>☰</li>
        <li className=' max-sm:hidden hover:border-b-2 hover:border-white'><Link to='/'>Home</Link></li>
        <li className=' max-sm:hidden hover:border-b-2 hover:border-white'><Link to='/help'>Help</Link></li>
        <li className=' max-sm:hidden hover:border-b-2 hover:border-white'><Link to='/contact'>Contact Us</Link></li>
        </nav>
    </div>
    </div>
  )
}

export default Navbar