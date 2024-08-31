
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Teamselect from './components/Teamselect'

function App() {

  return (
    <>
      <Navbar/>
      <div className=' text-white font-semibold w-full flex flex-col items-center justify-center align-middle space-y-20 max-sm:space-y-10 mt-20  '>
      <Link to='/playfullgame'><button className=' border-2 rounded-md w-72 py-4 max-sm:w-60 max-sm:py-2 capitalize border-black bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold'>Play full game</button></Link>
      <Link to='/chasetarget'><button className=' border-2 rounded-md w-72 py-4 max-sm:w-60 max-sm:py-2 capitalize border-black bg-red-500 hover:bg-red-600 active:bg-red-700'>Chase a target</button></Link>
      <Link to='/defendtarget'><button className=' border-2 rounded-md w-72 py-4 max-sm:w-60 max-sm:py-2 capitalize border-black bg-red-500 hover:bg-red-600 active:bg-red-700'>defend a target</button></Link>
      <Link to='/playtoss'><button className=' border-2 rounded-md w-72 py-4 max-sm:w-60 max-sm:py-2 capitalize border-black bg-red-500 hover:bg-red-600 active:bg-red-700'>Play only toss</button></Link>
      </div>
    </>
  )
}

export default App
