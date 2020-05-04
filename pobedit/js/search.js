	function myFunction() {
		var x = document.getElementById("search-b");
		var y = document.getElementById("search");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
		x.style.display = "block";
		y.focus();
		}
	}

	
	function redirect(){
		if (window.location.href === 'search.html'){
			location.reload()
		}
		else {window.location.href = 'search.html'}
	}

	document.getElementById('submit').onclick  = function(){
		let element = document.getElementById('search').value;
		element = element.toUpperCase();
		localStorage.setItem('value', element);
		redirect();
	};