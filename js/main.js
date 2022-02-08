$(document).ready(function() {

    // ****** Фильтр галереи******

    $('.button[filter]').click(function() {
        if ($(this).attr('filter') == 'all') {
            if ($(this).attr('val') == 'off') {
                $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

                $(this).attr('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "val" значение "on" 

                $('.filter > div').show(300); // Показываем все элементы

            }

        } else

        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            var filter = $(this).attr('filter');

            $('.filter > div[filter=' + filter + ']').show(300); // Показываем нужные элементы
        }

    });

});