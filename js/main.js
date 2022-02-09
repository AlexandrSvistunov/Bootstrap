$(document).ready(function() {

    // ****** Фильтр галереи******

    $('.button[filter]').click(function() {

        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            var filter = $(this).attr('filter'); // Присваиваем переменной filter значение атрибута filter нажатой кнопки

            $('.filter > div[filter=' + filter + ']').show(300); // Показываем элементы с нужным атрибутом

            if ($(this).attr('filter') == 'all') {
                $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

                $(this).attr('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "val" значение "on" 

                $('.filter > div').show(300); // Показываем все элементы
            }

        }

    });

    // *******Меняем цвет кнопки на фокусе*********

    $('.works__menu-button').click(function() {

        $('.works__menu-button').removeClass('focused');
        $(this).addClass('focused');

    });

});