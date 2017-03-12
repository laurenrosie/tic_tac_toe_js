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
