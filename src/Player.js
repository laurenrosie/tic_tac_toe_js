function Player(name, marker){
  this._name = name;
  this._marker = marker;
}

Player.prototype.name = function () {
  return this._name;
};

Player.prototype.marker = function () {
  return this._marker;
};
