$(document).ready(function () {
 
    $('.portfolio_images a').click(function (event) {
        $(this).next('div').css({
            display: 'block'
        });
        event.preventDefault();
    });
 
    $('.portfolio_images a.close').click(function (event) {
        $('div.pop').css({
            display: 'none'
        });
        event.preventDefault();
    });
 
});