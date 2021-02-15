import './App.css';
import Header from './components/header'
import Example from './components/example'
import Newsboard from './containers/newsboard'

function App() {
  return (
    <div className="App">
    <Header />
      <header className="App-header">
        Learn React
      </header>
    <Newsboard />
    <Example />
    </div>
  );
}

export default App;
