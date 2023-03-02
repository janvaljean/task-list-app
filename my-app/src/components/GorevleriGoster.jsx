import React, { useEffect, useState } from "react";
import { GiCancel} from "react-icons/gi";
const GorevleriGoster = ({tasks,setTasks}) => {
  

  
  
  
  function handleRemove(id) {
   
    setTasks(tasks.filter((item) => item.id != id));
    
  }


  



  return <div>
      <div>
      
      <ul className="list">
        {tasks.map((task,index)=>{
          return(
          <li className="gorev d-flex" key={task.id}>
            <span>{task.text}</span>
            <span>{task.day}</span>
            <span onClick={() => handleRemove(task.id)} className="ms-auto"><GiCancel/></span>
            </li>
            )
          
        })}
       
      </ul>
        
    </div>
  </div>;
};

export default GorevleriGoster;
