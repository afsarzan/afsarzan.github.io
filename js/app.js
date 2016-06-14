$(document).foundation();
// smooth scrolling css -tricks
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

//     // ------------- VARIABLES ------------- //
// var ticking = false;
// var isFirefox = (/Firefox/i.test(navigator.userAgent));
// var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
// var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
// var slideDurationSetting = 600; //Amount of time for which slide is "locked"
// var currentSlideNumber = 0;
// var totalSlideNumber = $(".background").length;

// // // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
// // function parallaxScroll(evt) {
// //   if (isFirefox) {
// //     //Set delta for Firefox
// //     delta = evt.detail * (-120);
// //   } else if (isIe) {
// //     //Set delta for IE
// //     delta = -evt.deltaY;
// //   } else {
// //     //Set delta for all other browsers
// //     delta = evt.wheelDelta;
// //   }

// //   if (ticking != true) {
// //     if (delta <= -scrollSensitivitySetting) {
// //       //Down scroll
// //       ticking = true;
// //       if (currentSlideNumber !== totalSlideNumber - 1) {
// //         currentSlideNumber++;
// //         nextItem();
// //       }
// //       slideDurationTimeout(slideDurationSetting);
// //     }
// //     if (delta >= scrollSensitivitySetting) {
// //       //Up scroll
// //       ticking = true;
// //       if (currentSlideNumber !== 0) {
// //         currentSlideNumber--;
// //       }
// //       previousItem();
// //       slideDurationTimeout(slideDurationSetting);
// //     }
// //   }
// // }

// // // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
// // function slideDurationTimeout(slideDuration) {
// //   setTimeout(function() {
// //     ticking = false;
// //   }, slideDuration);
// // }

// // ------------- ADD EVENT LISTENER ------------- //
// var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
// window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// // ------------- SLIDE MOTION ------------- //
// function nextItem() {
//   var $previousSlide = $(".background").eq(currentSlideNumber - 1);
//   $previousSlide.removeClass("up-scroll").addClass("down-scroll");
// }

// function previousItem() {
//   var $currentSlide = $(".background").eq(currentSlideNumber);
//   $currentSlide.removeClass("down-scroll").addClass("up-scroll");
// }

});
var selector = '.text-right  a';
$(window).scroll(function() {
    onScroll(event, selector);
    if ($(window).scrollTop() >= 30) $('header').addClass('fixed-top');
    else $('header').removeClass('fixed-top');
});
$(selector).on('click', function() {
    $(selector).removeClass('active');
    $(this).addClass('active');
});
function onScroll(event, selector) {
    var scrollPos = $(document).scrollTop();
    $(selector).each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos-10) {
            $(selector).removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
$('.profes').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})