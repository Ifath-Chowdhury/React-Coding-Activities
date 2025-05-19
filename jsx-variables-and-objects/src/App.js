import logo from './logo.svg';
import './App.css';
import VariableDisplay from './variableDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VariableDisplay />
      </header>
    </div>
  );
}

export default App;
