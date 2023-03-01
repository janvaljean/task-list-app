import React, { useEffect, useState } from "react";
import { GiCancel} from "react-icons/gi";
const GorevleriGoster = ({tasks,addTasks}) => {
  

  const initialList =[...tasks];
  
  const [list, setList] = useState(initialList);
  function handleRemove(id) {
    const newList =list.filter((item) => item.id !== id);
    setList(newList);
    addTasks([...newList])
  }


  



  return <div>
      <div>
      
      <ul className="list">
        {tasks.map((task,index)=>{
          return(
          <li className="gorev d-flex" key={index}>
            <span>{task.text}</span>
            <span>{task.day}</span>
            <span onClick={() => handleRemove(index)} className="ms-auto"><GiCancel/></span>
            </li>
            )
          
        })}
       
      </ul>
        
    </div>
  </div>;
};

export default GorevleriGoster;
