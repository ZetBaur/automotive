
$(document).ready(function () {


	// ===========Menu-link color============================================

	$('.promo__menu-link').on('click', function () {
		$('.promo__menu-link').removeClass('active');
		$(this).addClass('active');
	});


	// ====================Checkbox and Radio Buttons Style=========================================================================

	//CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	//RADIO

	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});

	// =======================================Slider=========================================================================================

	$('.gallery__column-slider').slick({
		// dots: true,
		// infinite: false,
		// speed: 300,
		// slidesToShow: 4,
		// slidesToScroll: 4,
		autoplay: true,
		// autoplaySpeed: 2000,
		fade: true,
		// cssEase: 'linear',
		// vertical: true,
		arrows: false,
		// prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		// nextArrow: '<button type="button" class="slick-next">Next</button>',
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}
		// 	// You can unslick at a given breakpoint now by adding:
		// 	// settings: "unslick"
		// 	// instead of a settings object
		// ]
	});

	// =====================SCROLL TO TOP================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	// ================MENU and BURGER=============================================================================

	$('.burger').on('click', function () {
		$('.menu, .burger').toggleClass('open');
	});

	$('.menu-item').on('click', function () {
		if ($('.menu').hasClass('open')) {
			$('.menu, .burger').removeClass('open');
		}
	});

	// ================Form validate=======================================================================

	$("input[name=phone]").mask("+7 (999) 999-99-99");

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				},
				terms: {
					required: true
				}
			},
		});
	}
	validateForms('#commentForm');
});
