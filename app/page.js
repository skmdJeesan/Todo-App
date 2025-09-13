'use client'
import React, { useState } from 'react'
import Form from '@/Components/Form'
import Tasks from '@/Components/Tasks'
import Header from '@/Components/Header'

const page = () => {
  const [task, setTask] = useState('')
  const [desc, setDesc] = useState('')
  const [tasklist, setTasklist] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    if(task.trim() === '') {
      alert('please Enter a task!')
      return
    }

    const finalDesc = desc.trim() === '' ? 'NA' : desc
    setTasklist([...tasklist,{task,desc: finalDesc}])
    setTask('')
    setDesc('')
  }

  const deleteHandler = (i) => {
    let copyTasks = [...tasklist]
    copyTasks.splice(i,1)
    setTasklist(copyTasks)
  }

  return (
    <div className='page h-screen w-full py-1 bg-[#a8ede9e1]'>
      <div className='mt-10 px-10'>
        <Header />
        <Form submitHandler={submitHandler} task={task} setTask={setTask} desc={desc} setDesc={setDesc}/>
        <Tasks tasklist={tasklist} deleteHandler={deleteHandler}/>
      </div>
    </div>
  )
}

export default page