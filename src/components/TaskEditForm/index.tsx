import React, { useState } from 'react';

interface TaskEditFormProps {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
  onSave: (taskId: number, title: string, description: string, date: string) => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);

  const handleSave = () => {
    onSave(task.id, title, description, date);
  };

  return (
    <div>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskEditForm;
