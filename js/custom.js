$(function(){


$(window).on("load",function(){
  $("#preloader").delay(200).fadeOut(500)
})




$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
   if(scrolling > 50){
    $(".menu-bg").addClass("nav-bg")
   }else{
    $(".menu-bg").removeClass("nav-bg")
   }

   if(scrolling > 30){
    $(".back-to-top").fadeIn(500)
   }else{
    $(".back-to-top").fadeOut(500)
   }
})






  $(".back-to-top").click(function(){
    $('html, body').animate({
      scrollTop:0
    }, 1000)
  })



    $('.banner_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:2000,
    arrows:false,
    dots:true
  });

  $('.testi').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed:500,
          arrows:false,
          dots: true
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:true
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:500,
    arrows:false,
    dots:true
        }
      }
    
    ]
  });
      







  new VenoBox({
    selector: ".my-video-links"
});



$('.c-main').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed:500,
  nextArrow:".next",
  prevArrow:".prev",
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        speed:500,
        arrows:false,
        dots:false
      }
    },
    {
      breakpoint: 766.98,
      settings: {
        slidesToShow: 4,
  slidesToScroll: 3,
  speed:500,
  arrows:false,
  dots:false
        
      }
    },
    {
      breakpoint:  575.98,
      settings: {
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed:500,
  arrows:false,
  dots:false
      }
    }
  
  ]
});
    








$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$("#colorful").colorfulTab();  

})



