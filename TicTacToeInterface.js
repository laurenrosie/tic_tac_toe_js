$( document ).ready(function() {

  var game = new Game("", "")
  var current_player = null

  $("#player-submit").click(function(){
    event.preventDefault();
    names_array =  $('#name_form').serializeArray()
    player1_name = names_array[0]['value']
    player2_name = names_array[1]['value']
    game.setPlayer1Name(player1_name)
    game.setPlayer2Name(player2_name)
    current_player = game.player1()
    $('#name_form').hide()
    $('#player_2_message').hide()
    $('#player_1_message').hide()

    message = player1_name + " vs " + player2_name

    $('#welcome_message').text(message);
    $('#welcome_message').show();

    player_message = player1_name + " it's your turn, choose a square!"
    $('#player_1_message').text(player_message);
    $('#player_1_message').show();
  });

  $("button#00").click(function(){
    game.setSquare(0,0,current_player)
    $('value00').text(current_player.marker())
    $('#00').hide()
    $('#value00').show()
    current_player = game.otherPlayer(current_player)
  });

});
