$(document).ready(function () {

   // HEADER FIXED
   $(window).scroll(function () {
    var sticky = $('header'),
      scroll = $(window).scrollTop();
    if (scroll >= 136) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  // MENU FUNCTION
  // $('.menuToggle').click(function () {
  //   alert(0);
  //   $(this).closest('header').find('.navWrap').toggleClass('active');
  // });


  $(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('.menuToggle').length &&
      $('.navWrap').is(":visible")) {
      $('.navWrap').removeClass('active');
    }
  });

   
    $(document).on("click",".bannerSkip",function() {
        alert(0);
    })

});