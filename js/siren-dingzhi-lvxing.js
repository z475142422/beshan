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

$(function(){
// 下拉搜索
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

// 分页
	var i,li,j,k;
	$('.next').click(function(){
		$('.next').css({
			'background-color':'#003751',
			'color':'white'
		})
		i = Number($('.active').text());
		if((i+1)>10){
			i = 9;
		}
		li = $('.pagination>li:eq('+(i+1)+')')
		selectLink();
		$('.pagination>li>a').removeClass('active');
		li.find('a').addClass('active');
	})
	
	$('.previous').click(function(){
		$('.previous').css({
			'background-color':'#003751',
			'color':'white'
		})
		k = Number($('.active').text());
		if((k-1)<1){
			k = 2;
		}
		li = $('.pagination>li:eq('+(k-1)+')');
		selectLink();
		$('.pagination>li>a').removeClass('active');
		li.find('a').addClass('active');
	})

	var body;
	$('.pagination>li>a:not(.next):not(.previous)').click(function(){
		j = $(this).text();
		li = $('.pagination>li:eq('+(j)+')');
		selectLink();
		$('.pagination>li>a').removeClass('active');
		$(this).addClass('active');
	})

	function selectLink(){
		if(li.text()==1){
			// i = 1;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		 			</div>\
				 </div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==2){
			// i = 2;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		 			</div>\
				 </div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==3){
			// i = 3;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		 			</div>\
				 </div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==4){
			// i = 4;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		 			</div>\
				 </div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==5){
			// i = 5;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		 			</div>\
				 </div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/sunset-over-crown-point-jon-ares.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国西北山水之间的世外桃源</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>\
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div> \
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 20px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/未开采宝藏之营_副本.jpg" alt="">\
					<div class="header">\
						<div>肯尼亚</div>\
						<div><a href="">肯尼亚马赛文化之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==6){
			// i = 6;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==7){
			// i = 7;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==8){
			// i = 8;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==9){
			// i = 9;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
		if(li.text()==10){
			// i = 10;
			body = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\
				<div style="margin-bottom: 10px;">\
				<div class="row-top">\
					<img src="http://www.beshan.com/images/trip_thumbnail/%E5%93%A5%E5%A4%A7.jpg" alt="">\
					<div class="header">\
						<div>美国</div>\
						<div><a href="">美国东岸高等学府及艺术馆深度探访之旅</a></div>\
					</div>\
				</div>\
\
				<div class="body">\
           	 		<div class="trip-length">\
                		<span>旅行天数</span>\
                		<span class="value">13</span>\
                		<span>天</span>\
            		</div>\
            		<div class="body-top">\
              			<div class="description"><p>美国东部高校和艺术馆众多。其中包含许多老牌藤校和世界顶级艺术学院。来这里感受浓浓书香，和在校学子一起交流心得，或者邂逅一场毕业演讲。更有不同风格的艺术馆和艺术展览，名师在旁讲解，绝对是参观艺术展的正确打开方式。</p></div>\
              			<div class="tags">\
                			<i class="glyphicon glyphicon-tags"></i>\
                    		<span>文化</span>\
		                    ,\
		                    <span>亲子</span>\
		                    ,\
		                    <span>美食</span>\
		                    ,\
		                    <span>摄影</span>\
                		</div>\
           			</div>\
           			<div class="price-display">\
			            <span class="tour-category">私人定制旅行</span>\
			            <span class="currency">最低 RMB</span>\
			            <div><span class="value">¥52,800</span><span class="unit">/每人</span></div>\
		        	</div>\
		            <div class="transport">\
		                  <i class="transport-icon glyphicon glyphicon-folder-open" title="汽车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-folder-close is_disabled" title="火车"></i>\
		                  <i class="transport-icon glyphicon glyphicon-plane" title="飞机"></i>\
		                  <i class="transport-icon glyphicon glyphicon-user" title="徒步旅行"></i>\
		                  <i class="transport-icon glyphicon glyphicon-object-align-right disabled" title="船"></i>\
		            </div>\
		            <div class="actions">\
		             	<div class="social-bar dropdown">\
		                	<button class="btn btn-default dropdown-toggle social-sharer" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-share"></span>分享</button>\
		               		<ul class="dropdown-menu share-icon" aria-labelledby="dropdownMenu2">\
		                		<li><a href="#"><span class="glyphicon glyphicon-envelope"></span></a><a href="#"><span class="glyphicon glyphicon-map-marker"></span></a></li>\
		                	</ul>\
		              	</div>\
		              	<a class="custom-button" href="">查看具体行程</a>\
		            </div>\
		         </div>\
				</div>\
			</div>')
			$('.row').html(body);
			$('.pagination>li>a').css('color','white')
			li.find('a').css({
				'background-color':'#003751',
				'color':'orange'
			})
		}
	}

})