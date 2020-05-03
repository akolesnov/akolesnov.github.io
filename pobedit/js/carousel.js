$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 4,
		// loop: true,
		nav: true,
		dots: false,
		slideBy: 4,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			},
			700:{
				items:3
			},
			1000:{
				items:4
			}

		},
		loop: true
	});
});

