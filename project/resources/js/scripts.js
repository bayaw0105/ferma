$(document).ready(function () {

    $(window).scroll( function(){
        if ($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
        
        if($(this).scrollTop() > $(this).height()){
            $('.top-header').addClass('top-header-white');
        } else {
            $('.top-header').removeClass('top-header-white');
        }
    });
    
    

    /* Navigation scroll */
    $(document).ready(function () {
        $('a[href*=#]').bind('click', function (e) {
            e.preventDefault();

            var target = $(this).attr("href");

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 1000, function () {
                location.hash = target;
            });

            return false;
        });
    });

    /*menu*/

    $('#menu-btn').click(function () {
        $('nav').slideToggle(900);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } else {
            setTimeout(function () {
                $('.is-active').addClass('not-active').removeClass('is-active')
            }, 600)
        }
    });

     
    var map = new GMaps({
		div: '.map',
		lat: 42.843887,
		lng: 74.269880
	});
	
	map.addMarker({ 
		lat: 42.843887,
		lng: 74.269880,
		title: 'ОАО «АК-КУУ»',
		infoWindow: {
			content: '<p>ОАО «АК-КУУ»</p>'
		}
	});



  

})
