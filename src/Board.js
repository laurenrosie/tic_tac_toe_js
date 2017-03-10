function Board(){
  this._squares = [["","",""],
                    ["","",""],
                    ["","",""]];
};

Board.prototype.squares = function () {
  return this._squares;
};
