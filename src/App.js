import './App.css';
import Main from './Components/Main/Main';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Coding_Challenges!</h3>
        <button className="btn btn-secondary">Log In</button>
      </header>
      <Main />
      <footer>
        <h4>Here are some of the most popular coding challenge websites to help you learn algorithms, data structures and other fun coding stuff. Enjoy!</h4>
        <div className="coding-links">
          <a rel="noreferrer" target="_blank" href="https://www.codewars.com">CodeWars</a>  
          <a rel="noreferrer" target="_blank" href="http://www.edabit.com">Edabit</a>
          <a rel="noreferrer" target="_blank" href="https://www.hackerrank.com">HackerRank</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
