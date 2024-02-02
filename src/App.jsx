import { useState } from 'react'
import './App.css'
import TaskItem from './Componets/TaskItem'
function App() {

  const [tasklist,settasklist] = useState([])
  const [task , settask] = useState("")

  const handleinputchange = (event)=>{
    settask(event.target.value);
  }
  const deletetask = (tasktodelete)=>{
    settasklist((prevstasklist)=>
      prevstasklist.filter((task)=> task != tasktodelete)
    );
  }

  function addtask(){
    if(task.trim()!==""){
      settasklist((prevstasklist) => [...prevstasklist , task])
    }
  }

  return (
    <>
      <h1 className='Texttodo' >To-Do-List</h1>
      <div className="form-control">
        <input className="input input-alt" placeholder="What will you add or achieve today?" value={task} onChange={handleinputchange} type="text" />
        <span className="input-border input-border-alt"></span>
        <br/>
        <br />
        <button onClick={addtask} class="btn2">
          <span class="text2">Add-To-do</span>
        </button>
      </div>
      <h1 style={{color:"white", textAlign:"center",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Tasks</h1>
      <br/>
      <div>
        <ul className='tasksbox' >
          {tasklist.map((task, index) => (
            <TaskItem key={index} onDelete={deletetask} task={task} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App