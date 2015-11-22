// Это типа document ready
$(function() {

	var setHeaderIndent = function () {
		var $header = $('.header');
		if ($(window).scrollTop() > 70) {
			$header.css('top', 0);
		} else {
			$header.css('top', 70);
		}
	};

	$(window).scroll(setHeaderIndent);
	setHeaderIndent();
});