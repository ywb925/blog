$(function(){
	// 鼠标移入显示下拉菜单显示效果
		(function(){
			function showNav(oParent,id){
				oParent.hover(function(){
					oParent.children(id).show();
				},function(){
					oParent.children(id).hide();
				})
			}
		})();
	//广告banner轮播图效果
	(function(){
		var num=0;
		var timer=null;
		tab();

		function autoPlay(){
			timer=setInterval(function(){
				num++;
				num%=$('.slider .banner_index li').length;
				tab();
			},2000);
		}
		 autoPlay();
		 $('.slider .banner_img').hover(function(){
		 	clearInterval(timer);
		 },autoPlay);

		 $('.slider .banner_index li').click(function(){
		 	num=$(this).index();
		 	tab();
		 })

		function tab(){
			$('.slider .banner_img').stop().animate({'left':-(670*num)},1000);
			$('.slider .banner_index li').eq(num).addClass('active').siblings().removeClass('active');
		}
	})();
	
	//点击ad广告滚动切换效果
	(function(){
			var iNow=0;
			$('.ad .preview').click(function(){
				doMove(-1);
			});
			$('.ad .nextview').click(function(){
				doMove(1);
			});
			function doMove(num) {
			iNow+=num;
			if(Math.abs(iNow)>$('.ad ul li').length-1-2){
				iNow = 0;
			}
			if(iNow>0){
				iNow = -($('.ad ul li').length-1-2);
			}
			$('.ad ul').stop().animate({'left':202*iNow}, 1000);
		}
	})();
	//生活的橱窗商品展示图片鼠标移入左移效果
	(function(){
			$('.show_box>li').hover(function(){
				$(this).css('backgroundPosition','-10px 0');
			},function(){
				$(this).css('backgroundPosition','0 0');
			})

			// $('.show_box').children('li').each(function(){
			// 	$(this).hover(function(){
			// 		$(this).css('backgroundPosition','-10px 0');
			// 	},function(){
			// 		$(this).css('backgroundPosition','0 0');
			// 	})	
			})();
})