import React, { useEffect, useState } from "react";


const GorevleriGoster = ({tasks}) => {




  return <div>
      <div>
      
      <ul className="list">
        {tasks.map((task,i)=>{
          return(
          <li className="gorev" key={i}>
            <span>{task.text}</span>
            <span>{task.day}</span></li>
            )
          
        })}
       
      </ul>
       
    </div>
  </div>;
};

export default GorevleriGoster;
