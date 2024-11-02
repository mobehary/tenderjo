$('.categories .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    rtl: true,
    nav:false,
    responsive:{
        0:{
            items:1,
            margin:10
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$(document).ready(function(){
    $(this).scrollTop(0);
});

$('.niceSelect').niceSelect({});

function preloader_end() {
    $('#loader').fadeOut();
    $('#loader-mask').delay(350).fadeOut('slow');
  };
  window.addEventListener("load", preloader_end);