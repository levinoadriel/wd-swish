(function($) {
    "use strict";
    
    $('div .success-msg').hide();

    //validation rules
    $("#rsvp").validate({
        rules: {
            "name": {
                required: true,
            }
        },

        //perform an AJAX post to ajax.php
        submitHandler: function() {
            $("#loading").show();

            $.post('rsvp.php',
                $('form#rsvp').serialize(),

                function(data) {
                    $("#loading").hide();
                    $('div .Rsvp-From').hide();
                    $('div .success-msg').show();
                    $('div .success-msg1').html(data.msg);
                }, "json");
        }
    });
})(jQuery);