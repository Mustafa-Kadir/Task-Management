import React, { useState } from "react";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  task:string
  HandleAddtask: () => void;
  HandleEdittask: () => void;
  onClick?:()=>void;
}

const initialtask: TaskProps[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Mastering Mern stack cjcj djnbcjb djbduj ",
    completed: false,
    HandleAddtask: () => {},
    HandleEdittask: () => {},
  },
   {
    id: 2,
    title: "Task 2",
    description: "This is task 1",
    completed: false,
    HandleAddtask: () => {},
    HandleEdittask: () => {},
  },
];





 
export const AddTask = () => {
  
const HandleAddtask=()=>{
      if (!title.trim() || !description.trim() ) {
        alert("Please enter a title and description for the task.");
        return;
      }

    const newTask: TaskProps = {
      id: tasks.length + 1,
      title: title,
      description: description,
      completed: false,
      HandleAddtask: () => {},
      
      HandleEdittask: () => {},
    };
    console.log("New Task:", newTask); // Log the new task object
    
    setTasks([...tasks, newTask]);
    setTitle(""); // Clear input
    setDescription("");

}
const HandleDeletetask =()=>{  
  const deleteTask = (taskId: number) =>  {
    tasks.filter((task) => task.id !== taskId);
  }
  return  deleteTask;

}

const HandleEdittask=(task:TaskProps)=>{
}
const [title,setTitle]=useState<string>("");
const [description,setDescription]=useState<string>("");
const [tasks, setTasks] = useState<TaskProps[]>(initialtask);
  return (
    <div className="flex flex-col justify-center  items-center border-1 mt-4 rounded-lg  bg-gradient-to-r from-blue-500 to-purple-500 justify-center h-screen gap-4">
  <h4 className="text-lg font-bold  mt-6 text-white/80">
        Task Management
      </h4>
   <form>
    <div className=" items-center border-1 border-white  bg-white/60 justify-center h-[400px] gap-4 w-[600px]">
    
<div className="flex flex-col  justify-center items-center gap-4  mt-4">


      <input
        type="text"
        placeholder="Title" 
        className="border py-2 w-[450px] justify-center rounded-full mt-2 mb-2  bg-white/60 border-white/80 text-black" value={title}
     onChange={(e) => setTitle(e.target.value)} />
     <input
        type="text"
        placeholder="description  " 
        className="border py-12 w-[450px] justify-center rounded-md mt-2 mb-2   bg-white/60 border-white/80 text-black" value={description}
     onChange={(e) => setDescription(e.target.value)} />
</div>
      <button  onClick={HandleAddtask} className="bg-green-700 text-white  ml-12 mr-4  rounded-full py-1   px-4  rounded-md">Add Task</button>
      </div>
</form>
<div className="flex flex-col    bg-gradient-to-r border border-white border-4   rounded-md  from-blue-500 to-purple-500 h-screen gap-4 w-[600px]">
      {tasks.map((task) => (
        <div key={task.id} className=" flex gap-2 mt-4 w-[600px] border-b  justify-center      text-white/60  ">
          <div className="font-bold mt-4 w-[400px]">{task.description}</div>
         
          <button onClick={HandleEdittask} className="bg-yellow-700 text-white  px-4 ml-12 text-sm mt-4   rounded-md ">Edit </button>
          <button onClick={HandleDeletetask}   className="bg-red-700 text-white py-1  text-sm px-4  mt-4 rounded-md  ml-12 ">Delete   </button>
          
        </div>
       
        
      ))}
    </div>
    </div>
     
  );
};

export default AddTask;
