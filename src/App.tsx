import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <header className="text-center font-bold">
        <h1 className="text-4xl">To-Do App</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
