$(function(){
	window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数
	function resizeBannerImage()
 	{
   		var winW = $(window).width();
   		if(winW<1200){
   			$('.about').css('display','none')
   		}
   		else{
   			$('.about').css('display','block')
   		}
  	}
})