$(document).ready(function () {
    
    $('#menu-btn').click(function () {
        $('nav').slideToggle(900);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } 
        else {
            setTimeout(function () {
                $('.is-active').addClass('not-active').removeClass('is-active')
            }, 600)
        }
    });
    

})
