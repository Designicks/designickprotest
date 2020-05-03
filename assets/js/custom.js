// AOS.init();
		function goto(){
		window.scrollTo(0, 0);
		}
//disable content js
		(function($){
  $(document).on('contextmenu', 'img', function() {
      return false;
  })
})(jQuery);
$('img').on('dragstart', function(event) { event.preventDefault(); });

//script to change color mode
function myFunction() {
var element = document.body;
element.classList.toggle("light-mode");
}
//script to change color mode


// Hide Header on on scroll down
var lastScrollTop = 0;
jQuery(window).scroll(function(){
  var st = $(this).scrollTop();
  var banner = $('#myTab');
  setTimeout(function(){
    if (st > lastScrollTop){
      banner.addClass('hide');
    } else {
      banner.removeClass('hide');
    }
    lastScrollTop = st;
  }, 100);
});