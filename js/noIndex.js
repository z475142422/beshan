$(function () {
    $(document).scroll(function (e) {
        var src = $(e.target || e.srcElement);
        if(src.scrollTop()>100){
            $('.beshan-bar-container').stop().slideUp('fast');
        }else if(src.scrollTop() == 0){
            $('.beshan-bar-container').stop().slideDown('fast');
        }
    })
})
