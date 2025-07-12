import React from 'react'

const Form = ({submitHandler, task, setTask, desc, setDesc}) => {
  return (
    <>
      <form 
        onSubmit={(e) => {submitHandler(e)}}
        className='flex items-center justify-center gap-7 mt-7 mb-5'
      >
        <input
          type='text' placeholder='Enter tasks here'
          className='py-3 px-6 rounded-full border-2 w-100 text-xl'
          value={task}
          onChange={(e) => {setTask(e.target.value)}}
        >
        </input>
        <input
          type='text' placeholder='Enter description'
          className='py-3 px-6 rounded-full border-2 w-100 text-xl'
          value={desc}
          onChange={(e) => {setDesc(e.target.value)}}
        >
        </input>
        <button className='bg-black text-white rounded-full py-3 px-6 font-bold cursor-pointer active:scale-80'>Add</button>
      </form>
    </>
  )
}

export default Form
