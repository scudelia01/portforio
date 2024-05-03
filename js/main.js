$(function () {

  new Swiper(".sw-slide", {
    loop: true,
    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".banner-slide", {
      loop: false,
    pagination: {
      el: ".top-pagination",
      clickable: true,
    },
  });

  // top banner slide
  setInterval(function () {
    $('.topbanner').fadeOut(1000).fadeIn(1000)
  }, 5500);

  $('.close-banner').click(function () {
  $('.topbanner').addClass('active');
  });

  //header sticky
  const header = $('header'),
        headerOffsetTop = header.offset().top;
    console.log(headerOffsetTop);

    $(window).on('scroll', () => {
        let $scrollTop = $(this).scrollTop()
        // console.log($scrollTop)
        if ($scrollTop > headerOffsetTop) {
            header.addClass('sticky')
        } else {
            header.removeClass('sticky')
        }
     });

  //search modal
  const modal = $('.search-box');
  const closeBtn = $('.close-btn')
  modal.click(function (e) {
    // console.log(modal)
    e.stopPropagation();
    e.preventDefault();
    $('.search-modal').toggleClass('active');
  })

  closeBtn.click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.search-modal').removeClass('active');
  })

  // mobile all menu
  const menuTrigger = $('.container .menu-trigger')
  const menuMask = $('.all-menu-mask')
  const allMenu = $('.all-menu')
  const closeTrigger = $('.close-trigger')

  menuTrigger.click(function () {
    menuMask.addClass('active')
    allMenu.addClass('active')
  })

  closeTrigger.click(function () {
    menuMask.removeClass('active')
    allMenu.removeClass('active')
  })

  // mobile all menu 아코디언

  //모바일 서브메뉴 펼치기(아코디언) 기능
  const mb_slide_li = $('.mobile-menu > li'),
      mb_slide = $('.mobile-slide'),
      mb_slide_a = $('.mobile-menu > li > a');
  
  let mb_slide_height = [];
  
  mb_slide.each(function (index) {

  let count = $(this).find('li').length

    mb_slide_height[index] = 35 * count;
  })
 
  // console.log(mb_slide_height)

  mb_slide_a.each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      mb_slide_a.removeClass('open')
      $(this).toggleClass('open')
      let isOpen = $(this).hasClass('open')
      if (isOpen) {
        mb_slide_li.height(35)
        let temp = mb_slide_height[index]
        mb_slide_li.eq(index).height(temp + 35)
      } else {
        mb_slide_li.eq(index).height(35)
      }
    })
  })

  mb_slide_a.first().addClass('open');
  mb_slide_li.height(35);
  mb_slide_li.first().height(mb_slide_height[0] + 35);

  // gotop 버튼
  $('.gotop').toggle($(window).scrollTop() > 0);

  $('.gotop').click(function () {
      $('html').animate({
          scrollTop: 0
      }, 1000);
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.gotop').fadeIn();
    } else {
        $('.gotop').fadeOut();
    }
  });

})
