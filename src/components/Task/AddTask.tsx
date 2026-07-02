import React, { useState } from "react";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const initialTasks: TaskProps[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Mastering Mern stack cjcj djnbcjb djbduj",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    completed: false,
  },
];

export const AddTask = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter a title and description for the task.");
      return;
    }

    const newTask: TaskProps = {
      id: tasks.length + 1,
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setEditingId(id);
    }
  };

  const handleUpdateTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter a title and description for the task.");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === editingId
          ? { ...task, title: title.trim(), description: description.trim() }
          : task
      )
    );
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  return (
    <div className="flex flex-col justify-center items-center border-1 mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 h-screen gap-4">
      <h4 className="text-lg font-bold mt-6 text-white/80">Task Management</h4>

      <div className="items-center border-1 border-white bg-white/60 justify-center h-[400px] gap-4 w-[600px]">
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            className="border py-2 w-[450px] justify-center rounded-full mt-2 mb-2 bg-white/60 border-white/80 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="border py-12 w-[450px] justify-center rounded-md mt-2 mb-2 bg-white/60 border-white/80 text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-4">
          {editingId !== null ? (
            <>
              <button
                onClick={handleUpdateTask}
                className="bg-blue-700 text-white rounded-full py-1 px-4 rounded-md"
              >
                Update Task
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-700 text-white rounded-full py-1 px-4 rounded-md"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddTask}
              className="bg-green-700 text-white rounded-full py-1 px-4 rounded-md"
            >
              Add Task
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col bg-gradient-to-r border border-white border-4 rounded-md from-blue-500 to-purple-500 h-screen gap-4 w-[600px] overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex gap-2 mt-4 w-[600px] border-b justify-center text-white/60"
          >
            <div className="flex flex-col w-[400px]">
              <div className="font-bold text-white">{task.title}</div>
              <div className="mt-1">{task.description}</div>
            </div>

            <button
              onClick={() => handleEditTask(task.id)}
              className="bg-yellow-700 text-white px-4 ml-12 text-sm mt-4 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-700 text-white py-1 text-sm px-4 mt-4 rounded-md ml-12"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTask;
