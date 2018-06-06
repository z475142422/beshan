$(function () {
    $('#education-tour-panel').hide();

    var tabTitles   = $('.tab-title');
    var tabContents = $('.tabs-content');
    $('.tabs').click(function (e) {
        var src = $(e.target || e.srcElement);
        if(src.parent()[0].className == "tab-title"){
            $(tabTitles[0]).removeClass('choosen');
            $(tabTitles[1]).removeClass('choosen');
            src.parent().addClass('choosen');
        }
        switch (src[0].id) {
            case 'show-leisure':
            console.log(1)
                $('#education-tour-panel').stop().hide();
                $('#leisure-tour-panel').stop().slideDown('slow');
                break;
            case 'show-education':
            console.log(2)
                $('#leisure-tour-panel').stop().hide();
                $('#education-tour-panel').stop().slideDown('slow');
                break;
            default:
                break;
        }
    })
})
