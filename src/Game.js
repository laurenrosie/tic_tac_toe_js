function Game(name1, name2){
  this._player1 = new Player(name1, "X")
  this._player2 = new Player(name2, "O")
  this._board = new Board()
}

Game.prototype.player1 = function () {
  return this._player1
};

Game.prototype.player2 = function () {
  return this._player2
};

Game.prototype.board = function () {
  return this._board;
};


Game.prototype.setPlayer1Name = function (newName) {
  this._player1.name= newName
};

Game.prototype.setPlayer2Name = function (newName) {
  this._player2.name= newName
};

Game.prototype.setSquare = function (i, j, player) {
  this._board.squares()[i][j]=player;
};

Game.prototype.otherPlayer = function (player) {
   if(player == this._player1){
     return this._player2
   }else{
     return this._player1
   }
};

Game.prototype.isOver = function () {
  var isOver = true;
  this._board.squares().forEach(function(row){
    row.forEach(function(value){
      if(value==""){
        isOver = false;
      }
    })
  })
  return isOver
};

Game.prototype.winner = function () {
  var row = [[0,0], [0,1], [0,2]]
  var row1 = [[1,0], [1,1], [1,2]]
  var row2 = [[2,0], [2,1], [2,2]]
  var col = [[0,0], [1,0], [2,0]]
  var col1 = [[0,1], [1,1], [2,1]]
  var col2 = [[0,2], [1,2], [2,2]]
  var diag = [[0,0], [1,1], [2,2]]
  var diag2 = [[0,2], [1,1], [2,0]]
  var possible = [row, row1, row2, col, col1, col2, diag, diag2]
  var thisBoard = this
  possible.forEach(function(option){
    var chosen = [];
    option.forEach(function(square){
      chosen.push(thisBoard._board.squares()[square[0]][square[1]])
    });
    console.log(chosen)
    if(chosen[0]==chosen[1] && chosen[1]==chosen[2]){
      console.log("gets here")
      answer = chosen[0]
      return answer
    }
  });

  return "no one"

};
