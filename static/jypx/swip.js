var mySwiper = new Swiper('.swiper-container',{
    pagination: {
      el: '.swiper-pagination',
    },
    loop : true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,}
  })

//教师轮播
  var mySwiper = new Swiper('.swiper-container_teacher',{
    slidesPerView : 4,
    loop:true,
    slidesOffsetBefore : 96,
    spaceBetween : 100,
    autoplay:true,
  })
  
  //学员轮播
  var mySwiper = new Swiper('.swiper-container_student',{
    slidesPerView : 3,
    loop:true,
    slidesOffsetBefore :170,
    spaceBetween : 150,
    autoplay:true,
  })


//真实项目轮播

  var mySwiper = new Swiper('.swiper-container_p8',{
    effect : 'coverflow',
    slidesOffsetBefore : 100,
    loop:true,
    
    slidesPerView:2.2,
    spaceBetween : -100,  
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 40,
      depth: 120,
      modifier: 2,
      slideShadows : false,
    },
    autoplay:true,
  })