function clearMsg(msg) {
    msg = msg.replace(/\s+/, "");
    msg = escapeHtml(msg);
    msg = parseLinks(msg);

    return msg;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}

function parseLinks(msg) {
    return msg.replace( /((https?|ftp):\/\/|www\.)[^\s/$.?#].[^\s]*/ig, function(m) {
        return ('<a href="' + m + '">' + m + '</a>');
    });
}

function notify(data) {
    data.beep_sound.play();
    document.title = data.alert_title;
    desktopNotification({
        title: data.title,
        icon: data.icon,
        text: data.text
    });
}

function desktopNotification(data) {
    if (!Notification) {
        alert('Ve vašem prohlížeči bohužel nefungují cyhtré alerty :( . Zkuste Chrom.');
        return;
    }

    if (Notification.permission !== "granted") 
        Notification.requestPermission();
    else {
        var notification = new Notification(data.title, {
            icon: '/img/' + data.icon,
            body: data.text,
        });
        notification.onclick = function() {
            window.focus();
            this.cancel();
        };
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (Notification.permission !== "granted") 
        Notification.requestPermission();
});