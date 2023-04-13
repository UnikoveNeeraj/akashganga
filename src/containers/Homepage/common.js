$(window).scroll(function () {
    const pages = ['', '/teams', '/terms', '/founder-details', '/privacy-policy', '/cookie','/advisory','/wip','/browse','/member-details', '/faq', '/council', '/presentations', '/resourcecentre', '/about', '/', '/contactus'];
    if((pages.indexOf(window.location.pathname) > -1) || window.location.pathname.match('/member-details')) {
      var sticky = $('header'),
        scroll = $(window).scrollTop();
      if (scroll >= 136) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    }
  });

  // $('.menuToggle').click(function () {
  //   $(this).closest('header').find('.navWrap').toggleClass('active');
  // });


  $(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('.menuToggle').length &&
      $('.navWrap').is(":visible")) {
      $('.navWrap').removeClass('active');
    }
  });

  $('.faqBox-head').click(function () {
    $(this).closest('.faqBox').siblings('.faqBox').removeClass('active');
    $(this).closest('.faqBox').siblings('.faqBox').find('.faqBox-body').slideUp();
    $(this).closest('.faqBox').toggleClass('active');
    $(this).closest('.faqBox').find('.faqBox-body').slideToggle();
  });
