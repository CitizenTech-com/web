
"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 1000);

    // Sticky Header
    var fixed_top = $(".header-section");
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else {
      fixed_top.removeClass("animated fadeInDown header-fixed");
    }

    // navbar active header 
    $(document).on('click', '.navigation ul li', function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
    // Navbar add and close

    // mobile number
    const mobileSize = window.matchMedia("(max-width: 991px)");
    function handleMediaScreen(e) {
      if (e.matches) {
        $(".navbar-nav .sub").addClass("dropdown-menu");
        $(".navbar-nav .dropdown").removeClass("show-dropdown");
        $(".navbar-nav .sub").removeClass("sub-menu");

        $(".navbar-nav .dropdown-menu").parent("li").on('click', function (e) {
          if (e.target.className !== "dropdown-item") {
            $(this).find(">.dropdown-menu").toggle(300);
            e.stopPropagation();
          }
        });
      } else {
        $(".navbar-nav .dropdown-menu").parent("li").off("click");
        $("sub-dropdown").off("click");

        $(".navbar-nav .dropdown-menu").show();
        $(".navbar-nav .dropdown").addClass("show-dropdown");
        $(".navbar-nav .sub").addClass("sub-menu");
        $(".navbar-nav .sub").removeClass("dropdown-menu");
      }
    }
    handleMediaScreen(mobileSize);
    mobileSize.addEventListener("change", handleMediaScreen);

    // Navbar Custom Menu Button 
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('open');
    });

    // Header Active
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('show');
      $(this).parents('.single-item').siblings().removeClass('show');
    });

    // Navbar Active Class Only for HTML
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.navbar-nav a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents(".sub-dropdown").find("button").first().addClass('active');
    targetClass.parents(".show-dropdown").find("button").first().addClass('active');

    $(".left-nav-icon").on("click", function () {
      $(".nav_aside").toggleClass("show");
    });


    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active');
      $(this).parents('.single-item').siblings().removeClass('active');
    });

    $("section, .close-btn").on('click', function () {
      $('.single-item').removeClass('active');
    });

    // window on scroll function
    $(window).on("scroll", function () {

      // Odometer Init 
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });


      // circle img rotation
      var images = document.querySelectorAll(".circle-area img");
      images.forEach(function (image) {
        var rotation = window.scrollY / 4;
        image.style.transform = "rotate(" + rotation + "deg)";
      });

    });

    // Stories Details
    $(".stories_toggle1").click(function () {
      $(".stories_side").toggleClass("show");
    });

    $(document).click(function (event) {
      if (!$(event.target).closest('.common_toggles, .common_area, .common_toggles2, .common_area2, .common_toggles3, .common_area3, .left-nav-icon, .nav_aside, .footfixedbtn, .fixed_footer').length) {
        $(".common_area, .common_area2, .common_area3, .nav_aside, .fixed_footer").removeClass("show");
      }
    });

    $(".common_toggles").click(function (event) {
      event.stopPropagation();
      $(".common_area").toggleClass("show");
      $(".common_area2").removeClass("show");
      $(".common_area3").removeClass("show");
    });

    $(".common_toggles2").click(function (event) {
      event.stopPropagation();
      $(".common_area2").toggleClass("show");
      $(".common_area").removeClass("show");
      $(".common_area3").removeClass("show");
    });

    $(".common_toggles3").click(function (event) {
      event.stopPropagation();
      $(".common_area3").toggleClass("show");
      $(".common_area").removeClass("show");
      $(".common_area2").removeClass("show");
    });

    // Home page active color
    let activeElement = null;

    $(".colorChangeTag").click(function () {
      if (activeElement !== null) {
        activeElement.css('color', '#190F47');
      }
      $(this).css('color', '#EC604F');
      activeElement = $(this);
    });

    // Booking bg color change
    let activeElements = null;

    $(".bgColorChange").click(function () {
      if (activeElements !== null) {
        activeElements.css('background-color', '#fff');
      }
      $(this).css('background-color', '#EC604F');
      activeElements = $(this);
    });

    $('.single-item4 .cmn-head4').on('click', function () {
      $(this).parents('.single-item4').toggleClass('active').find('.content4').slideToggle();
      $(this).parents('.single-item4').siblings().removeClass('active').find('.content4').slideUp();
    });

    $('.single-item5 .cmn-head5').on('click', function () {
      $(this).parents('.single-item5').toggleClass('active').find('.content5').slideToggle();
      $(this).parents('.single-item5').siblings().removeClass('active').find('.content5').slideUp();
    });

    // Close any where
    const $menu = $('.workready');
    $(document).mouseup(function (e) {
      if (!$menu.is(e.target)
        && $menu.has(e.target).length === 0) {
        $menu.removeClass('show');
      }
    });

    // site update
    $(".user_account").on("click", function () {
      $(this).parent().next(".profile").slideToggle();
    });

    // chat slide buttons
    // Profile Active
    $('.main_content .profile-active').on('click', function () {
      $('.main_content .profile-sidebar').toggleClass('active');
    });

    // Profile Close
    $('.main_content .profile-close').on('click', function () {
      $('.main_content .profile-sidebar').removeClass('active');
    });

    $("main").on("click", function () {
      $(".profile").slideUp();
    });

    $(".comment_replys").click(function () {
      $(this).parent().next(".comment_replysshow").slideToggle();
    });
    $(".cmnt_id").click(function () {
      $(this).parent().next(".cmnt_id_show").slideToggle();
    });
    // / comments-area
    $('.reply-btn').on('click', function () {
      $(this).closest(".author__content").find(".reply-form").slideToggle();
    });

    // Navbar Auto Active Class 
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents('.menu-item').addClass('active-parents');
    $('.active-parents > button').addClass('active');

    // navbar custom
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });

    // toggle search box 
    $('.search-toggle-btn').on('click', function () {
      $('.search-toggle-box').slideToggle(300);
    });

    $(window).resize(function () {
      handleWindowResize();
    });

    // Function to handle window resize
    function handleWindowResize() {
      var windowWidth = $(window).width();
      if (windowWidth <= 767) {
        $(document).click(function (event) {
          if (!$(event.target).closest(".search-toggle-box, .search-toggle-btn").length) {
            $('.search-toggle-box').slideUp(300);
          }
        });
      }
    }
    if ($(window).width() <= 767) {
      $(document).click(function (event) {
        if (!$(event.target).closest(".search-toggle-box, .search-toggle-btn").length) {
          $('.search-toggle-box').slideUp(300);
        }
      });
    }

    // header-switch clone 
    var switchContent = $(".header-section .navbar-custom .right-area").html();
    $(".switch-wrapper-top").html(switchContent);

    // Langulage dropdown menu
    var tnum = 'en';
    $(document).ready(function () {

      $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
      });
      $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');
        setTimeout(function () {
          $('.more_lang').toggleClass('active');
        }, 5);
      });

      /*TRANSLATE*/
      translate(tnum);

      $('.more_lang .lang').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        var img = $(this).find('img').attr('src');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang img').attr('src', img);

      });
    });

    function translate(tnum) {
      $('').text(trans[0][tnum]);
      $('').text(trans[1][tnum]);
      $('').text(trans[2][tnum]);
    }
    var trans = [
      {
        en: '',
        pt: '',
        es: '',
        fr: '',
        de: '',
        cn: '',
        ar: '',
      }, {
        en: '',
        pt: '',
        es: '',
        fr: '',
        de: '',
        cn: '',
        ar: ''
      }, {
        en: '',
        pt: '',
        es: '',
        fr: '',
        de: '',
        cn: '',
        ar: ''
      },

    ];

    // Current Year
    $(".currentYear").text(new Date().getFullYear());

    // sidebar-toggler
    var primarySidebar = $('.sidebar-toggler .sidebar-head');
    $('.sidebar-toggler .toggler-btn').on('click', function () {
      $(this).closest('.sidebar-head').toggleClass('active');
      if (!$('.sidebar-head').hasClass('active')) {
        setTimeout(function () {
          primarySidebar.css("height", "24px");
        }, 550);
      } else {
        primarySidebar.css("height", "100%");
      }
    });

    // sidebar-toggler
    $('.sidebar-wrapper .sidebar-item-head').on('click', function () {
      $(this).siblings('.sidebar-single-body').slideToggle();
      $(this).toggleClass('active');
    });

    // Social Item Remove
    $('.social-hide-btn').on('click', function () {
      $(this).parents(".single-box").toggleClass('active');
      if ($('.single-box').hasClass("active")) {
        $('.active .social-hide-btn i').html("remove");
      } else {
        $('.social-hide-btn i').html("add");
      }
    });

    // fill strok text 
    $('.fill-stroke-text').on('mouseenter mouseleave', function () {
      $(this).toggleClass('dataContent');
      const strokeData = $('.fill-stroke-text.dataContent')[0].innerText;
      $(this).attr('data-content', strokeData);
    });

    // progress-area
    let progressBars = $('.progress-area');
    let observer = new IntersectionObserver(function (progressBars) {
      progressBars.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          let width = $(entry.target).find('.progress-bar').attr('aria-valuenow');
          let count = 0;
          let time = 1000 / width;
          let progressValue = $(entry.target).find('.progress-value');
          setInterval(() => {
            if (count == width) {
              clearInterval();
            } else {
              count += 1;
              $(progressValue).text(count + "%")
            }
          }, time);
          $(entry.target).find('.progress-bar').css({ "width": width + "%", "transition": "width 1s linear" });
        } else {
          $(entry.target).find('.progress-bar').css({ "width": "0%", "transition": "width 1s linear" });
        }
      });
    });
    progressBars.each(function () {
      observer.observe(this);
    });
    $(window).on('unload', function () {
      observer.disconnect();
    });

    //Custom Tab
    $(".tablinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singletab");
      targetTab.find(".tablinks .nav-links").each(function () {
        var navBtn = targetTab.find(".tablinks .nav-links");
        navBtn.click(function () {
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabcontent = targetTab.find(".tabcontents .tabitem");
          $(tabcontent).removeClass('active');
          $(tabcontent).eq(indexNum).addClass('active');
        });
      });
    });

    // Fixed footer up and down
    $(".footfixedbtn").click(function () {
      $(".fixed_footer").toggleClass("show");
    });

    // active any class 
    $('.clickable-active').click(function () {
      $('.clickable-active').removeClass('active');
      $(this).addClass('active');
    });

    // active any class 
    $('.clickable-active2').click(function () {
      $('.clickable-active2').removeClass('active');
      $(this).addClass('active');
    });

    // Payment methods
    $('.pay-methods').click(function () {
      $('.pay-methods').removeClass('active');
      $(this).addClass('active');
    });

    // Payment methods
    $('.amount-active').click(function () {
      $('.amount-active').removeClass('active');
      $(this).addClass('active');
    });

  });
});