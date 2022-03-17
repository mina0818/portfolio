$(function(){

  $(".img_box").mouseover(function(){
      $(this).children(".hover_img").addClass('on')
      $(this).addClass("filter")
  })
  $(".img_box").mouseleave(function(){
      $(this).children(".hover_img").removeClass('on')
      $(this).removeClass("filter")
  })


  //이것은 자바?
  /* document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })
 */

  $(document).mousemove(function(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })

  $('.link_box').mouseover(function(){
    gsap.to('.cursor',{
      scale:4,
      backgroundColor:'#efa1ff',
      opacity:.3,
    });
   })
  
   $('.link_box').mouseleave(function(){
    gsap.to('.cursor',{
      scale:1,
      backgroundColor:'#2128bd',
      opacity:1,
    });
  })


$('.link_box').click(function(e){
  e.preventDefault();
})
  


  // gsap.registerPlugin(ScrollTrigger);
  // smoothScroll('body');

  
    /* var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }); */

     /*  $(document).scroll(function() {
        var scrollT = $(this).scrollTop();
        $("main").css({
          "background-position-y": (-scrollT/20)
        })
        $("footer").css({
          "top": (-scrollT/5),
          "bottom": (scrollT/5)
        })
      }); */

      
})//END