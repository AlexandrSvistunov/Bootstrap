$(document).ready(function() {

    // ****** Фильтр галереи******

    $('.button[filter="web"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у кнопки "web" атрибуту "val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            $('.filter > div[filter="web"]').show(300); // Показываем нужные элементы
        }
    });

    // То же самое для кнопки design

    $('.button[filter="design"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у кнопки "design" атрибуту "val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            $('.filter > div[filter="design"]').show(300); // Показываем нужные элементы
        }
    });

    // То же самое для кнопки mockups

    $('.button[filter="mockups"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у кнопки "mockups" атрибуту "val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            $('.filter > div[filter="mockups"]').show(300); // Показываем нужные элементы
        }
    });

    // Для кнопки all

    $('.button[filter="all"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off'); // Присваиваем у всех кнопок атрибуту "val" значение "off" 

            $(this).attr('val', 'on'); //Присваиваем у кнопки "all" атрибуту "val" значение "on" 

            $('.filter > div').show(300); // Показываем все элементы
        }
    });



});