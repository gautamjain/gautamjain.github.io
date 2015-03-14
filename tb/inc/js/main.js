/*----------------------------------------
  HERO FLEXSLIDER
----------------------------------------*/
$(document).ready(function() {
  $('#main-slider').flexslider({
    animation: "fade",//effects
    slideshowSpeed: 5500,//duration
    controlNav: false,
    directionNav: false
  });
});



/*----------------------------------------
  MENU SIDE
----------------------------------------*/

$("#menu-close").click(function(e) {
   e.stopPropagation();
   $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
   e.stopPropagation();
   $("#sidebar-wrapper").toggleClass("active");
});
$(document).click(function(){
   if($("#sidebar-wrapper").hasClass('active')){
      $("#sidebar-wrapper").removeClass("active");
   }
});


/*----------------------------------------
    CAROUSEL - testimonial
----------------------------------------*/
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


/*----------------------------------------
	TOOLTIP
----------------------------------------*/

$('.social-icons a, .social-icons-bottom a').tooltip();

/*----------------------------------------
  FLEXSLIDER
----------------------------------------*/

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    smoothHeight: true,
    touch: true,
    itemWidth: 120,
    itemMargin: 2,
    move: 2,
    minItems: 1,
    maxItems: 3
  });
});


/*----------------------------------------
  PAGE SCROLL
----------------------------------------*/
$('ul.sidebar-nav li a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

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