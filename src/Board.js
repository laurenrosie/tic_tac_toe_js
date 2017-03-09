function Board(){
  this._squares = [[new Square(),new Square(),new Square()],
                    [new Square(),new Square(),new Square()],
                    [new Square(),new Square(),new Square()]];
};

Board.prototype.squares = function () {
  return this._squares;
};
