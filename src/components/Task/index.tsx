// Task.tsx
import React from 'react';

interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
  onDelete: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Date: {task.date}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
