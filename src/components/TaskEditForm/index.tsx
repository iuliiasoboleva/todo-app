import React, { useState } from 'react';
import { ITaskEditFormProps } from '../../types';

const TaskEditForm: React.FC<ITaskEditFormProps> = ({ task, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDate, setEditedDate] = useState(task.date);

  const handleSave = () => {
    onSave({
      ...task,
      title: editedTitle,
      description: editedDescription,
      date: editedDate,
    });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <label className="block mb-2 text-lg font-semibold">Title:</label>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />

      <label className="block mb-2 text-lg font-semibold">Description:</label>
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
      ></textarea>

      <label className="block mb-2 text-lg font-semibold">Date:</label>
      <input
        type="date"
        value={editedDate}
        onChange={(e) => setEditedDate(e.target.value)}
        required
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Save
      </button>
    </div>
  );
};

export default TaskEditForm;
