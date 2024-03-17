import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Game from "./tic-tac-toe/Game";

export default function Routing(params) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={App}></Route>
        <Route exact path="/tic-tac-toe-game" Component={Game}></Route>
      </Routes>
    </BrowserRouter>
  );
}
