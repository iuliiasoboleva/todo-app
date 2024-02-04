export interface ITodo {
  id: number | string;
  title: string;
  description: string;
  date: string;
}

export interface ITaskProps {
  task: ITodo;
  onDelete: (taskId: number | string) => void;
  handleEdit: (task: ITodo) => void;
}

export interface ITaskEditFormProps {
  task: ITodo;
  onSave: (editedTask: ITodo) => void;
}
