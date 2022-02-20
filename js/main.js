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
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',

        responsive: [{
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }

        ]

    });


    // *******Плавный скролл + меняем цвет активной ссылки********* 

    //Отслеживаем решётку в ссылке
    $('ul.menu a[href^="#"]').click(function() {
        var target = $(this).attr('href'); // Записываем атрибут 'href' у нажатого элемента
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Прокручиваем до нужного 'id' с длительностью 800мс

        $('ul.menu a[href^="#"]').css({ 'color': '#212121' }); // Устанавливаем цвет у всех ссылок меню
        $(this).css({ 'color': '#00897b' }) // Меняем цвет у нажатой ссылки

        return false; // Устраняем переход на другую страницу
    })


    // *******Кнопка наверх********* 

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) // Отслеживаем окно не на самом верху
            $('#toTop').fadeIn(); // Появление кнопки

        else
            $('#toTop').fadeOut(); // Исчезновение кнопки

    });

    $('#toTop').click(function() { // Отслеживаем клик по кнопке "вверх"
        $('html,body').animate({
            scrollTop: 0 // Прокручиваем вверх за 800мс
        }, 800);
    });

    // *******Выпадающее меню*********
    $('.menu-burger').click(function() { // Отслеживаем клик по кнопке бургеру
        $('nav').slideToggle(500); // Вываливаем меню
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column'
        }); // Вертикалим меню

        // Меняем бургер на крестик и обратно
        if ($('.menu-burger').html() == '<img src="img/svg/burger.svg" alt="burger menu">') {
            $(this).html('<img src="img/svg/xmark.svg" alt="burger menu">')
        } else {
            $(this).html('<img src="img/svg/burger.svg" alt="burger menu">')
        }


    });
});