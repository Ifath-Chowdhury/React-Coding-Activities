import logo from './logo.svg';
import './App.css';
import JobCounter from './jobCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JobCounter />
      </header>
    </div>
  );
}

export default App;
