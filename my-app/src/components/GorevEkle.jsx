import { useState } from "react"


const GorevEkle = ({addTasks ,tasks}) => {
    const initialValue = {text: "", day: ""}
    const[form, setForm] = useState(initialValue)
    
    
    const onChangeInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
      
    }

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.text === "" || form.day === ""){
      return;
    }
   
    addTasks([...tasks, form]);
    setForm(initialValue)
    console.log(tasks);
  }


  return (
   <form onClick={onSubmit} className="form-controll">
    <div>
      <label htmlFor="">Task</label>
      <input name="text" placeholder="AddTask" onChange={onChangeInput}  value={form.text}/>
    </div>
    <div>
      <label htmlFor="">Day & Time</label>
      <input  name="day" placeholder="AddTask" onChange={onChangeInput}  value={form.day}/>
    </div>

        
      <button onClick={onSubmit} className="btn-submit1 btn" >Save Task</button>
      
        


   </form>
  );
};

export default GorevEkle;
