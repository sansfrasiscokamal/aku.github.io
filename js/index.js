// event pada link diklik
$('.page-scroll').on('click', function(e){
  
e.preventDefault()
console.log('oy')
// ambil  isi href
var tujuan = $(this).attr('href');
// tangkap element yang bersangkutan
//var elemenTujuan = $(tujuan);
// pindahkan scroll
$('body').scrollTop(0)
console.log($('body').scrollTop());
//$('body').animate({
  //scrollTop: elemenTujuan.offset().top
//});
 
e.preventDefault();
  
  
});
 
