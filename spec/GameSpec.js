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

  it('has method #isOver returning true if board is full', function(){
    for(i=0; i<3; i++){
      for(j=0; j<3; j++){
        game.setSquare(i,j, "x")
      }
    }
    expect(game.isOver()).toEqual(true)
  })

  it('has method #isOver returning false if board is not full', function(){
    game.setSquare(0,0, "x")
    expect(game.isOver()).toEqual(false)
  })

  it('has method #winner returning the correct winner, or no one', function(){
    game.setSquare(0,0, "X")
    game.setSquare(0,1, "X")
    game.setSquare(0,2, "X")
    game.setSquare(1,0, "X")
    game.setSquare(1,1, "O")
    game.setSquare(1,2, "O")
    game.setSquare(2,0, "O")
    game.setSquare(2,1, "O")
    game.setSquare(2,2, "X")
    expect(game.winner()).toEqual("X")
  })

});
