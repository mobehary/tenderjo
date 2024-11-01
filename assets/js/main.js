$('.categories .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    rtl: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// $(document).ready(function(){
//     $(this).scrollTop(0);
// });

function preloader_end() {
    $('#loader').fadeOut();
    $('#loader-mask').delay(350).fadeOut('slow');
  };
  window.addEventListener("load", preloader_end);