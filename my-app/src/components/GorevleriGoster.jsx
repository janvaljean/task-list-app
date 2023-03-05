import React, { useEffect, useState } from "react";
import { GiCancel} from "react-icons/gi";
const GorevleriGoster = ({tasks,addTasks}) => {
  


  
  
  
  function handleRemove(id) {
   
    addTasks(tasks.filter((item) => item.id != id));
    
  }

  function getDone(id){
    if (document.getElementById(id).classList.contains("done")) {
            document.getElementById(id).classList.remove("done");

          }else{
            document.getElementById(id).classList.add("done");
      
      
      
    }
  }


  



  return <div>
      <div>
      
      <div className="list">
        {tasks.map((task,i)=>{
          return(
            <div  key={i} id={task.id} >
              <div onClick={()=>getDone(task.id)}  className= "gorev"  key={task.id}>
                <h6>{task.text}</h6>
                <div className="d-flex space-between">
                <p>{task.day}<span  onClick={() => handleRemove(task.id)} className="d-inline-block"><GiCancel/></span></p>

                </div>
                
              </div>
            </div>
          
            )
          
        })}
       
      </div>
        
    </div>
  </div>;
};

export default GorevleriGoster;
