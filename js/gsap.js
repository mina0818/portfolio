$(function(){

  //오프닝

  //오프닝
  $('.opening').each(function(index,item){

    gsap.fromTo(item,{
      height:'100%',
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",
        //markers:true,
      },
      height:0,
      duration:1,
      delay:2.3,
    })

  })


    $('.img_box').each(function(index,item){

        if($(this).data('y')){
          yVal = $(this).data('y');
        }else{
          yVal = 20
        }
      
        gsap.fromTo(item,{
          opacity:0,
          yPercent:yVal,
        },{
          scrollTrigger:{
            trigger:item,
            start:"top 90%",
            // markers:true,
          },
          opacity:1,
          yPercent:0,
          duration:1,
        })
      })
    /* $('.hover_img').each(function(index,item){

        if($(this).data('y')){
          yVal = $(this).data('y');
        }else{
          yVal = 20
        }
      
        gsap.fromTo(item,{
          opacity:0,
          yPercent:yVal,
        },{
          scrollTrigger:{
            trigger:item,
            start:"top 90%",
            markers:true,
          },
          opacity:1,
          yPercent:0,
          duration:1,
        })
      }) */

    $('.cont_box').each(function(index,item){

        if($(this).data('y')){
          yVal = $(this).data('y');
        }else{
          yVal = 20
        }
      
        gsap.fromTo(item,{
          opacity:0,
          yPercent:yVal,
        },{
          scrollTrigger:{
            trigger:item,
            start:"top 90%",
            // markers:true,
          },
          opacity:1,
          yPercent:0,
          duration:1,
        })
      })

      gsap.to(".sc_wrap1 .img_box > img",{
        scrollTrigger:{
          trigger:".sc_wrap1",
          // strat:"top top",
          strat:"top 80%",
          end:"bottom top",
          scrub:0.3,
          // markers:true,
        },
        yPercent:-17,
        ease: "none",
      })
      gsap.to(".sc_wrap2 .img_box > img",{
        scrollTrigger:{
          trigger:".sc_wrap2",
          // strat:"top top",
          strat:"top 80%",
          end:"bottom top",
          scrub:0.3,
          // markers:true,
        },
        yPercent:-17,
        ease: "none",
      })
      gsap.to(".sc_wrap3 .img_box > img",{
        scrollTrigger:{
          trigger:".sc_wrap3",
          // strat:"top top",
          strat:"top 80%",
          end:"bottom top",
          scrub:0.3,
          // markers:true,
        },
        yPercent:-17,
        ease: "none",
      })

      $('.up').each(function(index,item){

        gsap.fromTo(item,{
          yPercent:100,
        },{
          scrollTrigger:{
            trigger:item,
            start:"top 100%",
            // markers:true,
          },
          opacity:1,
          yPercent:0,
          duration:1,
          delay:2.4,
        })
      })

      gsap.fromTo('footer .wrap',{
        yPercent:-110,
      },{
        scrollTrigger:{
          trigger:'footer',
          start:"0% 100%",
          end:"50% 0%",
        //  markers:true,
         scrub:0.1,
        },
        yPercent:-50,
        duration:1,
      })

})//END