// PROFILE SLIDER
$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
  flankingItems: 3,
  movingToCenter: function () {
  $('#textbox i').empty();
  $('#textbox h2').empty();
  },
  movedToCenter: function ($item) {
  var caption = $item.data('content');
  var name = $item.data('title');
  $('#textbox i').append("&quot;"+caption+"&quot;");
  $('#textbox h2').append(name);
  }
  });
//profile slider indicators
  $('#profile1').bind('click', function () {

    $('#profile1').addClass( "active" );
    $('#profile2').removeClass("active");
    $('#profile3').removeClass("active");

    $('#textbox').fadeOut('fast', function(){
      carousel.prev();
      $('#textbox').fadeIn('fast');
  });
    return false
  });

  $('#profile3').bind('click', function () {

    $('#profile3').addClass( "active" );
    $('#profile2').removeClass("active");
    $('#profile1').removeClass("active");

    $('#textbox').fadeOut('fast', function(){
      carousel.next();
      $('#textbox').fadeIn('fast');
  });
    return false;
  });

  $('#reload').bind('click', function () {
    newOptions = eval("(" + $('#newoptions').val() + ")");
    carousel.reload(newOptions);
    return false;
  });
// PROFILE SLIDER

//CONTENT SLIDER
});
// CLICK 2
  $('#slideContent2').click(function(e){
  e.preventDefault();
  $('#slideContent2').addClass( "active" );
  $('#slideContent1').removeClass("active");
  $('#slideContent3').removeClass("active");
  $('#div1').fadeOut('fast', function(){
    $('#div3').fadeOut('fast', function(){
      $('#div2').fadeIn('slow');
  });
  });
  // CLICK 1
}); $('#slideContent1').click(function(e){
  e.preventDefault();
  $('#slideContent1').addClass( "active" );
  $('#slideContent2').removeClass("active");
  $('#slideContent3').removeClass("active");

  $('#div2').fadeOut('fast', function(){
    $('#div3').fadeOut('fast', function(){
      $('#div1').fadeIn('slow');
  });
  });
  // CLICK 3
}); $('#slideContent3').click(function(e){
  e.preventDefault();
  $('#slideContent3').addClass( "active" );
  $('#slideContent2').removeClass("active");
  $('#slideContent1').removeClass("active");
  $('#div2').fadeOut('fast', function(){
    $('#div1').fadeOut('fast', function(){
      $('#div3').fadeIn('slow');
  });
  });
});


anime({
targets: '.loop-alternate-infinity',
translateX: function() {
    return anime.random(-60, 60);
  },
translateY: function() {
    return anime.random(-60, 40);
  },
speed: '200',
direction: 'alternate',
loop: true,
easing: 'easeInOutSine'
});

anime({
  targets: '.dom-attribute-demo input',
  value: [0, 1000],
  round: 1,
  easing: 'easeInOutExpo'
});

var roundLogEl = document.querySelector('.round-log');
var roundLogE2 = document.querySelector('.round-log2');
var roundLogE3 = document.querySelector('.round-log3');

anime({
  targets: roundLogEl,
  innerHTML: [0, 74],
  easing: 'linear',
  round: 1 // Will round the animated value to 1 decimal
});
anime({
  targets: roundLogE2,
  innerHTML: [0, 33],
  easing: 'linear',
  round: 1 // Will round the animated value to 1 decimal
});
anime({
  targets: roundLogE3,
  innerHTML: [0, 10],
  easing: 'linear',
  round: 1 // Will round the animated value to 1 decimal
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slides[slideIndex-1].style.display = "block";  
}