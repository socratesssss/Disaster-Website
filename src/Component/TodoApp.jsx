import { useState, useEffect } from "react";
import jsPDF from "jspdf";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, i) =>
          i === editingIndex ? { ...task, text: input } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { text: input, completed: false }]);
      }
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditingIndex(index);
  };

  const saveAsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("To-Do List", 10, 10);
    tasks.forEach((task, index) => {
      doc.text(`${index + 1}. ${task.text} ${task.completed ? "(Completed)" : ""}`, 10, 20 + index * 10);
    });
    doc.save("todo-list.pdf");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-[#F26922] font-bold mb-4">To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Add a new task"
        />
        <button onClick={addTask} className="bg-[#F26922] text-white px-4 py-2 rounded-r">
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border-b ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTask(index)} className="cursor-pointer">
              {task.text}
            </span>
            <div className="flex space-x-2">
              <button onClick={() => editTask(index)} className="text-yellow-500">
                ✎
              </button>
              <button onClick={() => deleteTask(index)} className="text-red-500">
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={saveAsPDF} className="mt-4 bg-[#F26922] text-white px-4 py-2 rounded">
        Save as PDF
      </button>
    </div>
  );
}
