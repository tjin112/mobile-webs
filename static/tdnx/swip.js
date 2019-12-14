// teachers swiper
var mySwiper = new Swiper(".swiper-container_teacher", {
  slidesPerView: 3,
  slidesOffsetBefore: -20,
  spaceBetween: 10,
  autoplay: true
});

var myNav = new Swiper("#nav", {
  slidesOffsetBefore: 10,
  spaceBetween: 5,
  slidesPerView: 5,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  on: {
    tap: function() {
      myPage.slideTo(myNav.clickedIndex);
    }
  }
});
var myPage = new Swiper("#page", {
  on: {
    slideChangeTransitionStart: function() {
      updateNavPosition();
    }
  }
});
function updateNavPosition() {
  $("#nav .active-nav").removeClass("active-nav");
  var activeNav = $("#nav .swiper-slide")
    .eq(myPage.activeIndex)
    .addClass("active-nav");
  console.log(activeNav.index());
  if (!activeNav.hasClass("swiper-slide-visible")) {
    console.log(1);
    if (activeNav.index() > myNav.activeIndex) {
      var thumbsPerNav = Math.floor(myNav.width / activeNav.width()) - 1;
      myNav.slideTo(activeNav.index() - thumbsPerNav);
    } else {
      console.log(3);
      myNav.slideTo(activeNav.index());
    }
  }
  var small = $(".h").height();
  console.log(small);
  if (activeNav.index() == 6) {
    //    small.style.height = "5"+"rem"; //设定定高
    $(".p2").height(6 + "rem");
  } else {
    $(".p2").height(4.4 + "rem");
  }
}
