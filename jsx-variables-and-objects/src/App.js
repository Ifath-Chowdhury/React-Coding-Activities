import logo from './logo.svg';
import './App.css';
import StyledButton from './styledButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton />
      </header>
    </div>
  );
}

export default App;
