import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'
import { useState, useEffect } from "react"
import Data from "../helper/Data"

const Home = () => {
  const [tasks, setTasks] = useState([...Data])
  const [show, setShow] = useState(true);
  
  console.log(tasks);
  
  
  return (
    <div>
      <div className="header">
        <h3>Task Tracker</h3>
        <button className='btn' onClick={() => setShow(!show)}>Close Add Task Bar</button>
      </div>
      
        {show && <GorevEkle addTasks = {setTasks} tasks = {tasks}  />}
      
      

      {tasks.length > 0 ? <GorevleriGoster  tasks = {tasks}  addTasks = {setTasks} /> : <h3>No Tasks Yet</h3>}

      
     
     
      
      
       
      

    </div>
  );
}

export default Home