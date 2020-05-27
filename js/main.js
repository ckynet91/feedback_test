$(document).ready(function() {

	//Функция проверяет заполнено ли поле с телефоном
	function formValide() {
		let str = $('#contact_form input[name=tel]').val();
		str = jQuery.trim(str);
		if(str.length < 5){
			alert ('Введите телефон');
			return false;
		}
		return true;
	} //end formValide

	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
	$('#button').click(function() {
		if (formValide()) {

			//если форма прошла проверку, выводим блок с текстом ожидания
			$('#contact_form').before('<h3 id="contact_form_info">Оформление заявки. Подождите...</h3>');
			$('#contact_form').hide();
			//берем путь php обработчика
			order_url = $('#contact_form').attr('action');
            form_data = $(this).closest('form').serialize();
			//посылаем асинхронный запрос на сервер и передаем все данные формы
			$.post(order_url, form_data, function(data) {
					//выводим возврашаемый сервером код html вместо содержимого формы
				$('#contact_form').html(data);
				$('#contact_form').show();
				$('#contact_form_info').remove();
			}, "html");
		}
		return false;
	});
	//фкнкция вызова формы обратной связи
	$('#callback').click(function(){
		//появление окна обратной связи
		$('#feedback').fadeIn();
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#feedback').outerWidth()/-2;
        q_height = $('#feedback').outerHeight()/-2;
        $('#feedback').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});
	//функция закрытия окна
	$('#feedback_close').click(function(){
		$('#fade').remove();
		$(this).parents('#feedback').fadeOut();
		return false;
		});
});