import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'
import { useState, useEffect } from "react"
import Data from "../helper/Data"

const Home = () => {
  const [tasks, setTasks] = useState([...Data])
  

  console.log(tasks)
  
  
  

 







  return (
    <div>
    <div className="header">
      <h3>Task Tracker</h3>
      <button className='btn'>Close Add Task Bar</button>
    </div>
      
      <GorevEkle addTasks = {setTasks} tasks = {tasks}  />

      <GorevleriGoster tasks = {tasks} />
    </div>
  );
}

export default Home