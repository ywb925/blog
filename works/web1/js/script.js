$(function(){
	// 小屏幕导航点击切换效果
	(function(){
		$('.sub_menu,.sub_search').hide();
		$('#menu').click(function(){
			$('#search').removeClass('active');
			$(this).toggleClass('active');
			$('.sub_menu').toggle();
			$('.sub_search').hide();
		});
		$('#search').click(function(){
			$('#menu').removeClass('active');
			$(this).toggleClass('active');
			$('.sub_search').toggle();
			$('.sub_menu').hide();
		});
		
	})();
	
	// 回到顶部
	(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>200){
				$('#to_top').fadeIn();
			}else{
				$('#to_top').fadeOut();
			}
		});
		$('#to_top').click(function(){
			$('html,body').animate({scrollTop:0},800);
			return false;
		});
	})();


});


    
