const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "" ,""];

    const getboard = () => board;
    const setboard = (index, value) => {
      if (index >= 0 && index < board.length && board[index] === "") {
        board[index] = value;
        return true;
      }
      return false;
    }
    const reset = () => {
    board.fill("");
  };
    return {
       
      getboard,
      setboard,
      reset
    };
})();

// Gameboard.setboard(0, "X");
// console.log(Gameboard.getboard());

const Player = (name, symbol) => {
    return { name, symbol };
};

const boardfull = () => {
  const board = Gameboard.getboard();
  return board.every(cell => cell !== "")
};

// const player1 = Player("Player 1", "X");
// const player2 = Player("Player 2", "O");

function checkWinner() {
  const board = Gameboard.getboard();
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if ( board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }
  return null; 

}

const GameController = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");

    let currentPlayer = player1;
    let gameOver = false;

    const getCurrentPlayer = () => currentPlayer;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    const playRound = (index) => {
    if(gameOver) {
      return false;
    }
    const player = getCurrentPlayer();

    if(Gameboard.setboard(index, player.symbol)) {
      if(checkWinner()) {
        gameOver = true;
        
      }
      else if (boardfull()) {
        gameOver = true;
        
      }
      else{
         switchPlayer();
         
      }
      return true; 
    }
    return false;
    };

    const reset = () => {
    currentPlayer = player1;
    gameOver = false; 
    }; 

    const getPlayerBySymbol = (symbol) => {
    return symbol === player1.symbol ? player1 : player2;
    };

    return {
    getCurrentPlayer,
    switchPlayer,
    playRound,
    reset,
    getPlayerBySymbol
    };

})();


const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const restartButton = document.querySelector("#restart");



cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

      const validmove = GameController.playRound(index);

      if(!validmove) return;
    
       cell.textContent = Gameboard.getboard()[index];
       const winner = checkWinner();
       const winningPlayer = GameController.getPlayerBySymbol(winner);

        if(winner) {
            status.textContent = ` ${winningPlayer.name}  "${winner}"wins! 🏆🤩🎖️`;
          }
        else if (boardfull()) {
            status.textContent = "It's a draw! 🤝 " ;
        }
        else {
            status.textContent = `${GameController.getCurrentPlayer().name}'s turn`;
        }
    });
});

restartButton.addEventListener("click", () => {
    Gameboard.reset();
    GameController.reset();

    cells.forEach(cell => cell.textContent = "");

    status.textContent =
        `${GameController.getCurrentPlayer().name}'s turn`;
});

status.textContent = `${GameController.getCurrentPlayer().name}'s turn`;