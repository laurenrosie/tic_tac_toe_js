$( document ).ready(function() {

  $("#player-submit").click(function(){
    event.preventDefault();
    names_array =  $('#name_form').serializeArray()
    player1_name = names_array[0]['value']
    player2_name = names_array[1]['value']

    game = new Game( player1_name, player2_name)

    $('#name_form').hide()
    message = player1_name + " vs " + player2_name
    $('#welcome_message').text(message);
    $('#welcome_message').show();

    });
});
