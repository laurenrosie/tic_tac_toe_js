function Game(name1, name2){
  this._player1 = new Player(name1)
  this._player2 = new Player(name2)
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
