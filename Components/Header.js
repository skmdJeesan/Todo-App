import React from 'react'
import Livetime from './Livetime'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black py-4'>
      <h1 className='text-amber-500 text-2xl font-extrabold uppercase'>My Todo list</h1>
      <Livetime locale="en-IN" hour12={false}/>
    </div>
  )
}

export default Header
