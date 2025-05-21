import logo from './logo.svg';
import './App.css';
import BotListManager from './botListManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BotListManager />
      </header>
    </div>
  );
}

export default App;
