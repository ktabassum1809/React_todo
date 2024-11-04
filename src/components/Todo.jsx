import React, { useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { FaTrashCan } from "react-icons/fa6";


function Todo() {
const { task, setTask, tasks, setTasks ,description,setDescription } = useContext(UserContext)

useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
        setTasks(JSON.parse(tasks))
    }
},[setTasks]);

useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])


function handleClick(e){

e.preventDefault()
if (task.trim() !== '' && description.trim() !== '') {
   setTasks([...tasks, {task, description}]);
    setTask('');
    setDescription('');
  }
}

function handleDelete(e){
    const index = e.target.parentElement.index;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
}


  return (
    <div>
    <form>
    <div>
    <input type="text" placeholder="Enter a task" name='task' value={task} onChange={(e)=> setTask(e.target.value)} />
    </div>
    <div>
    <textarea placeholder="Enter a description" name='description' value={description} onChange={(e)=> setDescription(e.target.value)} />
    </div>
    <button onClick={handleClick}>Add Task</button>
    
    </form>

    <ul style={{display:'flex',width: '80%',backgroundColor: 'lightgray' ,gap: '20px', flexWrap: 'wrap'}} >
    {tasks &&  tasks.map((task, index) => {
        return (
          
        <div className='card' style={ {width: '350px', height: '200px' , backgroundColor: 'white', border: '1px solid black', padding : '20px',position: 'relative'}} >
        <li key={index}>
        <h3>{task.task}</h3>
        <p>{task.description}</p>

        </li>
        <FaTrashCan style={{cursor: 'pointer', color: 'red',position: ' absolute' ,bottom: '20px', right: '50px'}} onClick={handleDelete} />

        </div>
        )

    }
    )}
    </ul>

    
    
    </div>
  )
}

export default Todo