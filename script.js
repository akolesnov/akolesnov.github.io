function myFunc() {
  alert("Очень скоро все наладится");
}
function myFunction(y){
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
		y.classList.toggle("change");
}


function burger(){
	var x = document.document.getElementById('topmenu');
	
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}