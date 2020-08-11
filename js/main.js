"use strict";

$(function () {
  /************************
         slow scroll
   */
  $(".go-to").on('click', function (e) {
    e.preventDefault();
    var mainHeader = $('.main-header');
    var anchor = $(this).attr("href"),
        height = mainHeader.height();

    if ($(anchor).length) {
      var run = $(anchor).offset().top - height;
      $('body,html').stop().animate({
        scrollTop: run
      }, 1500);
    } else {
      console.warn("ID don't search!");
    }
  });
  /*****************
  *    dropdown    *
  ******************/

  var $dropdown = $(".dropdown");
  $dropdown.on("click", '.dropdown-toggle', function (e) {
    e.preventDefault();
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
    $(id).parent().children().removeClass('active');
    $(id).addClass('active');
  });
  /*********************
   *       sliders      *
   *********************/

  $('.slider-objects').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    focusOnSelect: true,
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
  $('.single-slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.choose-slider'
  });
  $('.gallery-products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.choose-slider',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 12.25L16.875 7l-5.25-5.25M1.125 7h15.75" stroke="#13AD89" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 12.25L16.875 7l-5.25-5.25M1.125 7h15.75" stroke="#13AD89" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }]
  });
  $('.detail-products').slick({
    arrows: false,
    asNavFor: '.choose-slider',
    focusOnSelect: true
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

    if (Number(key) >= 0) {} else {
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
  /***************************
  переаикач відображення пароля password
   */

  var $togglepassword = $(".toggle-password");
  $togglepassword.on('click', '.eye', function () {
    var $this = $(this);
    var $parent = $this.parents('.toggle-password');
    var input = $parent.find('input');

    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $togglepassword.on('mouseout', '.eye', function () {
    var $this = $(this);
    var $parent = $this.parents('.toggle-password');
    var input = $parent.find('input');
    input.attr("type", "password");
  });
  /************************
  кнопка відображення інформації "i"
   */

  var $inputInfo = $('.tooltip');
  $inputInfo.on("click", '.info-btn', function () {
    var $this = $(this);
    var $parent = $this.parents('.tooltip');
    $('.tooltip').removeClass('active');
    $parent.addClass('active');
  });
  $(document).mouseup(function (e) {
    if (!$inputInfo.is(e.target) && $inputInfo.has(e.target).length === 0) {
      $('.tooltip').removeClass('active');
    }
  });
  $inputInfo.on("mouseout", '.info-btn', function () {
    var $this = $(this);

    if ($this.parents('.tooltip').hasClass('active')) {
      $this.parents('.tooltip').removeClass('active');
    }
  });
  /****************
  make private
   */

  $(".toggle-primary").on('click', function () {
    $(this).toggleClass('active');
  });
  /****************
  delete gallery image
   */

  $('.photo-gallery .remove').on("click", function () {
    $(this).parent().remove();
  });
  /****************
  count textarea
  */

  var $textareaCount = $('.textarea-count textarea');
  $textareaCount.on('keyup mousemove mousedown change', function () {
    var $this = $(this);
    var parent = $this.parents(".textarea-count");
    parent.find('.count').text($this.val().length);
  });
});