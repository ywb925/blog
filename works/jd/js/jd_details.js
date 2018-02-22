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
			// 全部商品分类鼠标移入显示子菜单
			showNav($('.category'),'.all_cate');
		})();

		// 购买选择颜色
		(function(){
			$('.choose_color dd a').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			})
		})();

		// 选项卡切换
		(function(){
			// 配送地点选择
			  fnTab($('.store_tabs'),$('.store_items'),'click','active');

			// 详情页左侧清洁排行榜
			  fnTab($('.rank_nav'),$('.rank_items'),'click','active');
			  // 详情页右侧推荐配件
			  fnTab($('.main_tabs1'),$('.m_content1'),'click','active');
			  // 详情页右侧商品介绍
			  fnTab($('.main_tabs2'),$('.m_content2'),'click','active');
			  // 详情页右侧评论详情
			  fnTab($('.main_tabs3'),$('.comment_box'),'click','active');
			  // 详情页右侧咨询
			  fnTab($('.main_tabs4'),$('.consult_info'),'click','active');
			  // 详情页右侧讨论详情
			  fnTab($('.main_tabs5'),$('.discuss_info'),'click','active');
			 
			  
			  function fnTab(oNav,aCon,sEvent,attr){
			  	var aElem=oNav.children();

			  	aCon.hide().eq(0).show();

			  	aElem.each(function(index){
			  		$(this).on(sEvent,function(){
			  			aElem.removeClass(attr);
			  			$(this).addClass(attr);
			  		
			  			aCon.hide().eq(index).show();
			  		})
			  	})
			}
		})();

		// 鼠标移入高亮显示效果
		(function(){
			// 加入对比
			$('.share>span').hover(function(){
				$(this).addClass('active');
			},function(){
				$(this).removeClass('active');
			})
		})();

		// 分享到更多
		(function(){
			var onOff=true;
			var oShareMore=$('.share .share_more');
			oShareMore.click(function(){
				if(onOff){
					$(this).find('b').addClass('backword');
					$(this).parent().css('width','200px').find('.share_kaixin').show();
					$(this).siblings('.share_douban').show();
					onOff=false;
				}else{
					$(this).find('b').removeClass('backword');
					$(this).parent().css('width','155px').find('.share_kaixin').hide();
					$(this).siblings('.share_douban').hide();
					onOff=true;
				}
				
			})
		})();

		// 鼠标移入移出显示消失效果
		(function(){
			// 加入购物车
			$('.minicart').hover(function(){
				$(this).children('.minicart_info').slideDown();
			},function(){
				$(this).children('.minicart_info').slideUp();
			})

			//配送地点
			$('.store_select').hover(function(){
				$('.store_content').show();
			},function(){
				$('.store_content').hide();
			})

		})();

		// 商品评价
		(function(){
			// 回复按钮点击显示效果
			$('.comment_txt .reply_btn').click(function(){
				// $('.reply_lz').eq($(this).index()).toggle();
				$(this).parents('.comment_reply').next().toggle();
			})
			// 评价页码跳转效果
			$('.comment_page .pages a').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			})
			
		})();

		//
		(function(){
			
			// $('.imgS li').hover(function(){	
			// 	//小图高亮显示
			// 	$(this).addClass('active').siblings().removeClass('active');
			// 	// 鼠标移入小图更新上面中图和右侧大图区域的图片路径
			// 	var aImgSrc=$(this).children('img').attr('src');
			// 	var bImgSrc='';
			// 	var lImgSrc='';
			// 	var num=aImgSrc.indexOf('.');
			// 	bImgSrc=aImgSrc.slice(0,num)+'-m'+aImgSrc.slice(num);
			// 	lImgSrc=aImgSrc.slice(0,num)+'-l'+aImgSrc.slice(num);
			// 	// alert(lImgSrc);
			// 	$('.imgB>img').attr('src',bImgSrc);

			// 	$('.largeImgContainer .lImg').attr('src',lImgSrc);
			// 	$('.largeImgContainer img').eq(0).hide();

			// })
			var bImgSrc='';
			var lImgSrc='';
			var aImgSrc=$('.imgS li').children('img').attr('src');
			var num=aImgSrc.indexOf('.');
			lImgSrc=aImgSrc.slice(0,num)+'-l'+aImgSrc.slice(num);
			// 更新右侧大图区域图片路径
			$('.largeImgContainer img').eq(0).hide();
			$('.largeImgContainer .lImg').attr('src',lImgSrc);

			$('.imgS li').hover(function(){	
				//小图高亮显示
				$(this).addClass('active').siblings().removeClass('active');
				// 鼠标移入小图更新上面中图的图片路径(为避免初始状态下鼠标未移入小图时右侧大图不显示，故右侧路径更新放在鼠标移入事件函数之外)
				bImgSrc=aImgSrc.slice(0,num)+'-m'+aImgSrc.slice(num);
				$('.imgB>img').attr('src',bImgSrc);
			})

			// 小图列表左右滚动
			var wid=$('.imgS li').width();
			var iNow=0;
			var len=$('.imgS li').length;

			$('.imgS>a').eq(0).click(function(){
				if($(this).attr('class')=='bakcward_disabled'){
					return false;
				}
				doMove(-1);
			})

			$('.imgS>a').eq(1).click(function(){
				if($(this).attr('class')=='forward_disabled'){
					return false;
				}
				doMove(1);
			})

			function doMove(num){
			iNow+=num;	
			$('.imgS ul').stop().animate({ 'left': wid*iNow }, 1000);
		}
		// 图片放大镜效果
		// 1、鼠标移入遮罩活动区域，遮罩和大图显示区域出现
		$('.maskTop').hover(function(){
			$('.mask').show();
			$('.largeImgContainer').show();
		},function(){
			$('.mask').hide();
			$('.largeImgContainer').hide();
		})
		// 2、移动遮罩
		$('.maskTop').mousemove(function(ev){
			var l=ev.pageX-$('.imgB').offset().left-$('.mask').innerWidth()/2;
			var t=ev.pageY-$('.imgB').offset().top-$('.mask').innerHeight()/2;
			if(l<0){
				l=0;
			}else if(l>$('.maskTop').innerWidth()-$('.mask').innerWidth()){
				l=$('.maskTop').innerWidth()-$('.mask').innerWidth();
			}
			if(t<0){
				t=0;
			}else if(t>$('.maskTop').innerHeight()-$('.mask').innerHeight()){
				t=$('.maskTop').innerHeight()-$('.mask').innerHeight();
			}

			$('.mask').css('left',l);
			$('.mask').css('top',t);

			var percentX=l/($('.maskTop').innerWidth()-$('.mask').innerWidth());
			var percentY=t/($('.maskTop').innerHeight()-$('.mask').innerHeight());
 			var enlargeL=-percentX*($('.largeImgContainer .lImg').innerWidth()-$('.largeImgContainer ').innerWidth());
 			var enlargeT=-percentY*($('.largeImgContainer .lImg').innerHeight()-$('.largeImgContainer ').innerHeight());
			$('.largeImgContainer .lImg').css('left',enlargeL);
			$('.largeImgContainer .lImg').css('top',enlargeT);
			console.log('x'+enlargeL+'y'+enlargeT);
		})

	})();
		




})