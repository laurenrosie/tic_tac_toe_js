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
  })

  it('has method #setPlayer1Name which changes player1 name', function(){
    game.setPlayer1Name("Lola")
    expect(game.player1().name).toEqual("Lola")
  })

  it('has method #setPlayer2Name which changes player2 name', function(){
    game.setPlayer2Name("Joe")
    expect(game.player2().name).toEqual("Joe")
  })

  it('has method setSquare that sets square to a player', function(){
    game.setSquare(1, 0, game.player1())
    expect(game.board().squares()[1][0]).toEqual(game.player1())
  });

  it('has a method #otherplayer returning the other player', function(){
    expect(game.otherPlayer(game.player1())).toEqual(game.player2())
  })

  it('has a method #otherplayer returning the other player', function(){
    expect(game.otherPlayer(game.player2())).toEqual(game.player1())
  })

});
