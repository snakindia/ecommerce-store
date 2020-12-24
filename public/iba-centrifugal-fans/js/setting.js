// Search Panel
$(document).ready(function(){
   $('.panelList').focus(function(){
       $('.results').show();
   }).focusout(function(){
       $('.results').fadeOut();
   });
});


// Like button
$(document).ready(function(){
  
    $('.like-button').click(function(){
        $(this).toggleClass('is-active');
    })
  
})

$(document).ready(function(){
  
    $('.compare-link').click(function(){
        $(this).toggleClass('link-active');
    })
  
})

//Compare popupform bottom js
$(function(){
  $(".bottom_menu").click(function(){
    $("#about_popup").slideDown();
    //$('#about_popup').slideDown(1000).delay(7000).slideUp(1000);  
  });
});

//-----JS for Auto popup on page load-----
$(window).on('load', function() {
   //Fade in delay for the background overlay (control timing here)
  $("#bkgOverlay").delay(4800).fadeIn(400);
  //Fade in delay for the popup (control timing here)
  $("#delayedPopup").delay(5000).fadeIn(400);
  
  //Hide dialouge and background when the user clicks the close button
  $("#btnClose").click(function (e)
  {
    HideDialog();
    e.preventDefault();
  });
});
//Controls how the modal popup is closed with the close button
function HideDialog()
{
  $("#bkgOverlay").fadeOut(400);
  $("#delayedPopup").fadeOut(300);
}
//-----JS for Price Range slider-----

$(function() {
  $("#price-range").slider({range: true, min: 0, max: 1000, values: [0, 1000], slide: function(event, ui) 
    {$("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);}
  });
  
});

//-----//JS for Price Range slider-----

$('.fader').hover(function() {
    $(this).find("img:last").fadeToggle();
});


$(function(){
    $("#tabs li a").click(function(){
        $(".newscontainer").hide();
        $(".default-data").hide();
        var myDiv = $(this).attr("href");
        $(myDiv).show();
    });
});
//===========Increase/Descrease input============*/
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


function increaseValueModal() {
  var value = parseInt(document.getElementById('number_modal').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number_modal').value = value;
}

function decreaseValueModal() {
  var value = parseInt(document.getElementById('number_modal').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number_modal').value = value;
}



// Prevents menu from closing when clicked inside 
$(".megaMenuItem").on('click', function(event) {  
    event.stopPropagation(); 
});

// Prevents menu from closing when clicked outside 
$('#megaMenu').click( function(e) {
      e.stopPropagation(); 
  });
  $('body').click( function() {
      $('.megaMenuItem').hide(); 
});  

$('.wstabitem li').on('click', function(){
    $(this).addClass('wsshoplink-active').siblings().removeClass('wsshoplink-active');
    
});


$(function(){
  $('.showSingle').click(function(){
        $('.targetDiv').hide();
        $('#div'+$(this).attr('target')).show();
  });
});


//======Login popup=========//
$(document).ready(function(){
  $("#cartOpen").click(function(){
    $(".cart-box").slideToggle();
     $(".logIn").slideUp();
     $(".country").slideUp();
     $(".seachbox").slideUp();  
  });
});

$(document).ready(function(){
  $("#StayOpen").click(function(){
    $("#theBox_2").slideToggle();
     $(".country").slideUp();
     $(".seachbox").slideUp();
     $(".cart-box").slideUp(); 
  });
});


$(document).ready(function(){
  $("#CountryOpen").click(function(){
    $("#theBox_country").slideToggle();
     $(".logIn").slideUp();
     $(".seachbox").slideUp();
     $(".cart-box").slideUp();  
  });
});



$(document).ready(function(){
  $("#SearchOpen").click(function(){
    $(".seachbox").slideToggle();
     $(".logIn").slideUp();
     $(".country").slideUp();
     $(".cart-box").slideUp();   
  });
});
// ==================Hover Function===========================
// $('#theBox_2').click( function(e) {
//         e.stopPropagation(); 
//     });
//     $('body').click( function() {
//         $('#theBox_2').hide(); 
// });

// $('#theBox_country').click( function(e) {
//         e.stopPropagation(); 
//     });
//     $('body').click( function() {
//         $('#theBox_country').hide(); 
// });

// $('#searh_Box').click( function(e) {
//       e.stopPropagation(); 
//   });
//   $('body').click( function() {
//       $('#searh_Box').hide(); 
//   });



//   $(document).ready(function(){
//   $("#StayOpen").hover(function(){
//     $("#theBox_2").slideDown();
//      $(".country").slideUp();
//      $(".seachbox").slideUp();   
//   });
// });



// $(document).ready(function(){
//   $("#CountryOpen").hover(function(){
//     $("#theBox_country").slideDown();
//      $(".logIn").slideUp();
//      $(".seachbox").slideUp();  
//   });
// });

// $(document).ready(function(){
//   $("#SearchOpen").hover(function(){
//     $(".seachbox").slideDown();
//      $(".logIn").slideUp();
//      $(".country").slideUp();   
//   });
// });
// ==================Hover Function===========================

//=====Sticy Header Js======

$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 200) {
    $('.bottom-navigation').addClass('bott-nav-fixed');

  }
  if ($(window).scrollTop() < 201) {
    $('.bottom-navigation').removeClass('bott-nav-fixed');
  }
});



$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 200) {
    $('.free-signup').addClass('signup-fixed');
  }
  if ($(window).scrollTop() < 201) {
    $('.free-signup').removeClass('signup-fixed');
  }
});

  $(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.top-header').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.top-header').removeClass('navbar-fixed');
  }
});


  $(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 200) {
    $('.form-outer').addClass('broucher-fixed');
  }
  if ($(window).scrollTop() < 201) {
    $('.form-outer').removeClass('broucher-fixed');
  }
});


// $(window).scroll(function () {
//   console.log($(window).scrollTop())
//   if ($(window).scrollTop() > 63) {
//     $('.topbar').addClass('header-fixed');
//   }
//   if ($(window).scrollTop() < 64) {
//     $('.topbar').removeClass('header-fixed');
//   }
// });



  $(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 350) {
    $('.tab-menu').addClass('menu-fixed');
  }
  if ($(window).scrollTop() < 351) {
    $('.tab-menu').removeClass('menu-fixed');
  }
});


$(".wstabitem li a").click( function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value=$(this).attr('data-src');
    $(".image-holder img").attr("src", value);
});


//=====Login Modal Js======
$(document).ready(function(){
$("#myModal").modal({
show:false,
backdrop:'static'
});
});

//=====Scroll Bottom to Top Js======
  
$(document).ready(function () {
  $(window).scroll(function () {
    if($(this).scrollTop() > 100){
      $('#backToTop').fadeIn();
    }else{
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function (){
    $("html, body").animate({
      scrollTop:0
    }, 600);
    return false;
  })
});

//=====Mobile Accordion Js======
$(document).ready(function () {
$('#horizontalTab').easyResponsiveTabs({
type: 'default', //Types: default, vertical, accordion           
width: 'auto', //auto or any width like 600px
fit: true,   // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
activate: function(event) { // Callback function if tab is switched
var $tab = $(this);
var $info = $('#tabInfo');
var $name = $('span', $info);
$name.text($tab.text());
$info.show();
}
});
});

//=====Slick Slider setting Js======

$(document).ready(function(){

$('.regular').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});


$(document).ready(function(){
$('.productitem').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

$(document).ready(function(){
$('.productitem-auto').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: true,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

$(document).ready(function(){

$('.bhaClient').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: true,
autoplaySpeed: 2000,
slidesToShow: 6,
slidesToScroll: 6,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

$(document).ready(function(){
$('.productItem').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: true,
autoplaySpeed: 2000,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

$(document).ready(function(){
$('.product-items').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

$(document).ready(function(){
$('.product-items-xs').slick({
dots: true,
infinite: false,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});


// News and Events grid js====
$(document).ready(function(){
$('.newEventslider').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});

// News and Events grid js====
$(document).ready(function(){
$('.product-items-xx').slick({
dots: true,
infinite: true,
spee: 800,
autoplay: false,
autoplaySpeed: 2000,
slidesToShow: 5,
slidesToScroll: 5,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});
// Slick slider tab setting js======

// Fix slick slider using multitabs
// $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
//      e.target
//      e.relatedTarget
//      $('.slider').slick('setPosition', 0);
//  });

// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
// 	$('.slider').slick('setPosition', 0);
//   $('.slider').slick('setPosition');
// })


$('a[data-toggle="tab"]').on('tab', function() {   
  $($(this).attr('href')).find('.slider').slick({
    dots: true,
    arrows: true
  })
}).first().trigger('shown.bs.tab');



// Sign In & Sign Up
var containerSignIn = $('.container-login'),
containerSignUp = $('.container-signup'),
showSignIn = true,
showSignUp = false;

function changeContainer(){
	if(showSignIn == true){
		containerSignIn.css('display', 'block')
	} else {
		containerSignIn.css('display', 'none')
	}

	if(showSignUp == true){
		containerSignUp.css('display', 'block')
	} else {
		containerSignUp.css('display', 'none')
	}
}

$('#show-signup').on('click', function(){ 
	showSignUp = true;
	showSignIn = false;
	changeContainer();
})

$('#show-signin').on('click', function(){ 
	showSignUp = false;
	showSignIn = true;
	changeContainer();
})

changeContainer();


//Sticky Navbar js
function sticky_relocate() {
      var window_top = $(window).scrollTop() ;
      var footer_top = $(".footerItems").offset().top -600;
      var div_top = $('#sticky-anchor').offset().top -125;
      var div_height = $(".sidebar").height();
      var div_height = $(".sidebar-lft").height();
      //var div_height = $(".featured-product").height();
      var div_height = $(".feature-sticky").height();
      
      var leftHeight = $('.left-content').height(); 

      if (window_top + div_height > footer_top){
          $('.sidebar').removeClass('stick');
          $('.sidebar').addClass('abs');

          $('.sidebar-lft').removeClass('stick-lft');
          $('.sidebar-lft').addClass('abs-lft');
         
          $('.right-content').css('min-height', leftHeight + 'px');
        }
      else if (window_top > div_top) {
          $('.sidebar').addClass('stick');
          $('.sidebar').removeClass('abs');

           $('.sidebar-lft').addClass('stick-lft');
          $('.sidebar-lft').removeClass('abs-lft');
          
      } else {
          $('.sidebar').removeClass('stick');
          $('.sidebar').removeClass('abs');
          $('.sidebar-lft').removeClass('stick-lft');
          $('.sidebar-lft').removeClass('abs-lft');
         
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

