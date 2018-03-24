/*----------------Manual Slideshow Start----------------*/
/*JS code*/
var sliderIndex = 1;
//設定預設值 Slider起始圖片
function setSlider(){
  showSliders(sliderIndex);
}
//slider image index
function plusSlider(n) {
  showSliders(sliderIndex += n);
}
//dot index
function currentSlider(n) {
  showSliders(sliderIndex = n);
}
//判斷式
function showSliders(n) {
  var i;
  var slides = document.getElementsByClassName("manual-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {sliderIndex = 1}//超過圖片數量 指回起始位置    
  if (n < 1) {sliderIndex = slides.length}//少於圖片數輛 指向最尾端 
  for (i = 0; i < slides.length; i++) { //全部圖片不顯示
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//全部dot不顯示
  }
  slides[sliderIndex-1].style.display = "block"; //顯示指定圖片
  dots[sliderIndex-1].className += " active";//顯示指定dot
}

/*----------------Manual Slideshow End----------------*/

/*----------------Automatic Slideshow Start----------------*/
/*JS code*/
var autoIndex = 1;
autoSliders();

function autoSliders() {
    var i;
    var x = document.getElementsByClassName("auto-slider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    if (autoIndex > x.length) {autoIndex = 1}    
    x[autoIndex-1].style.display = "block";  
    autoIndex++;
    setTimeout(autoSliders, 5000); // Change image every 5 seconds
}
/*----------------Automatic Slideshow End----------------*/

/*----------------Automatic and Manual Slideshow(jQuery) start----------------*/
/*jQuery code*/
$(document).ready(function(){
  /*設定取得DOM*/
  var HeaderCarousel = $('.slideshow3-container .slideshow3-slider');
  /*自動換圖時間*/
  setInterval(function () {
    moveRight();
  }, 6000);
  /*取得li(圖片)數量*/
  var slideCount = $('.slideshow3-container .slideshow3-slider ul li').length;
  /*取得li(圖片)寬*/
  var slideWidth = $('.slideshow3-container .slideshow3-slider ul li').width();
  /*取得li(圖片)高*/
  var slideHeight = $('.slideshow3-container .slideshow3-slider ul li').height();
  /*取得總寬度*/
  var sliderUlWidth = slideCount * slideWidth;
 /*設定寬高 class="slideshow3-slider"*/
  $('.slideshow3-container .slideshow3-slider').css({ width: slideWidth, height: slideHeight });
/*設定寬 ul為總寬度-> 才有足夠空間讓圖片轉換  marginLeft->"-"一張圖寬度，所以現在顯示第二張圖 注意:要寫prependTo這樣才能顯示第一張圖*/
  $('.slideshow3-container .slideshow3-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
/*將ul li:last-child 最後一個元素 插入第一個位置-->這樣才能顯示第一張圖*/
$('.slideshow3-container .slideshow3-slider ul li:last-child').prependTo('.slideshow3-container .slideshow3-slider ul'); 
/*moveLeft 轉換圖片動畫*/
  function moveLeft() {
    $('.slideshow3-container .slideshow3-slider ul').animate({
      left: + slideWidth
    }, 500, function () {
    $('.slideshow3-container .slideshow3-slider ul li:last-child').prependTo('.slideshow3-container .slideshow3-slider ul');
    $('.slideshow3-container .slideshow3-slider ul').css('left', '');
    });
  };
/*moveRight 轉換圖片動畫*/
  function moveRight() {
    $('.slideshow3-container .slideshow3-slider ul').animate({
    left: - slideWidth
  }, 500, function () {
    $('.slideshow3-container .slideshow3-slider ul li:first-child').appendTo('.slideshow3-container .slideshow3-slider ul');
    $('.slideshow3-container .slideshow3-slider ul').css('left', '');
  });
  };
  /*moveRight取得Button DOM*/
  $('.Carousel-slider-prev').click(function () {
    moveLeft();
  });
/*moveRight取得Button DOM */
  $('.Carousel-slider-next').click(function () {
    moveRight();
  });
});
/*----------------Automatic and Manual Slideshow(jQuery) end----------------*/