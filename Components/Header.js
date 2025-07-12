import React from 'react'
import Livetime from './Livetime'

const Header = () => {
  return (
    <div className='flex items-center justify-center bg-black gap-120 py-5'>
      <h1 className='text-amber-500 text-2xl font-extrabold uppercase ml-140'>My Todo list</h1>
      <Livetime locale="en-IN" hour12={false}/>
    </div>
  )
}

export default Header
