import { useState } from "react"


const GorevEkle = ({addTasks ,tasks}) => {
    const initialValue = {text: "", day: ""}
    const[form, setForm] = useState(initialValue)
    
    
    const onChangeInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value,
      id:new Date().getTime()})
      
      
    }
    
    const onSubmit = (e) => {
      e.preventDefault();
      if(form.text === "" || form.day === ""){
        return;
      }
      
      addTasks([...tasks, form])
      setForm(initialValue)
      
      
  }


  return (
   <form onClick={onSubmit} className="form-controll">
    <div>
      <label htmlFor="">Task</label>
      <input name="text" placeholder="AddTask" onChange={onChangeInput}  value={form.text}/>
    </div>
    <div>
      <label htmlFor="">Day & Time</label>
      <input type="datetime-local" placeholder="AddTask" name="day" onChange={onChangeInput} value={form.day}  />
    </div>

        
      <button type="submit" className="btn-submit1 btn" >Save Task</button>
      
        


   </form>
  );
};

export default GorevEkle;
