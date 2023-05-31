
import './App.css';
import React,{useState , useEffect} from 'react';

function App() {
  const[newTask,setNewTask]=useState("");
  const[tasksList,setTasksList]=useState([]);


const addTask=()=>{
  //console.log(newTask);
  if(!newTask)
  {
    alert("lazy ass")
    return;
  }
  
  const task={
    id:Math.random(Math.floor())*1000,
    value:newTask,
    isChecked:false};

  setTasksList(tasksList=>[...tasksList,task]);
  setNewTask("");

};
const clearTasks=()=>{
  if(tasksList.length===0)
  alert("no tasks to clear");
  setTasksList([]);
  setNewTask("");

};
const deleteTask=(id)=>
{
  const updatedTasks=tasksList.filter((task)=>task.id!=id);
  setTasksList(updatedTasks);

};
const checkTask=(id)=>
{
 // console.log(tasksList);
  const newList=tasksList.map((task)=>{if(task.id===id)
                                        return({...task,isChecked:!task.isChecked});
                                      else return task;});
   setTasksList(newList);
 

}

/*useEffect(() => {console.log(taskesList)}, [tasksList]);*/




  return (
    <div className="App">

      <h1 className="Title"> To Do's</h1>
      <input className="inputTask"
            type='text'
            placeholder='add a task'
            value={newTask}
            onChange={e=>setNewTask(e.target.value)}></input>
      <button className='addButton' onClick={addTask}>add</button>
      <button className='clearTasks' onClick={clearTasks}>clear all</button>
     <ul className="tasksList" > 
        <li >get a job<button className='deleteTask' onClick={()=>alert("can't delete 'get a job' task. you'll have to get one:)")}>delete</button>  <input className='checkBox' type="checkbox" onClick={()=>{alert("congrats capara!"); }}></input></li>

        {tasksList.map(task=>{return(<li style={task.isChecked?{textDecoration:"line-Through"}:{}} key={task.id} value={task.value} >
      
        {task.value} 
        <button className='deleteTask' onClick={()=>deleteTask(task.id)}>delete</button>
        <input className='checkBox' type="checkbox" onClick={()=>checkTask(task.id)}></input>
        </li>            )})} 
        
       
        
        </ul>
     </div>
  )
}

export default App;
