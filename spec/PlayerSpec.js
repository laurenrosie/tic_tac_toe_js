describe('Player', function() {

  beforeEach(function(){
    player = new Player("Lauren", "X");
  });

  it('has a name attribute assigned during instantiation', function(){
    expect(player.name()).toEqual("Lauren")
  });

  it('has a marker attribute assigned during instantiation', function(){
    expect(player.marker()).toEqual("X")
  });
});
