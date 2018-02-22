$(function(){
// 1、公共部分
	// 鼠标移入显示下拉菜单显示效果
		(function(){
			function showNav(oParent,id){
				oParent.hover(function(){
					oParent.children(id).show();
				},function(){
					oParent.children(id).hide();
				})
			}
			// 顶部导航（手机京东、客户服务、网站导航）
			showNav($('.app_jd'),'#app_jd_items');
			showNav($('.service'),'#service_items');
			showNav($('.site_nav'),'#site_nav_items');
			// 我的京东、购物车结算
			showNav($('.my_jd'),'#my_jd_items');
			showNav($('.settle_up'),'#settle_up_items');
			
		})();
	// 搜索框点击显示搜索结果
		(function(){
			$('.search_box .search_txt').focus(function(){
				$('.search_items').show();
			});
			$('.search_box .search_txt').blur(function(){
				$('.search_items').hide();
			});
		})();
		// 搜索框搜索结果输入移入高亮效果
		(function(){
			$('.search_items p').hover(function(){
				$(this).addClass('active');
			},function(){
				$(this).removeClass('active');
			})
		})();
		// 主导航鼠标移入高亮显示
		(function(){
			$('#nav .nav_items').find('li').hover(function(){
				$(this).addClass('active');
			},function(){
				$(this).removeClass('active');
			})
		})();
		// 鼠标移入子菜单项显示具体盒子
		(function(){
			$('.cate_item').hover(function(){
				$(this).find('.sub_cate_box').show();
			},function(){
				$(this).find('.sub_cate_box').hide();
			})
		})();

		// 回到顶部效果
		(function(){
			$(window).scroll(function(){
				// 当滚动距离大于200px时，回到顶部链接出现，否则消失
				if($(window).scrollTop()>200){
					$('.side_panel .back_to_top').fadeIn(1000);
				}else{
					$('.side_panel .back_to_top').fadeOut(1000);
				}
			})
			// 点击链接回到顶部位置
			$('.side_panel .back_to_top').click(function(){
				$('html,body').animate({scrollTop:0},200);
				return false;
			})
		})();

		






})