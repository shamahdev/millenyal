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

  $('#profile2').bind('click', function () {

    $('#profile2').addClass( "active" );
    $('#profile1').removeClass("active");
    $('#profile3').removeClass("active");

    $('#textbox').fadeOut('fast', function(){
      carousel.next();
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
$("#2014").click(function() { 

  $('#2014').addClass( "active2" );
  $('#2018').removeClass("active2");
  anime({
    targets: roundLogEl,
    innerHTML: [74, 60],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
  anime({
    targets: roundLogE2,
    innerHTML: [33, 24],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
  anime({
    targets: roundLogE3,
    innerHTML: [10, 4.4],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
}); 
$("#2018").click(function() { 
  
  $('#2018').addClass( "active2" );
  $('#2014').removeClass("active2");
  anime({
    targets: roundLogEl,
    innerHTML: [60, 74],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
  anime({
    targets: roundLogE2,
    innerHTML: [24, 33],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
  anime({
    targets: roundLogE3,
    innerHTML: [4, 10],
    easing: 'linear',
    round: 1 // Will round the animated value to 1 decimal
  });
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
//Fade out
$(document).ready(function() {
    
    // /* Every time the window is scrolled ... */
    // $(window).scroll( function(){
    
    //     /* Check the location of each desired element */
    //     $('.hideme').each( function(i){
            
    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
                
    //             $(this).animate({'opacity':'1'},1000);
                    
    //         }
            
    //     }); 
    
    // });
    
});