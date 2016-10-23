$(function() {
    const socket = io(),
          beep_sound = new Audio('beep.wav'),
          default_title = 'DIGINEX CHAT';

    let focused_window = true,
        is_default_title = true;

    $('#chat form').submit(function() {
        let msg = clearMsg(' ' + $('#m').val());
        if(msg !== '' && msg !== ' ') 
            socket.emit('chat message', msg);

        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').text(msg));
        if(!focused_window) {
            document.title = 'Přišla vám zpráva!';
            is_default_title = false;
            beep_sound.play();
        }
    });

    $(window).on("focus", function(e) {
        if(!focused_window)
            focused_window = true;
        if(!is_default_title) {
            document.title = default_title;
        }

    });

    $(window).on("blur", function(e) {
        if (focused_window)
            focused_window = false;
    });



});

function htmlDecode(input) {

    input = JSON.parse(htmlDecode("<%= JSON.stringify(" + input + ") %>"));
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}