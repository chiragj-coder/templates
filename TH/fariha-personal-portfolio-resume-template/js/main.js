/* --------------------------------------------------------
    Table of Contents
===========================================================
    1. Custom Cursor JS
    2. Preloader
    3. Main Menu
       3.2. Sub Menu
    4. Dribbble Button
    5. Tooltip
    6. Dribbble Slider
    7. Portfolio Grid
    8. Blog Masonry Grid - Single Page
    9. Blog Masonry Grid
    10. Clients Feedback Slider
    11. Clients Logo Slider
    12. Magnific Popup Gallery
    13. Magnific Popup Video
    14. Main Menu : Mouse-over Image
    15. Counter Up
    16. Skill Bar
    17. Back to Top
    18. Google Map
    19. Touch, no touch
-------------------------------------------------------- */
(function($) {
    "use strict";

    // 1. Custom Cursor JS
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var
        e = document.getElementById("pointer");

    $(document).mousemove(function (e) {

        $(".theme-bg-color")
            .on("mouseenter", function () {
                $('.pointer').addClass("black")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("black")
            })
        $(".pointer-large")
            .on("mouseenter", function () {
                $('.pointer').addClass("large")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("large")
            })
        $(".pointer-small")
            .on("mouseenter", function () {
                $('.pointer').addClass("small")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("small")
            })
        $(".mfp-img")
            .on("mouseenter", function () {
                $('.pointer').addClass("right")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("right")
            })
        $(".pointer-open")
            .on("mouseenter", function () {
                $('.pointer').addClass("open")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("open")
            })
        $(".pointer-href")
            .on("mouseenter", function () {
                $('.pointer').addClass("href")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("href")
            })
        $(".pointer-input")
            .on("mouseenter", function () {
                $('.pointer').addClass("input")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("input")
            })
        $(".pointer-small, .clients-testimonial-active button.owl-dot, .dribbble-slider-active .owl-nav button")
            .on("mouseenter", function () {
                $('.pointer').addClass("small")
            })
            .on("mouseleave", function () {
                $('.pointer').removeClass("small")
            })
    });

    // 2. Preloader
    $('.loader').fadeOut(1000);
    $('.loader-mask').delay(1000).slideUp(1000);

    // 3. Main Menu
    $(".menu-icon").on("click", function () {
        $('.menu-container').addClass('active');
    });

    $(".menu-close").on("click", function () {
        $('.menu-container').removeClass('active');
    });

    // 3.2. Sub Menu
    $('.submenu-open').on("click", function () {
        $(this).find('.submenu').addClass('active');
        $('.nav-link').addClass('done');
        $('.submenu-close').addClass('active');
    });

    $('.submenu-close').on("click", function () {
        $('.submenu').removeClass('active');
        $('.nav-link').removeClass('done');
        $('.submenu-close').removeClass('active');
    });

    // 4. Dribbble Button
    $(".dribbble-btn").on("click", function () {
        $('.dribbble-slider').addClass('dribbble-slider-close');
    });

    $(".dribbble-close-btn").on("click", function () {
        $('.dribbble-slider').removeClass('dribbble-slider-close');
    });

    // 5. Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // 6. Dribbble Slider
    $('.dribbble-slider-active').owlCarousel({
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        nav:true,        
        loop:true,
        dots:false,
        autoplay:true,
        smartSpeed:1500,
        autoplaySpeed:500,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // 7. Portfolio Grid
    $('.grid').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-btn').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        var $grid = $('.grid').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.grid-item'
            }
        })
    });

    //for menu active class
    $('.portfolio-btn > button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // 8. Blog Masonry Grid - Single Page
    $('.grid-2').imagesLoaded(function () {
        
        var $grid = $('.grid-2').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item-2',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: 1
            }
        })
    });

    // 9. Blog Masonry Grid
    $('.grid-3').imagesLoaded(function () {
        
        var $grid = $('.grid-3').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item-3',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.grid-item-3'
            }
        })
    });

    // 10. Clients Feedback Slider
    $('.clients-testimonial-active').owlCarousel({
        loop: true,
        dots: true,
        margin: 30,
        autoplay: false,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2,
                margin: 100
            }
        }
    });

    // 11. Clients Logo Slider
    $('.clients-logo-carousel').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        margin: 150,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 80
            },
            600: {
                items: 3
            },
            768: {
                items: 3,
                margin: 100
            },
            1000: {
                items: 3
            },
            1366: {
                items: 4
            }
        }
    });

    // 12. Magnific Popup Gallery
    $('.gallery_popup, .portfolio_feature_popup, .blog_content_popup').magnificPopup({
        type: 'image', // this is default type
        gallery: {
            enabled: true
        }
    });

    // 13. Magnific Popup Video
    $('.popup_video').magnificPopup({
        type: 'iframe', // this is default type
    });

    // 14. Main Menu : Mouse-over Image
    $(document).on('mouseover', '.mouseover-image-change', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    // 15. Counter Up
    $('.counter').counterUp();

    // 16. Skill Bar
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-parcent')
        }, 3000);
    });

    // 17. Back to Top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
    });

    $("#back_to_top").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

// 18. Google map
function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(32.941236, -97.134178), // New York
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.941236, -97.134178),
        map: map,
        title: 'Fariha'
    });
}
if ($('#map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
}

    // 19. Touch, no touch
    var supports = (function () {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " touch";
            return {
                touch: true
            }
        } else {
            d.className += " no-touch";
            return {
                touch: false
            }
        }
    })();

})(window.jQuery);


  