import './App.css';
import Main from './Components/Main/Main';

function App() {

  const isMagicSquare = (num1, num2, num3, num4, num5, num6, num7, num8, num9) => {
    if (num1+num2+num3 === num1+num5+num9 && num1+num2+num3 === num4+num5+num6 && num1+num2+num3 === num7+num8+num9 && num1+num2+num3 === num3+num5+num7 && num1+num2+num3 === num1+num4+num7 && num1+num2+num3 === num2+num5+num8 && num1+num2+num3 === num3+num6+num9) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  isMagicSquare(2, 7, 6, 9, 5, 1, 4, 3, 8);


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
