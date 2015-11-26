$(document).foundation();

// TweenLite.from(logo, 2, {opacity:0, left:"300px"});

// smooth scrolling css -tricks
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).scroll(function(){
  console.log('scrolloing');
    if($(window).scrollTop()>=30) $('header').addClass('fixed-top');
    else $('header').removeClass('fixed-top');
  });
