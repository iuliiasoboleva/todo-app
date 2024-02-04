import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../Task';
import TaskEditForm from '../TaskEditForm';
import { ITodo } from '../../types';
import TaskForm from '../TaskForm';
import { v4 as uuidv4 } from "uuid";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [editingTask, setEditingTask] = useState<ITodo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Error fetching tasks');
        console.error(error);
      });
  };

  const handleDelete = (taskId: number | string) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then(response => {
        if (response.status === 200) {
          setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
          setError(null);
        }
      })
      .catch(error => {
        setError('Error deleting task');
        console.error(error);
      });
  };

  const handleEdit = (task: ITodo) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (editedTask: ITodo) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${editedTask.id}`, editedTask)
      .then(response => {
        if (response.status === 200) {
          setTasks(prevTasks => prevTasks.map(task => (task.id === editedTask.id ? editedTask : task)));
          setEditingTask(null);
          setError(null);
        }
      })
      .catch(error => {
        setError('Error saving edit');
        console.error(error);
      });
  };

  const handleAddTask = (newTask: { title: string, description: string, date: string }) => {
    setTasks(prevTasks => [{ id: uuidv4(), ...newTask }, ...prevTasks]);
  };

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <TaskForm handleAddTask={handleAddTask} />
      <h1 className='text-center font-bold text-3xl mt-3'>Task List</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          {editingTask === task ? (
            <TaskEditForm task={task} onSave={handleSaveEdit} />
          ) : (
            <Task task={task} onDelete={handleDelete} handleEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
