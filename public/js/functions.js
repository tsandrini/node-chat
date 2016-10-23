    function clearMsg(msg) {
        msg = msg.replace(/\s+/, "");
        msg = escapeHtml(msg);
        return msg;
    }

    function escapeHtml(text) {
        var map = {
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

    // function alertNewMess(from) {
    // }
    // $(window).	on("blur focus", function(e) {
    //     var prevType = $(this).data("prevType");
    //     if (prevType != e.type) {
    //         switch (e.type) {
    //             case "blur":
    //                 document.title = 'Blured';
    //                 break;
    //             case "focus":
    //                 document.title = 'Focus';
    //                 break;
    //         }
    //     }
    //     $(this).data("prevType", e.type);
    // });