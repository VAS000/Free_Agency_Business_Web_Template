$(function(){

    var banner = $('.banner');
    var topHeader = $('.top-header');
    var navbar = $('.navbar');

    function afterResize(){
        banner.height($(window).height() - topHeader.outerHeight() - navbar.outerHeight());
    }

    afterResize();

    $(window).resize(function(){
        afterResize();
    });

    // Slide Toggle Contact Form When User Clicks On The Arrow
    $('.arrow').on('click', function(){
        var box = $(this).next('.box');
        var xButton = box.find('span');
        if(box.data('status') === 'opened'){
            xButton.fadeOut(500, function(){
                box.slideUp(500, function(){
                    box.data('status','closed');
                });
            });
        }else{
            box.slideDown(500, function(){
                xButton.fadeIn(500, function(){
                    box.data('status','opened');
                });
            });
        }
    });

    $('.contact .box span').on('click', function(){
        $(this).fadeOut(500, function(){
            $(this).parent().slideUp(500, function(){
                $(this).data('status','closed');
            });
        });
    });


});