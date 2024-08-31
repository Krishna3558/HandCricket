import React from 'react'
import { Link } from 'react-router-dom'

function Quitgame() {
  return (
    <Link to='/'><button className=' capitalize border-2 border-black rounded-md py-4 px-8 bg-black text-red-600 active:bg-gray-900 max-sm:px-4 max-sm:py-2'>quit game</button></Link>
  )
}

export default Quitgame