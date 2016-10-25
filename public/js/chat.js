$(function() {
    const socket = io();
          beep_sound = new Audio('beep.wav'),
          default_title = String(document.title);
          alert_icon = 'squirrel.png',
          alert_title = 'Přišla vám nová zpráva !';

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
        $('#messages').append($('<li>' +  msg + '</li>'));
        if(!focused_window) {

            notify({alert_title: alert_title, 
                    beep_sound: beep_sound, 
                    title: alert_title,
                    text: msg,
                    icon: alert_icon});

            is_default_title = false;
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