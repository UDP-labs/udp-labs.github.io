$(function () {
    $(window).scroll(function(){
        // add navbar opacity on scroll
        if ($(this).scrollTop() > 100) {
            $(".navbar.navbar-fixed-top").addClass("scroll");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll");
        }

        // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });

    $('#myCarousel').carousel({
        interval: 15000

    });

    // scroll back to top btn
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });
    
    // scroll navigation functionality
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

    // Google maps
    var udpPosition = new google.maps.LatLng(59.94934, 10.76629);
    var mapOptions = {
        center: udpPosition,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var gMap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    // custom udp marker created using http://powerhut.co.uk/googlemaps/custom_markers.php
    var image = new google.maps.MarkerImage(
        'img/udp_marker.png',
        new google.maps.Size(64,54),
        new google.maps.Point(0,0),
        new google.maps.Point(32,54)
    );
    var shadow = new google.maps.MarkerImage(
        'img/udp_marker_shadow.png',
        new google.maps.Size(94,54),
        new google.maps.Point(0,0),
        new google.maps.Point(32,54)
    );
    var shape = {
        coord: [46,0,46,1,46,2,57,3,59,4,60,5,61,6,62,7,63,8,62,9,63,10,63,11,63,12,63,13,63,14,63,15,63,16,63,17,63,18,63,19,62,20,62,21,63,22,62,23,61,24,60,25,58,26,55,27,51,28,51,29,49,30,36,31,49,32,36,33,36,34,36,35,36,36,41,37,42,38,43,39,43,40,45,41,45,42,45,43,44,44,44,45,43,46,41,47,40,48,39,49,38,50,38,51,37,52,36,53,27,53,28,52,26,51,25,50,24,49,23,48,22,47,22,46,20,45,19,44,19,43,19,42,19,41,19,40,28,39,21,38,28,37,28,36,28,35,28,34,28,33,28,32,28,31,28,30,28,29,28,28,13,27,10,26,8,25,7,24,6,23,5,22,4,21,4,20,3,19,3,18,3,17,2,16,2,15,2,14,2,13,0,12,5,11,0,10,0,9,0,8,0,7,0,6,0,5,29,4,0,3,36,2,36,1,36,0,46,0],
        type: 'poly'
    };

    var marker = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        icon: image,
        shadow: shadow,
        shape: shape,
        map: gMap,
        position: udpPosition
    });




    // Google maps
//    $(function(){

//    });

});