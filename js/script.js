$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: ["<img src='/assets/icons/fi_chevron-left.svg'>", "<img src='/assets/icons/fi_chevron-right.svg'>"],
    dots: false,
    stagePadding: 30,
    center: true,
    loop: true,
    margin: 16,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2.1,
      },
    },
  });
});
