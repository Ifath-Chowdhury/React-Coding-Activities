import logo from './logo.svg';
import './App.css';
import DynamicForm from './dynamicForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DynamicForm />
      </header>
    </div>
  );
}

export default App;
