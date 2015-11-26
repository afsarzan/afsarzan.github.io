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

var selector = '.text-right  a';

$(window).scroll(function(){
  onScroll(event,selector);
    if($(window).scrollTop()>=30) $('header').addClass('fixed-top');
    else $('header').removeClass('fixed-top');
  });




$(selector).on('click', function(){
    $(selector).removeClass('active');    
    $(this).addClass('active');
});


function onScroll(event,selector){
    var scrollPos = $(document).scrollTop();
    $(selector).each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            console.log($(selector));
            console.log(currLink);
              $(selector).removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$('.profes').on('click',function(){
  $('html, body').animate({ scrollTop: 0 }, 'slow');
})