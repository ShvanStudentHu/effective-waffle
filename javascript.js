const Gameboard = {
  rows: 1,
  colums: 3,
  board: [],

  add: function () {
    arr = [];
    for (let i = 0; i < this.colums; i++) {
      this.board.push(arr);
    }
  },
};

const createPlayer = (playerName) => {
  const player = {
    winCount: 0,
    playerName: playerName,
  };

  function win() {
    player.winCount++;
    return playerName, `${player.winCount}`;
  }

  const getWins = () => player.winCount;

  const getname = () => player.playerName;

  return {
    getWins,
    getname,
    win,
  };
};

p1 = "X";
p2 = "0";

const gameController = () => {
  const insertInput = (player, x, y) => {
    if (x > 2 || y > 2) {
      return "No";
    }
  };
  return insertInput;
};
