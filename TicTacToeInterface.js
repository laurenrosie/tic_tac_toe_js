$( document ).ready(function() {

  var game = new Game("", "")
  var current_player = null

  $("#player-submit").click(function(){
    event.preventDefault();

    names_array =  $('#name_form').serializeArray()
    player1_name= names_array[0]['value']
    player2_name= names_array[1]['value']

    initialPageView()
    gameSetUp(player1_name, player2_name)
    setPlayerMessages(player1_name, player2_name)
    playPageView()
  });

  $("button").click(function(){
    var id = $(this).attr("data-id")
    fillInSquare(id)
    switchCurrentPlayer()
    if(game.isOver()){ finalGameView()}
  });

  function initialPageView(){
   $('#name_form').hide()
   $('#player_2_message').hide()
   $('#player_1_message').hide()
   $('winner_message').hide()
  };

  function setPlayerMessages(){
    message = player1_name + " vs " + player2_name
    $('#welcome_message').text(message);

    player_message = player1_name + " it's your turn, choose a square!"
    $('#player_1_message').text(player_message);

    player_2_message = player2_name + " it's your turn, choose a square!"
    $('#player_2_message').text(player_2_message);
  }

  function gameSetUp(player1_name, player2_name){
    game.setPlayer1Name(player1_name)
    game.setPlayer2Name(player2_name)
    current_player = game.player1()
  }

  function playPageView(){
    $('#welcome_message').show();
    $('#player_1_message').show();
  }

  function fillInSquare(id){
    game.setSquare(id.split("")[0],id.split("")[1],current_player)
    $("#"+id).hide()
    $("#value"+id).text(current_player.marker())
    $("#value"+id).show()
  }

  function switchCurrentPlayer(){
    current_player = game.otherPlayer(current_player)
  }

  function finalGameView(){
    $('#board').hide()
    $('#player_1_message').hide();
    $('#player_2_message').hide();
    $('#winner_message').text('You won!');
    $('#winner_message').show();
  }

});
