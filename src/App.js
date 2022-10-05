import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState ( [
    {
        id:1,
        text: 'Auto Wassen',
        day: '22 Maart om 15:30',
        reminder: true,
    },
    {
        id:2,
        text: 'Stage interview',
        day: '25 Maart om 11:30',
        reminder: true,
    },
    {
        id:3,
        text: 'Huiswerk',
        day: '24 Maart om 22:00',
        reminder: false,
    }
]
)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...task,newTask])
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/>
      ):(
          'No tasks to show'
        )
      }
    </div>
  );
}

export default App;
