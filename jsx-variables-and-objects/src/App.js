import logo from './logo.svg';
import './App.css';
import AdvancedJobCounter from './advancedJobCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AdvancedJobCounter />
      </header>
    </div>
  );
}

export default App;
