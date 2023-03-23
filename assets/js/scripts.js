const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(document).on("scroll", function () {
  let nav = $(".menu-info");
  let scroll = $(window).scrollTop();
  if (scroll >= 10) {
    console.log("scroll");
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
});
