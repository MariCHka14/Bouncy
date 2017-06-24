// scroll
$(document).ready(function(){
 $('.grid-item').hide();
});

$(window).scroll(function(){
  var distanse = $ ('#portfolio').offset().top;
      if ($(window).scrollTop() >= distanse){
          $('.bo-header').css('background', 'rgba(0, 0, 0, 0.2)');
            $('.grid-item').show('slow');
      }else{
          $('.bo-header').css('background', 'transparent');
      }
});

$('.bo-header__nav').on('click', 'a', function(enent){
  enent.preventDefault();

  var link = $(this).attr('href');
  var distanse = $(link).offset().top;

  $('html, body').animate({scrollTop: distanse}, 1000);
});

$('.bo-hello__link').on('click', 'a', function(enent){
  enent.preventDefault();

  var link = $(this).attr('href');
  var distanse = $(link).offset().top;

  $('html, body').animate({scrollTop: distanse}, 1000);
});

// menu
$('#bo-header-show-menu').on('click',function () {
  
  if ($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).find('span')
        .removeClass('icon-cross')
        .addClass('icon-menu');
  }
  else{
    $(this).addClass('open');
    $(this).find('span')
        .removeClass('icon-menu')
        .addClass('icon-cross');
  }
});

$(window).resize(function(){
  if ($(window).width() > 1250){
  if ($('#bo-header-show-menu').hasClass('open')) {
    $('#bo-header-show-menu').removeClass('open')
    .find('span')
    .removeClass('icon-cross')
    .addClass('icon-menu');
    }
  }
});


// masonry+isotope
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-item-size',
  percentPosition: true,
  horizontalOrder: true,
  gutter: 5
});

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item-size',
    gutter: 5,
    horizontalOrder: true
  }
})


$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// slick bo-team-slider
$(document).ready(function(){
  $('.bo-team-slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  	autoplaySpeed: 3000,
  	dots: true
  });
  $('.bo-testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});


// map
function initMap() {
  var map;
  var chernihiv = {lat:51.4938438, lng: 31.2999212};

  map = new google.maps.Map(document.getElementById('map'), {
    center: chernihiv,
    zoom: 15,
    scrollwheel: false, 
    mapTypeControl: false 
  });

  var marker = new google.maps.Marker({
    position: chernihiv,
    map:map
  });
}










