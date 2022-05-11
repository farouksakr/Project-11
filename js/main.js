$(function () {

    // adjust slider height

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - (upperH + navH));

    // featured work shuffle

    $('.featured-work ul li ').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {

            $('.shuffle-images .col-md').css('opacity', 1)

        } else {

            $('.shuffle-images .col-md').css('opacity', '.08')
            $($(this).data('class')).parent().css('opacity', 1)

        }

    });

    // scroll to top

    var scrollButton = $('#scroll-top')

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 1000) {

            scrollButton.fadeIn(1000)

        } else {

            scrollButton.fadeOut(1000);

        }

    });

    // click on button to scroll top

    scrollButton.click(function () {

        $('html, body').animate({ scrollTop: 0 }, 1000)

    })

});