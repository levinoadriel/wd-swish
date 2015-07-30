(function($) {
	
	"use strict";

    //validation rules
    $("#contact").validate({
        rules: {

            "msg": {
                required: true,
            },
            "name": {
                required: true,
            },
            "email": {
                required: true,
                email: true,
            },
            
        },

        //perform an AJAX post to ajax.php
        submitHandler: function() {
            $("#contact-loading").show();

            $.post('contact.php',
                $('form#contact').serialize(),

                function(data) {
                    $("#contact-loading").hide();
                    $('#contact').hide();
                    $('div .success-msg').show();
                    $('div .success-msg1').html(data.msg);
                }, "json");
        }
    });
})(jQuery);