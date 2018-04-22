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
    
    /*google map*/
    
    var map = new GMaps({
        div: '.map',
        lat: 42.8754806,
        lng: 74.5886487
    });
    
    map.addMarker({
        lat: 42.8754806,
        lng: 74.5886487,
        title: 'Title text',
        infoWindow: {
            content: '<p>Title text</p>'
        }
    });
    

})
