import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li key="1">
            <Link to="/tic-tac-toe-game">Play Tic Tac Toe game</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
