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



	for (var i = 50; i >= 0; i--) {
		$('.pick-date__list').append($('.pick-date__item').last().clone());
	};

	$('.pick-date__item').click(function() {
		var $el = $(this);
		$('.pick-date__item').removeClass('_active');
		$el.addClass('_active');

        $.ajax({
            url:"date_time.php",
            type: "POST",
            data: {
            	this_date: $el.data('date'),
            	this_game: $el.data('id')
            },
            cache: false,
            success: function(responce){ 
                $('.reserve-form__time').show().html(responce);
            }
        });
	})


});