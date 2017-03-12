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

  $("button").click(function(){
    var id = $(this).attr("data-id")
    var row = id.split("")[0]
    var column = id.split("")[1]
    game.setSquare(row,column,current_player)
    var getValue = "#value"+id
    var getID = "#"+id
    $(getValue).text(current_player.marker())
    $(getID).hide()
    $(getValue).show()
    current_player = game.otherPlayer(current_player)
    // check is game over now?
    // if it is announce winner
  });

});
