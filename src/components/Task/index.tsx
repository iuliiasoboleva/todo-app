import React from 'react';
import { ITaskProps } from '../../types';

const Task: React.FC<ITaskProps> = ({ task, onDelete, handleEdit }) => {
  return (
    <div className="border p-4 my-4 bg-black shadow-md rounded-md">
      <h3 className="text-gray-400 text-xl font-bold mb-2">{task.title}</h3>
      <p className="text-gray-400  mb-2">Description: {task.description}</p>
      <p className="text-sm text-gray-400 mb-2">Date: {task.date}</p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 mr-1"
        onClick={() => handleEdit(task)}>Edit</button>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
