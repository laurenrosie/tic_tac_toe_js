describe('Game', function(){
  beforeEach(function(){
    game = new Game("Lauren", "Andrew")
  });

  it('has an attribute Player 1 which is an instance of Player', function(){
    expect(game.player1() instanceof Player).toBeTruthy()
  });

  it('has an attribute Player 2 which is an instance of Player', function(){
    expect(game.player2() instanceof Player).toBeTruthy()
  });

  it('has an attribute Board which is an instance of Board', function(){
    expect(game.board() instanceof Board).toBeTruthy()
  });

  it('player1_name= successfully changes the name', function(){
      console.log("gets here")
      game.set_player1_name("Lola");
      expect(game.player1().name).toEqual("Lola");
  });
});
