$(function () {
    // 顶部弹窗
    var search  = $('.searchpop');
    var contact = $('.contact-popout')
    $(document).click(function (e) {
        var src = e.target || e.srcElement;
        if(src.className == "nav-search"){
            search.fadeIn('fast');
            contact.hide();
        }else if(src.className == "nav-contact-us"){
            contact.fadeIn();
            search.hide();
        }else if($(src).hasClass('dontGetOut')){
            return 0;
        }else{
            search.hide();
            contact.hide();
        }
    })
    // navlogo随滚轮效果
    var logo = $('.title-area');
    $(document).scroll(function (e) {
        var src = $(e.target || e.srcElement);
        if(src.scrollTop()>100){
            logo.stop().animate({
                top:"-164px"
            });
        }else if(src.scrollTop() == 0){
            logo.stop().animate({
                top:"0px"
            });
        }
    })

    logo.mouseover(function () {
        logo.stop().animate({
                top:"0px"
        });
    })
    // 下拉菜单
    $('.alter-subnav').mouseover(function (e) {
        var src = $(e.target || e.srcElement);
        src.parent().parent().find('ul').hide();
        src.next().show();
        $('.secondry-nav').mouseleave(function () {
            src.parent().parent().find('ul').hide();
        })
    })
    // 更多
    addressDown = $('.address-Down');
    addressList = $('.beshan-address');
    addressDown.click(function () {
        addressList.stop().slideToggle();
        if(addressDown.text() == "打开更多 +"){
            addressDown.html('收起 <span class="f_bold">-</span>');
        }else{
            addressDown.html('打开更多 <span class="f_bold">+</span>');
        }
    })

    var countryArr =
    ['中国','阿富汗','孟加拉国','不丹','缅甸','柬埔寨'
    ,'香港','台湾','澳门','印度','印度尼西亚','日本'
    ,'老挝','马来西亚','马尔代夫','蒙古','尼泊尔','朝鲜'
    ,'巴基斯坦','菲律宾共和国','新加坡','韩国','斯里兰卡'
    ,'泰国','土耳其','越南','巴勒斯坦','锡金','阿尔巴尼亚'
    ,'奥地利','比利时','保加利亚','克罗地亚','塞浦路斯'
    ,'丹麦','芬兰','法国','德国','希腊','匈牙利','冰岛'
    ,'爱尔兰','意大利','列支敦士登','卢森堡','马其顿'
    ,'马耳他','摩纳哥','荷兰','挪威','波兰','葡萄牙'
    ,'罗马尼亚','俄罗斯','圣马利诺','斯洛文尼亚','西班牙'
    ,'瑞典','瑞士','联合王国','澳大利亚','斐济','基里巴斯'
    ,'瑙鲁','新西兰','所罗门群岛','汤加','瓦努阿图','西萨摩亚'
    ,'安圭拉岛','安提瓜岛','阿根廷','巴哈马','巴巴多斯岛'
    ,'伯利兹','百慕大群岛','玻利维亚','巴西','加拿大','智利'
    ,'哥伦比亚','哥斯达黎加','古巴','多米尼加','厄瓜多尔'
    ,'萨尔瓦多','格陵兰','格林纳达','瓜德罗普岛','危地马拉'
    ,'圭亚那','海地','洪都拉斯','牙买加','墨西哥','尼加拉瓜'
    ,'巴拿马','巴拉圭','秘鲁','波多黎各岛','圣卢西亚岛'
    ,'苏里南','美国','乌拉圭','委内瑞拉','阿尔及利亚','安哥拉'
    ,'贝宁','博茨瓦纳','布隆迪','喀麦隆','乍得','刚果共和国'
    ,'吉布提共和国','埃及','赤道几内亚','厄立特里亚','埃塞俄比亚'
    ,'加蓬','冈比亚','加纳','几内亚','肯尼亚','莱索托','利比里亚'
    ,'利比亚','马达加斯加','马拉维','马里','毛里求斯','摩洛哥'
    ,'莫桑比克','纳米比亚','尼日尔','尼日利亚','留尼旺岛'
    ,'刚果民主共和国','卢旺达','塞内加尔','塞舌尔','塞拉里昂'
    ,'索马里','南非','苏丹','斯威士兰','坦桑尼亚','多哥','突尼斯'
    ,'乌干达','西撒哈拉','赞比亚','津巴布韦'];

    var countryValue =
    ["China","Afghanistan","Bangladesh","Bhutan","Myanmar","Cambodia"
    ,"Hong Kong","Taiwan","Macau","India","Indonesia","Japan"
    ,"Lao People's Democratic Republic","Malaysia","Maldives","Mongolia"
    ,"Nepal","Korea, Democratic People's Republic of","Pakistan"
    ,"Philippines","Singapore","Republic of Korea","Sri Lanka"
    ,"Thailand","Turkey","Viet Nam","Occupied Palestinian Territory"
    ,"Sikkim","Albania","Austria","Belgium","Bulgaria","Croatia",
    "Cyprus","Denmark","Finland","France","Germany","Greece","Hungary"
    ,"Iceland","Ireland","Italy","Liechtenstein","Luxembourg"
    ,"The Former Yugoslav Republic of Macedonia","Malta","Monaco"
    ,"Netherlands","Norway","Poland","Portugal","Romania"
    ,"Russian Federation","San Marino","Slovenia","Spain","Sweden"
    ,"Switzerland","United Kingdom","Australia","Fiji","Kiribati","Nauru"
    ,"New Zealand","Solomon Island","Tongo","Vanuatu","Samoa","Anguilla"
    ,"Antigua and Barbuda","Argentina","Bahamas","Barbados","Belize"
    ,"Bermuda","Bolivia","Brazil","Canada","Chile","Colombia","Costa Rica"
    ,"Cuba","Dominica","Ecuador","El Salvador","Greenland","Grenada"
    ,"Guadeloupe","Guatemala","Guinea","Haiti","Honduras","Jamaica"
    ,"Mexico","Nicaragua","Panama","Paraguay","Peru","Puerto Rico"
    ,"Saint Lucia","Suriname","United States","Uruguay","Venezuela"
    ,"Algeria","Angola","Benin","Botswana","Burundi","Cameroon","Chad"
    ,"Congo","Djibouti","Egypt","Equatorial Guinea","The State of Eritrea"
    ,"Ethiopia","Gabon","Gambia","Ghana","Guinea","Kenya","Lesotho","Liberia"
    ,"Libyan Arab Jamahiriya","Madagascar","Malawi","Mali","Mauritius"
    ,"Morocco","Mozambique","Namibia","Niger","Nigeria","Reunion"
    ,"Democratic Republic of the Congo","Rwanda","Senegal","Seychelles"
    ,"Sierra Leone","Somalia","South Africa","Sudan","Swaziland"
    ,"Tanzania, United Republic of","Togo","Tunisia","Ugganda"
    ,"Western Sahara","Zambia","Zimbabwe"]
    var country = $('#country-select');
    for(var i = 0;i < countryValue.length;i ++){
        country.append('<option value="'
                    +countryValue[i]+'">'
                    +countryArr[i]+'</option>')
    }

    // 自制select
    var chosenClick = $('.chosen-container');
    for(var i = 0;i < countryValue.length;i ++){
        $('.country-results').append(' <li class="active-result">'
                          +countryArr[i]+'</li>')
    }
    chosenClick.click(function (e) {
        var src = $(this);
        src.find('.chosen-drop').toggle();
        src.find('.chosen-single').toggleClass('chosen-container-active')
        src.find('.chosen-single').find('div').find('b').toggleClass('slideArrowUp');
        chosenClick.toggleClass('borderBottomNone');
        src.find('.chosen-single').toggleClass('borderBottomNone');
    })
    var activeResult = $('.active-result');
    $('.chosen-results').mouseover(function (e) {
        var src = $(e.target || e.srcElement);
        for(var i = 0;i < activeResult.length;i ++)
        {
            activeResult[i].className = "active-result";
            src.addClass('result-selected');
        }
        src.click(function () {
            src.parent().parent().parent().find('span').text(src[0].textContent);
        })
    })
    // 生成时间
    for(var i = 0;i < 12;i++)
    {
        if(i<9)
        {
            $('#departure-month').append('<option>'
                +0+(i+1)+'</option>')
        }
        else
        {
            $('#departure-month').append('<option>'+
                (i+1)+'</option>')
        }
    }
    for(var i = 0;i < 31;i++)
    {
        if(i<9)
        {
            $('#departure-day').append('<option>'
                +0+(i+1)+'</option>')
        }
        else
        {
            $('#departure-day').append('<option>'+
                (i+1)+'</option>')
        }
    }
    var hobbyDown = $('.hobbies-Down');
    var hobbyList = $('.hobbies-list');
    hobbyDown.click(function () {
        hobbyList.stop().slideToggle('fast');
        if(hobbyDown.text() == "打开更多 +"){
            hobbyDown.html('收起 <span class="f_bold">-</span>');
        }else{
            hobbyDown.html('打开更多 <span class="f_bold">+</span>');
        }
    })
    // 关闭窗口
    $('.close-btn').click(function () {
        $('.beshan-commission').hide();
        $('.allCover').fadeOut();
    })
    $('#commission-reset').click(function () {
        $('.beshan-commission').hide();
        $('.allCover').fadeOut();
    })
    $('.secondry-button').click(function () {
        $('.allCover').show();
        $('.beshan-commission').fadeIn('slow');
    })
// 轮播图控制 - 左切图
    $('.slider-prev').click(function () {
        var x = parseInt($('.mui-slider-group').css('transform').split(',',6)[4]);
        var y = parseInt($('.mui-slider-group').css('width'));
        if(x == 0)
        {
            x = -4*y;
            $('.mui-slider-group').css({
            'transform': 'translateX('+x+'px)'
            })
        }else if(x >= -4*y){
            $('.mui-slider-group').css({
            'transform': 'translateX('+(x+y)+'px)'
            })
            if(x+y == 0)
            {
                $('.mui-slider-group').css({
                'transform': 'translateX('+(-4*y)+'px)'
                })
            }
        }

    })
// 轮播图控制 - 右切图
    $('.slider-next').click(function () {
        var x = parseInt($('.mui-slider-group').css('transform').split(',',6)[4]);
        var y = parseInt($('.mui-slider-group').css('width'));
        if(x >= -4*y){
            $('.mui-slider-group').css({
            'transform': 'translateX('+(x-y)+'px)'
            })
            if(x-y == -5*y)
            {
                $('.mui-slider-group').css({
                'transform': 'translateX('+(-y)+'px)'
                })
            }
        }
    })
})
