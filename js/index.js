$(".page-scroll").on("click", function (e) {
  e.preventDefault();
  var tujuan = $(this).attr('href')
  var element_tujuan = $(tujuan)
  $('html').animate({
    scrollTop: element_tujuan.offset().top - 60,
  }, 1250, 'easeInOutExpo')
});