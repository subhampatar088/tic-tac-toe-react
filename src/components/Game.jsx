import React, { useState } from "react";
import Square from "./Square";

function Game(value) {
  const [state, setState] = useState(Array(9).fill());
  const [isXTurn, setXTurn] = useState(true);
  let winner = "";
  function checkWinner() {
    const winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winningCombo) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[b] === state[c]) {
        winner = state[a];
        return true;
      }
    }
    return false;
  }
  const isWinner = checkWinner();
  console.log(isWinner);
  function boxClick(index) {
    if (state[index] == null) {
      console.log("clicked " + index);
      let copyState = [...state];
      copyState[index] = isXTurn ? "X" : "O";
      setState(copyState);
      setXTurn(!isXTurn);
    }
  }

  return (
    <div className="container">
      {isWinner ? (
        <h1>{winner} won</h1>
      ) : (
        <>
          <div className="row">
            <Square onClick={() => boxClick(0)} value={state[0]} />
            <Square onClick={() => boxClick(1)} value={state[1]} />
            <Square onClick={() => boxClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => boxClick(3)} value={state[3]} />
            <Square onClick={() => boxClick(4)} value={state[4]} />
            <Square onClick={() => boxClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => boxClick(6)} value={state[6]} />
            <Square onClick={() => boxClick(7)} value={state[7]} />
            <Square onClick={() => boxClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Game;
