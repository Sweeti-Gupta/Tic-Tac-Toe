import React, { useEffect, useState } from "react";
import "../styles/TicTacToe.css";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {
  const [gameState, setGameState] = useState(initialState);
  const [isXMove, setIsXMove] = useState(false);

  const onGameClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXMove ? "X" : "O";

    setGameState(strings);
    setIsXMove(!isXMove);
  };

  const resetGame = () => {
    setGameState(initialState);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(` Yo! ${winner} has won the game!`);

      resetGame();
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div>
      <p className="heading">Let's Play Tic Tac Toe !</p>
      <div className="row center">
        <Square
          className="b-bot-right b-left b-top"
          state={gameState[0]}
          onClick={() => onGameClicked(0)}
        />
        <Square
          className="b-bot-right b-top"
          state={gameState[1]}
          onClick={() => onGameClicked(1)}
        />
        <Square
          className="b-bot b-right b-top"
          state={gameState[2]}
          onClick={() => onGameClicked(2)}
        />
      </div>
      <div className="row center">
        <Square
          className="b-bot-right b-left"
          state={gameState[3]}
          onClick={() => onGameClicked(3)}
        />
        <Square
          className="b-bot-right"
          state={gameState[4]}
          onClick={() => onGameClicked(4)}
        />
        <Square
          className="b-bot b-right"
          state={gameState[5]}
          onClick={() => onGameClicked(5)}
        />
      </div>
      <div className="row center">
        <Square
          className="b-right b-left b-bot"
          state={gameState[6]}
          onClick={() => onGameClicked(6)}
        />
        <Square
          className="b-right b-bot"
          state={gameState[7]}
          onClick={() => onGameClicked(7)}
        />
        <Square
          className="b-right b-bot"
          state={gameState[8]}
          onClick={() => onGameClicked(8)}
        />
      </div>
      <div className="btn-move">
        <div>
          <button className="clear" onClick={resetGame}>
            Clear Game
          </button>
        </div>
        <div>
          <p class="mov">Next Move: {isXMove ? "X" : "O"}</p>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
