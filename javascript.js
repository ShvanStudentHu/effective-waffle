const Gameboard = {
  rows: 1,
  colums: 3,
  board: [],
  gameState: false,

  add: function () {
    arr = [];
    for (let i = 0; i < this.colums; i++) {
      this.board.push(arr);
    }
  },
};

const selectSymbol = () => {
  let nextSymbol = "X";

  const flipSymbol = () => {
    let currentSymbol = nextSymbol;

    if (currentSymbol === "X") {
      nextSymbol = "O";
    } else {
      nextSymbol = "X";
    }
    // nextSymbol = currentSymbol === "X" ? "O" : "X";
    return currentSymbol;
  };

  return flipSymbol;
};

const c = selectSymbol();

const boardOne = [
  ["X", "0", "X"],
  ["0", "X", "0"],
  ["X", "0", "X"],

  //if it is one of the corners check the horizantal or vertical lines
  //if its the center check horizontal vertical nad diagonaal
];

const checkWinner = () => {
  for (let x = 0; x < 3; x++) {
    let y = 0;
    if (
      typeof boardOne[x][y] !== null &&
      boardOne[x][y] == boardOne[x][y + 1] &&
      boardOne[x][y + 1] == boardOne[x][y + 2]
    ) {
      console.log(`we have a winner ${x}`);
    }
  }

  for (let y = 0; y < 3; y++) {
    let x = 0;
    if (
      typeof boardOne[x][y] !== null &&
      boardOne[x][y] == boardOne[x + 1][y] &&
      boardOne[x + 1][y] == boardOne[x + 2][y]
    ) {
      console.log(`we have a winner vertical ${y}`);
    }
  }

  for (let i = 0; i < 1; i++) {
    let x = 0;
    let y = 0;
    if (
      typeof boardOne[x][y] !== null &&
      boardOne[x][y] == boardOne[x + 1][y + 1] &&
      boardOne[x][y] == boardOne[x + 2][y + 2]
    ) {
      console.log(`we have a winner diagonal ${i}`);
    }
  }
  //
  for (let i = 0; i < 1; i++) {
    let x = 0;
    let y = 0;
    //[ 0, 0 - 1,1 - 2,2] [0,2 1,1- 2,0]
    if (
      typeof boardOne[x][y] !== null &&
      boardOne[x][y] == boardOne[x + 1][y + 1] &&
      boardOne[x][y] == boardOne[x + 2][y + 2]
    ) {
      console.log(`we have a winner diagonal ${i}`);
    }
  }

  for (let i = 0; i < 2; i++) {
    let x = 0;
    let y = 0;
    //[ 0, 0 - 1,1 - 2,2] [0,2 1,1- 2,0]
    if (
      typeof boardOne[x][y] !== null &&
      boardOne[x][y + 2] == boardOne[x + 1][y + 1] &&
      boardOne[x][y] == boardOne[x + 2][y]
    ) {
      console.log(`we have a winner diagonal the other way ${i}`);
    }
  }
};

const createPlayer = (playerName) => {
  const sym = selectSymbol();
  const player = {
    winCount: 0,
    playerName: playerName,
    symbol: sym(),
    sym: sym(),
  };

  function win() {
    player.winCount++;
    return playerName, `${player.winCount}`;
  }

  const getSym = () => player.sym;

  const getSymbol = () => player.symbol;

  const getWins = () => player.winCount;

  const getname = () => player.playerName;

  return {
    getWins,
    getname,
    win,
    getSymbol,
    getSym,
  };
};

const p1 = createPlayer("Shvan");

const p2 = createPlayer("Steve");

const p3 = createPlayer("zteve");

const gameController = () => {
  const insertInput = (player, x, y) => {
    if (x > 2 || y > 2) {
      return "No";
    }
    Gameboard.board[x][y] = player;
  };
  return insertInput;
};
