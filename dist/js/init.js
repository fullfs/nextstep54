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


    /* Бронирование - begin */
    // Временно. Для разработки
	// for (var i = 50; i >= 0; i--) {
	// 	$('.pick-date__list').append($('.pick-date__item').last().clone());
	// };


    // ==============================
    // Подготавливаем элементы дат для работы с каруселью

    // Количество элементов на 1 слайд
    var slideSize = 12;

    var $list = $('.pick-date__list');
    $('.pick-date__item').each(function() {
        var $el = $(this);
        var $holder = $list.find('.pick-date__item-h').last();
        var $newEl = $('<div class="pick-date__item"></div>');

        if (!$holder.length || $holder.find('.pick-date__item').length === slideSize) {
            $holder = $('<li class="pick-date__item-h"></li>');
            $list.append($holder);
        }

        $newEl.append($el.children());
        $newEl.data($el.data());
        $el.remove();
        $holder.append($newEl);
    });

    $list.addClass('_ready');
    // ==============================





    var $datesCarousel = $('.pick-date__inner');
    $datesCarousel.jcarousel({
        wrap: 'both'
    });

    $('.pick-date__controls-prev').on('click', function() {
        $datesCarousel.jcarousel('scroll', '-=1');
    });

    $('.pick-date__controls-next').on('click', function() {
        $datesCarousel.jcarousel('scroll', '+=1');
    });

	$('.pick-date__item').click(function() {
		var $el = $(this);
		$('.pick-date__item').removeClass('_active');
		$el.addClass('_active');

        $('.reserve-form__hidden._id').val($el.data('id'));
        $('.reserve-form__hidden._date').val($el.data('date'));
	});


    $('.reserve-form__select').select2({
        minimumResultsForSearch: -1
    });
                            
    /* Бронирование - end */

});