// TaskList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../Task';
import TaskEditForm from '../TaskEditForm';

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (taskId: number) => {
    console.log('Delete task with id:', taskId);
  };
  const handleEdit = (task: React.SetStateAction<null>) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (taskId: any, title: any, description: any, date: any) => {
    console.log('Save edit for task with id:', taskId);
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          {editingTask === task ? (
            <TaskEditForm task={task} onSave={handleSaveEdit} />
          ) : (
            <Task task={task} onDelete={handleDelete} />
          )}
          <button onClick={() => handleEdit(task)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
