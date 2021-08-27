$(document).ready(function() {

    $(this).scrollTop(0);

    // animation js
    
    // AOS.init();

    $(".close-icon").click(function(){
        $(".navbar-collapse").removeClass("show");
    });

    $(".burger-menu").click(function(){
        $(".navbar-collapse").addClass("show");
    });

    $(".nav-item").click(function(){
        $(".navbar-collapse").removeClass("show");
    });

    // navigation js

    $('.cus-accordian').on('click', function(){
        // $(this).addClass('isOpen').siblings().removeClass('isOpen');
        // $(this).addClass('isOpen');
        if ( $(this).hasClass('isOpen') ) {
            $(this).removeClass('isOpen');
        } else {
            $('.cus-accordian').removeClass('isOpen');
            $(this).addClass('isOpen');    
        }
    });
    // custom accordian

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 2) {
            $(".main-header").addClass("sticky-header");
        } else {
            $(".main-header").removeClass("sticky-header");
        }
    }); 
});

$('.nav-link').click(function(){
    var id = $(this).attr('href');
    $(id).addClass("scroll-gap");
});


