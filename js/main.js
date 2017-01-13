
// ----------   ScrollTop ---------//
var scrollNav;
scrollNav = $('#scrollNav');


$(window).scroll(function () {

    var scroll;
    scroll = $(window).scrollTop();

    if(scroll > 300) {
        scrollNav.addClass('scrollActive');
    }else {
        scrollNav.removeClass('scrollActive');
    }
});

// ---- Scroll Anhors --- //



$(document).ready(function(){

    $("#scrollNav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-95}, 1500);

    });

});


// ----- BACK to Top ---- //

$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});


// ----HAMBURGER ----//

$('.btn-nav').click(function(){
    $('.btn-nav').toggleClass('active');
    $('.navigation').toggleClass('active');
});
