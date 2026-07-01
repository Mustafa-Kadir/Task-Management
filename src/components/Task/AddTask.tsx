import React, { useState } from "react";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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



const HandleAddtask=()=>{
      if (!title.trim()) return;
    
    const newTask: TaskProps = {
      id: tasks.length + 1,
      title: title,
      description: description,
      completed: false,
      HandleAddtask: () => {},
      HandleEdittask: () => {},
    };
    
    setTasks([...tasks, newTask]);
    setTitle(""); // Clear input
    setDescription("");

}
const HandleEdittask=(task:TaskProps)=>{
}

const HandleDeletetask =(task:TaskProps)=>{  
}

export const AddTask = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(initialtask);
const [edittask,setEdittask]=useState<TaskProps | null>(true)
  return (
    <div className="flex flex-col justify-center  items-center border-1 mt-4 rounded-lg  bg-gradient-to-r from-blue-500 to-purple-500 justify-center h-screen gap-4">
  <h4 className="text-lg font-bold  mt-6 text-white/60">
        Task Management
      </h4>
   
    <div className="flex  items-center mborder-1  bg-gradient-to-r from-blue-500 to-purple-500 justify-center h-[400px] gap-4 w-[600px]">
    

      <input
        type="text"
        placeholder="Title" 
        className="border py-2 w-[450px] justify-center rounded-md bg-white/60 border-white/80    text-black"
      />

      <button  onClick={HandleAddtask} className="bg-green-700 text-white ml-4 py-1 px-1  px-4  rounded-md">Add Task</button>
      </div>

<div className="flex flex-col    bg-gradient-to-r border border-t-white    from-blue-500 to-purple-500 h-screen gap-4 w-[600px]">
      {tasks.map((task) => (
        <div key={task.id} className=" flex gap-2 mt-4 w-[600px] border-b  justify-center      text-white/60  ">
          <div className="font-bold mt-4 w-[400px]">{task.description}</div>
         
          <button onClick={() => HandleEdittask(task)} className="bg-yellow-700 text-white  px-4 ml-12 text-sm mt-4   rounded-md ">Edit </button>
          <button onClick={() => HandleDeletetask(task)}   className="bg-red-700 text-white py-1  text-sm px-4  mt-4 rounded-md  ml-12 ">Delete   </button>
          
        </div>
       
        
      ))}
    </div>
    </div>
     
  );
};

export default AddTask;