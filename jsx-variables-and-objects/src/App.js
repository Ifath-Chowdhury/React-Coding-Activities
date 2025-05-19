import logo from './logo.svg';
import './App.css';
import JobBoard from './jobBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JobBoard />
      </header>
    </div>
  );
}

export default App;
