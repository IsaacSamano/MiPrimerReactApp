import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {useState, useEffect} from 'react'


// Me quede en 4:04:10

function App(){

  return (<main className='bg-zinc-900 h-screen'>
    <div className='container mx-auto p-10'>
      <TaskForm/>
      <TaskList/>
    </div>
  </main>)
}

export default App
