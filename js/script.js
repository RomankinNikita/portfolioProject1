$(function() {
    var btn = $('.nav-tab-list__btn');
    var item = $('.nav-tab-list__item');
    var tab = $('.tab-cont__item');
    var serg = $('.serega');
    var sergText = $('.serega__text');

    btn.click(function() {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        if ($(this).hasClass('graphic')) {
            tab.hide();
            $('[id *= tab_1]').show();
        } else if ($(this).hasClass('web')) {
            tab.hide();
            $('[id *= tab_2]').show();
        } else if ($(this).hasClass('brand')) {
            tab.hide();
            $('[id *= tab_3]').show();
        } else if ($(this).hasClass('video')) {
            tab.hide();
            $('[id *= tab_4]').show();
        } else if ($(this).hasClass('photo')) {
            tab.hide();
            $('[id *= tab_5]').show();
        } else {
            tab.show();
        }
    });

    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });
});