$(function() {
    var btn = $('.nav-tab-list__btn');
    var tabContItem = $('.tab-cont__item');

    btn.click(function() {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    $('.tabs button').click(function() {
        var getId = this.id;
        var getCurrent = $('.tab-cont .' + getId);

        tabContItem.not(getCurrent).hide(500);
        getCurrent.show(500);
    });

    $('#showall').click(function() {
        tabContItem.show(500);
    });

    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });

    $('.portfolio-slider').slick({
        dots: true,
        appendArrows: '.portfolio-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

    $('.about-wrap-slider').slick({
        arrows: false,
        dots: true,
    });

});