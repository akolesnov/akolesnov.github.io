$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		nav: false,
		dots: false,
		slideBy: 1,
		responsive:{
			0:{
				items:1
			},
			600: {
				items:2
			},
			700:{
				items:3
			},
			1024:{
				items:4
			}

		},
		autoplay: true,
		autoplayTimeout: 3000
	});
});

