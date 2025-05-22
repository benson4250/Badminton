/*

    Sellix.me
    ------------
    Version 0.2.24

*/

$('.faq__card').click(function() {
    $(this).parent().find('.faq__card__content').slideToggle()
});