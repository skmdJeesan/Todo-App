import React from 'react'
import Livetime from './Livetime'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#ffffff18] backdrop-blur-[2px] py-4 rounded-full shadow-2xl border-1 border-[#ffffff13]'>
      <h1 className='text-emerald-400 text-2xl font-extrabold uppercase'>My Todo list</h1>
      <Livetime locale="en-IN" hour12={false}/>
    </div>
  )
}

export default Header
