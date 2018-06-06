$(function(){
	window.onresize = resizeBannerImage;//当窗口改变宽度时执行此函数
	function resizeBannerImage()
 	{
   		var winW = $(window).width();
   		if(winW<1200){
   			$('.about').css('display','none')
   		}
   		else{
   			$('.about').css('display','block')
   		}
      if(winW<768){
        $('.large').css('border','none')
        $('.transport').css('border-top','1px solid black')
      }
      else{
        $('.large').css('border-right','1px solid black')
        $('.transport').css('border','none')
      }
  	}
})

window.onload = function(){
  for(var i=0;i<4;i++){
    var canv = document.getElementsByClassName('canva')[i];
    var con = canv.getContext("2d");
    con.beginPath();
    con.lineWidth = 3;
    con.moveTo(0,2);
    con.lineTo(130,2);
    con.lineTo(145,50);
    con.lineTo(160,2);
    con.lineTo(300,2)
    con.stroke();
  }
  var can = document.getElementsByClassName('canv')[0];
  var con1 = can.getContext("2d");
  con1.beginPath();
  con1.lineWidth = 3;
  con1.strokeStyle = '#f0f1d9';
  con1.moveTo(0,2);
  con1.lineTo(130,2);
  con1.lineTo(145,50);
  con1.lineTo(160,2);
  con1.lineTo(300,2)
  con1.stroke();
  // var w = $(window).width();
  // var h = $(window).height();
  // var modalContent = document.getElementsByClassName('modal-dialog')[0];
  // modalContent.style.width = w + 'px';
  // modalContent.style.height = h + 'px';
  // modalContent.style.marginTop = '0px';
}
