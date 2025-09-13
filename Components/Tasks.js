import React from 'react'

const Tasks = ({tasklist, deleteHandler}) => {
  let renderTask = <h2 className='text-center text-2xl text-emerald-400 font-bold mt-30 py-2 px-4 justify-center bg-[#ffffff18] backdrop-blur-[10px] rounded-full shadow-2xl border-1 border-[#ffffff13] w-100 text-medium absolute top-50 left-120'>No task Available!</h2>
  if(tasklist.length > 0){
    renderTask = tasklist.map((t,i) => {
      return (
        <li key={i}>
          <div className='flex items-center justify-center gap-8 mt-2'>
            <h1 className='py-2 px-4 justify-center bg-[#ffffff18] backdrop-blur-[10px] rounded-full shadow-2xl border-1 border-[#ffffff13] w-100 text-medium'>{t.task}</h1>
            <h2 className='py-2 px-4 justify-center bg-[#ffffff18] backdrop-blur-[10px] rounded-full shadow-2xl border-1 border-[#ffffff13] w-95 text-medium'>{t.desc}</h2>
            <button
              onClick={() => {deleteHandler(i)}}
              className='bg-red-600 text-white rounded-full py-2 px-4 font-bold cursor-pointer active:scale-80'>
              Remove
            </button>
          </div>
        </li>
      )
    })
  }
  return (
    <>
      <ul className='mt-5'>{renderTask}</ul>
    </>
  )
}

export default Tasks
