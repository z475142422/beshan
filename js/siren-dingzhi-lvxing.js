window.onload = function(){
	var canv = document.getElementById('canva');
	var con = canv.getContext("2d");
	con.beginPath();
	con.strokeStyle = "#f0f1d9";
	con.lineWidth = 3;
	con.moveTo(0,2);
	con.lineTo(130,2);
	con.lineTo(145,50);
	con.lineTo(160,2);
	con.lineTo(300,2)
	con.stroke();
}

// 下拉搜索
$(function(){
	var span;
	$('.select-search .btn').click(function(){
		$(this).css('background-color','#f0f1d9');
		$(this).find('span').toggleClass('glyphicon glyphicon-menu-up');
		$(this).find('span').toggleClass('glyphicon glyphicon-menu-down');
	})
	$('.menu1 li:not(.dark)').click(function(){
		$('.location').text($(this).text());
		span = $('<span class="glyphicon glyphicon-menu-down\
						"></span>');
		$('.location').append(span);
	})
	$('.menu2 li').click(function(){
		$('.hobby').text($(this).text());
		span = $('<span class="glyphicon glyphicon-menu-down\
						"></span>');
		$('.hobby').append(span);
	})


})