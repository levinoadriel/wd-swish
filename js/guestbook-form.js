(function($) {
    "use strict";

    //validation rules
    $("#guestbook-form").validate({
        rules: {

            "message": {
                required: true,
                maxlength: 160
            },
            "guest-name": {
                required: true,
            },
            "guest-email": {
                required: true,
                email: true,
            },

        },
    });

    var text_max = 160;
    $('#message_limit').html(text_max + ' characters remaining');

    $('#message').keyup(function() {
        var text_length = $('#message').val().length;
        var text_remaining = text_max - text_length;

        $('#message_limit').html(text_remaining + ' characters remaining');
    });

})(jQuery);