$(document).ready(function() {

    // ****** Фильтр галереи******

    $('.button[data-filter]').click(function() {

        if ($(this).data('val') == 'off') {
            $('.button[data-filter]').data('val', 'off'); // Присваиваем у всех кнопок атрибуту "data-val" значение "off" 

            $(this).data('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "data-val" значение "on" 

            $('.filter > div').hide(300); // Скрываем все элементы

            var filter = $(this).data('filter'); // Присваиваем переменной filter значение атрибута data-filter нажатой кнопки

            $('.filter > div[data-filter=' + filter + ']').show(300); // Показываем элементы с нужным атрибутом

            if ($(this).data('filter') == 'all') {
                $('.button[data-filter]').data('val', 'off'); // Присваиваем у всех кнопок атрибуту "data-val" значение "off" 

                $(this).data('val', 'on'); //Присваиваем у нажатой кнопки атрибуту "data-val" значение "on" 

                $('.filter > div').show(300); // Показываем все элементы
            }

        }

    });

    // *******Меняем цвет кнопки на фокусе*********

    $('.works__menu-button').click(function() {

        $('.works__menu-button').removeClass('focused');
        $(this).addClass('focused');

    });


    // *******Слайдер Slick********* 
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
    });

});