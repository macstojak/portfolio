
// Open the Modal
function openModal(className) {
  var openMod = document.getElementsByClassName("myModal"+ " " + className)
  openMod[0].style.display = "block";
}

// Close the Modal
function closeModal(className) {
  document.getElementsByClassName("myModal "+ " " + className)[0].style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n, className) {
  showSlides(slideIndex = n, className);
}

function showSlides(n, className) {
  var i;
  var type = className;
  var slides = document.getElementsByClassName("mySlides" +" "+ type);
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
