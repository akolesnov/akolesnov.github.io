var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000);
}

function burger(){
	var x = document.getElementById('topmenu');
	var y = document.getElementById('catalog');
	var b = document.getElementById('butNews');
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.marginTop = "37rem";
		b.style.display = "block";
	} else {
		x.style.display = "block";
		y.style.marginTop = "10rem";
		b.style.display = "none";
	}
}
