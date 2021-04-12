$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// navbar smooth scroll
$('.page-scroll').on('click', function(){  
  var tujuan = $(this).attr('href');
  var elementujuan = $(tujuan);  
  $('html, body').animate({
      scrollTop: elementujuan.offset().top -130
  }, 1000, 'swing');
});

// parallax body
$(window).scroll(function(){
  var efScroll =$(this).scrollTop();
  if ( efScroll > $('.snippets').offset().top - 300 ) {
      $('.snippets .col-md-3').each(function(i){
          setTimeout(function(){
              $('.snippets .col-md-3').eq(i).addClass('efek');
          }, 300 * (i+1));
      });
  }
}); 

//navbar mobile collapse
$('.page-scroll').click(function(){
  $('.navbar-collapse').collapse('hide');
});
