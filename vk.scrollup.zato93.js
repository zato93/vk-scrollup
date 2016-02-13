(function() {
	var up='Наверх';
	$('body').append('<div class="go-up" style="display:none"><div class="up"><span class="glyphicon glyphicon-triangle-top"></span> <b>'+up+'</b></div><div class="down" style="display:none"><span class="glyphicon glyphicon-triangle-bottom"></span></div><style>.go-up{position: fixed;width: 120px;background-color: white;opacity: 0.2;left: 0;top:0;height: 100%;cursor: pointer;padding: 10px 15px;}.go-up:hover{opacity: 0.5;}</style></div>');
	var $el = $('.go-up'),
		
		lastTop = 0,
		status = 0,
		w = $(window);
	w.on('scroll', function(data) {
		if (w.scrollTop() > 0) {
			scrollTrigger(1);
		} else {
			if (lastTop) {
				scrollTrigger(2);
			} else {
				scrollTrigger(0);
			}
		}
	});
	$el.on('click', function(data) {
		if (status == 1) {
			lastTop = w.scrollTop();
			w.scrollTop(200);
			$('body').animate({
				scrollTop: 0
			}, 100);
		} else {
			w.scrollTop(lastTop);
			scrollTrigger(1);
		}

	});
	var scrollTrigger = function(a) {
		if (!a) {
			$el.hide();
		} else {
			$el.show();
			if (a == 1) {
				$('.go-up .up').show();
				$('.go-up .down').hide();
			} else if (a == 2) {
				$('.go-up .up').hide();
				$('.go-up .down').show();
			}
		}
		status = a;
	};
})();