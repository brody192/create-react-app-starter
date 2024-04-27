import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Get ready to hack!</p>
        <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noreferrer noopener">Learn React</a>
      </header>
    </div>
  );
}

export default App;
