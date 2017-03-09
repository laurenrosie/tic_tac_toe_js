function Player(name){
  this._name = name;
}

Player.prototype.name = function () {
  return this._name;
};
