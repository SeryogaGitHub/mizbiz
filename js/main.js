"use strict";

$(function () {
  /*****************
  *    dropdown    *
  ******************/
  var $dropdown = $(".dropdown");
  $dropdown.on("click", '.dropdown-toggle', function (e) {
    var $this = $(this);
    var $parent = $this.parents('.dropdown');

    if ($this.has(e.target) && !$parent.hasClass("active")) {
      $(".dropdown .dropdown-menu").stop().slideUp();
      $(".dropdown").removeClass("active");
    }

    if ($parent.hasClass("active")) {
      $parent.removeClass("active");
      $parent.find('.dropdown-menu').slideUp();
    } else {
      $parent.addClass("active");
      $parent.find('.dropdown-menu').stop().slideDown();
    }
  });
  $dropdown.on('click', '.dropdown-menu .text', function () {
    var $this = $(this);
    var text = $this.text();
    $this.parents('.dropdown').find('.dropdown-toggle').text(text);
  });
  $(document).mouseup(function (e) {
    if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
      $(".dropdown .dropdown-menu").stop().slideUp();
      $(".dropdown").removeClass("active");
    }
  });
  /*********************
   *       tabs        *
   *********************/

  $('.nav-tabs').on("click", '.nav-item', function (e) {
    e.preventDefault();
    var $this = $(this);
    var id = $this.attr('href');
    $this.parents('.nav-tabs').find('.nav-item').removeClass("active");
    $this.addClass('active');
    $(id).parents('.tab-content').children().removeClass('active');
    $(id).addClass('active');
  });
  $('.slider-objects').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 12.25L16.875 7l-5.25-5.25M1.125 7h15.75" stroke="#13AD89" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 12.25L16.875 7l-5.25-5.25M1.125 7h15.75" stroke="#13AD89" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
  /*******************
  *     main filter
   ********************/

  $('.reset-form').on('click', function () {
    var $form = $(this).parents("form");
    $form.find('.selected').text('');
    $form.find('.default').show();
    $form.find('.price-value .input-default').each(function () {
      var $this = $(this);
      var price = $this.attr("data-default");
      $this.text(price);
    });
  });
  $('.search-checked-input').on('click', '.checked-item', function () {
    var data = "";
    var $this = $(this);
    var $dropdown = $this.parents('.dropdown');
    setTimeout(function () {
      $dropdown.find('.checked-item').each(function () {
        var $this = $(this);

        if ($this.find('input').prop("checked")) {
          data += $this.text() + "<span>, </span>";
        }
      });
      $dropdown.find('.selected').html(data);

      if (data.length) {
        $dropdown.find(".default").hide();
      } else {
        $dropdown.find(".default").show();
      }
    }, 100);
  });
  var $priceValue = $('.price-value');
  $priceValue.on('keypress', 'input', function (e) {
    var key = e.originalEvent.key;

    if (!Number(key) > 0) {
      e.preventDefault();
    }
  });
  $priceValue.on('keyup', 'input', function () {
    var $this = $(this);
    var val = $this.val();
    var id = $this.attr('data-id');

    if (val.length === 0) {
      $this.val(1);
      val = 1;
    }

    $('body').find(id).text(val);
  });
  /****************
  *     popup     *
   ***************/

  $('.popup').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
});