var slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slide");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

window.addEventListener("load", function() {
    showSlide(slideIndex);
  });
