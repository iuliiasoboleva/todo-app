import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const handleTaskSubmit = (title: string, description: string, date: string) => {
    console.log('Task submitted:', title, description, date);
  };
  return (
    <div className="App">
    <header className="App-header">
      <h1>To-Do App</h1>
    </header>
    <main>
    <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList />
    </main>
  </div>
  );
}

export default App;
