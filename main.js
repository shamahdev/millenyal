// PROFILE SLIDER
AOS.init();

//Animate
$(document).ready(function(){
  $(window).scroll(function(){

var akhir = $(window).scrollTop()/15 - 214;
var opacity = $(window).scrollTop()/500 -5;      

console.log(opacity);
console.log(akhir);
         
if(akhir <= 3.4){
$('.fader').css("display", "none"); 
 $('.fader').css("opacity", "0");  
 $('.orang').css("margin-left", "3.4rem");    
}
else if(akhir >= 50 ){
 $('.orang').css("margin-left", "50rem");              
}else{          
 $('.orang').css("margin-left", ($(window).scrollTop()/15 - 214)+'rem');  
}
if(akhir >= 3.4){
$('.fader').css("display", "block"); 
 $('.fader').css("opacity", $(window).scrollTop()/500 -6);          
}                
})
});

$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({

  // Config
  autoPlay: 8000,
  separation: 250,
  separationMultiplier: 0.5,
  flankingItems: 3,
  movingToCenter: function () {
  $('#textbox i').empty();
  $('#textbox h2').empty();
  $('#textbox span').empty();
  },
  movedToCenter: function ($item) {
  var caption = $item.data('content');
  var name = $item.data('title');
  var org = $item.data('org');
  $('#textbox i').append("&#x201c;"+caption+"&#x201d;");
  $('#textbox h2').append(name);
  $('#textbox span').append(org);
  }
  });

  

  $(document).ready(function() {
    $("#carousel2").waterwheelCarousel({
      
    horizon: 110,
    horizonOffset: -30,
    horizonOffsetMultiplier: .7,
    separation: 150,
    edgeFadeEnabled: true
    });
  });
  //profile slider indicators
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

function randomValues() {
anime({
targets: '.loop-alternate-infinity',
translateX: function() {
    return anime.random(-15,15);
  },
translateY: function() {
    return anime.random(-15, 15);
  },
speed: 200,
duration: 1000,
easing: 'easeInOutSine',
complete: randomValues
});
}
randomValues();

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

  $('#2014').addClass( "active" );
  $('#2014line').addClass( "active" );
  $('#2018').removeClass("active");
  $('#2018line').removeClass("active");
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
  
  $('#2018').addClass( "active" );
  $('#2018line').addClass( "active" );
  $('#2014').removeClass("active");
  $('#2014line').removeClass("active");
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
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
              $(this).animate({'opacity':'1'},1000);
                    
            }
            
       }); 
    
     });
    
});
//Svg Morph
const kedua=
"M1366,878c0,0-180-9-321-57C575.9,661.3,487.8,658,342,658C119,658,0,768,0,768V0h1366V878z";
const pertama=
"M1366,878c0,0-180-9-321-57C575.9,661.3,487.8,658,342,658C119,658,0,768,0,768V0h1366V878z";


const coba = document.querySelector('#tes');
const coba1=document.querySelector('#tes2');
let toggle = false;

coba.addEventListener('click', () =>{
  
    const timeline = anime.timeline({
duration:2000,
easing : "easeOutExpo"

    });
    timeline.add({
        targets:".pertama",
      
        d: [
            {value:kedua}
        ]
 
    })
   add({
      targets:".gradi",
    
      stop: [ ["30", "rgba(68,195,255,1)"], ["40", "rgba(34,68,171,1)"] ]

  })
});
coba1.addEventListener('click', () =>{
  const timeline = anime.timeline({
duration:2000,
easing : "easeOutExpo"

  });
  timeline.add({
      targets:".pertama",
    
});
const kedua=
"M1366,800c0,0-103.9,9.5-246.7-38C852,673,610,581,330,581C106,581,0,690,0,690V-32h1366V800z";
const pertama=
"M1366,713c0,0-90.2-110-386.6-110C801.8,603,469,723,212.6,791.6C61.7,832.1,0,821,0,821V0h1366V713z";

const coba = document.querySelector('#tes');
const coba1=document.querySelector('#tes2');
let toggle = false;

coba.addEventListener('click', () =>{
  
    const timeline = anime.timeline({
duration:2000,
easing : "easeOutExpo"

    });
    timeline.add({
        targets:".pertama",
      
        d: [
            {value:kedua}
        ]
 
    })
});
coba1.addEventListener('click', () =>{
  const timeline = anime.timeline({
duration:2000,
easing : "easeOutExpo"

  });
  timeline.add({
      targets:".pertama",
    

      d: [
          {value:pertama}
      ]

  })
});
})
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Millenial')
    .pauseFor(2500)
    .deleteAll()
    .start();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("vidPlay");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  $("#fade").modal({
    fadeDuration: 100
  });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(function () {
  var $element = document.getElementById(".none");
  function fadeInOut () {
      $element.fadeIn(1000, function () {
          $element.fadeOut(1500, function () {
              $element.fadeIn(1500, function () {
                  setTimeout(fadeInOut, 500);
              });
          });
      });
  }

  fadeInOut();
});
$('body').css('min-height', screen.height);