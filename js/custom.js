(function($) {

    "use strict";

    //Click event to scroll to top
    $('.scrollToTop').on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Close Slide menu By esc Key

    $(document).on("keydown", function(event) {
        if (event.which === 27) {
            $('.wedding-menu').removeClass('wedding-menu-open');
            $('#open-menu-icon').css("display", "block");
        }
    });


    //Preloader gif
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').css({
            'overflow': 'visible'
        });
    });


    // Touch Device form fix
    if (Modernizr.touch) {
        var $wedding_menu = jQuery('.wedding-menu');
        var $OpenBtn = jQuery('.OpenBtn');
        var $SlideMenu = jQuery('.SlideMenu');
        var $inputs = jQuery('input:text, textarea');

        $inputs.on('focus', function(e) {
            $wedding_menu.addClass('fixfixed');
            $OpenBtn.addClass('fixfixed');
            $SlideMenu.addClass('fixfixed');
        });
        $inputs.on('blur', function(e) {
            $wedding_menu.removeClass('fixfixed');
            $OpenBtn.removeClass('fixfixed');
            $SlideMenu.removeClass('fixfixed');
        });
    }

    $('input,textarea').on('focus', function(e) {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });

    $('input,textarea').on('blur', function(e) {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    // gallery mixitup
    $('#Gallery-Items-Container').mixItUp();

    //Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

})(jQuery);




(function($) {
    "use strict";

    // Slide Menu

    var menuTop = document.getElementById('slide-menu'),
        open = document.getElementById('open'),
        close = document.getElementById('close'),
        open_menu_icon = document.getElementById('open-menu-icon'),
        body = document.body;

    open.onclick = function() {
        classie.toggle(this, 'active');
        classie.toggle(menuTop, 'wedding-menu-open');
        open_menu_icon.style.display = "none";

    };
    close.onclick = function() {
        classie.toggle(this, 'active');
        classie.toggle(menuTop, 'wedding-menu-open');
        open_menu_icon.style.display = "block";

    };

    // WOW

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });

    wow.init();

})(jQuery);


// Range Slider 
    rangeSlider = $("#rangeSlider");

    rangeSlider.noUiSlider({
        start: 1,
        step: 1,
        decimals: false,

        // Disable animation on value-setting,
        // so the sliders respond immediately.
        animate: true,
        range: {
            min: 0,
            max: 10
        }
    });

    rangeSlider.Link('lower').to($('#rangeValue'), null, wNumb({
        decimals: 0
    }));
