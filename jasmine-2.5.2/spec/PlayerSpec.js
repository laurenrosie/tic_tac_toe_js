describe('Player', function() {

  beforeEach(function(){
    player = new Player("Lauren");
  });

  it('has a name attribute assigned during instantiation', function(){
    expect(player.name()).toEqual("Lauren")
  });
});
