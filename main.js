// PROFILE SLIDER
$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    flankingItems: 3,
    movingToCenter: function ($item) {
      $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
    },
    movedToCenter: function ($item) {
      $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
    },
    movingFromCenter: function ($item) {
      $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
    },
    movedFromCenter: function ($item) {
      $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
    },
    clickedCenter: function ($item) {
      $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
    }
  });

  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  $('#reload').bind('click', function () {
    newOptions = eval("(" + $('#newoptions').val() + ")");
    carousel.reload(newOptions);
    return false;
  });
// PROFILE SLIDER
});
  $('#triggerButton').click(function(e){
  e.preventDefault();
  $('#div1').fadeOut('fast', function(){
      $('#div2').fadeIn('slow');
  });
}); $('#triggerButton1').click(function(e){
  e.preventDefault();
  $('#div2').fadeOut('slow', function(){
      $('#div1').fadeIn('slow');
  });
});
anime({
targets: '.loop-alternate-infinity',
translateX: function() {
    return anime.random(-40, 60);
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
targets: '.a',
width:'45%',
direction: 'alternate',
loop: true,
easing: 'easeInOutSine'
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
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}