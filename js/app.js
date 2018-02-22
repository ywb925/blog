$(function(){
	// 小屏幕点击关闭菜单
	(function(){
			//小屏幕导航点击关闭菜单
			$('.navbar-collapse a').click(function(){
				$('.navbar-collapse').collapse('hide');
			});

			new WOW().init();
	})();


	// banner轮播图效果
	(function(){
		$('#myCarousel').carousel({
	        //设置自动播放/2 秒
	        interval: 2000,
    	});
	})();

	// 返回顶部
	(function(){

		scroll();
		$(window).scroll(function(){
			scroll();
		});
		function scroll(){
			if($(this).scrollTop()>100){
				$('#back-top').fadeIn();
			}else{
				$('#back-top').fadeOut();
			}
		};

		$('#back-top a').click(function(){
			$('body,html').animate({scrollTop:0},200);
			return false;
		});
	})();

	// 去除字符串首尾空格
	function trim(str){
		return str.replace(/(^\s+)|(\s+$)/g,'');
	}
	// 联系我页面表单验证
	(function(){
		var oUser=$('.contact-message .user');
		var oEmail=$('.contact-message .email');
		var oTheme=$('.contact-message .theme');
		var oContent=$('.contact-message .content');

		
		$('.contact-message .user').focus(function(){
			$('.contact-message .user_info').show();
				$('.contact-message .user_error').hide();
				$('.contact-message .user_success').hide();

		}).blur(function(){
			if(trim(oUser.val())==''){
				$('.contact-message .user_info').hide();
				$('.contact-message .user_error').hide();
				$('.contact-message .user_success').hide();
			}else if(!checkUser()){
				$('.contact-message .user_info').hide();
				$('.contact-message .user_success').hide();
				$('.contact-message .user_error').show();
			}else{
				$('.contact-message .user_success').show();
				$('.contact-message .user_info').hide();
				$('.contact-message .user_error').hide();
			}
		});


		function checkUser(){
			if(/[a-zA-Z0-9]{2,20}/.test(trim(oUser.val())))
				return true;
		}
		

		$('.contact-message .email').focus(function(){
			$('.contact-message .email_info').show();
				$('.contact-message .email_error').hide();
				$('.contact-message .email_success').hide();
		}).blur(function(){
			if(trim(oEmail.val())==''){
				$('.contact-message .email_info').hide();
				$('.contact-message .email_error').hide();
				$('.contact-message .email_success').hide();
			}else if(!checkEmail()){
				$('.contact-message .email_info').hide();
				$('.contact-message .email_success').hide();
				$('.contact-message .email_error').show();
			}else{
				$('.contact-message .email_success').show();
				$('.contact-message .email_info').hide();
				$('.contact-message .email_error').hide();
			}

		});

		function checkEmail(){
			if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(trim(oEmail.val())))
				return true;
		}

		$('.contact-message .theme').focus(function(){
			$('.contact-message .theme_info').show();
				$('.contact-message .theme_error').hide();
				$('.contact-message .theme_success').hide();
		}).blur(function(){
			if(trim(oTheme.val())==''){
				$('.contact-message .theme_info').hide();
				$('.contact-message .theme_error').hide();
				$('.contact-message .theme_success').hide();
			}else if(trim(oTheme.val()).length<2){
				$('.contact-message .theme_info').hide();
				$('.contact-message .theme_success').hide();
				$('.contact-message .theme_error').show();
			}else{
				$('.contact-message .theme_success').show();
				$('.contact-message .theme_info').hide();
				$('.contact-message .theme_error').hide();
			}

		});

		$('.contact-message .content').focus(function(){
			$('.contact-message .content_info').show();
				$('.contact-message .content_error').hide();
				$('.contact-message .content_success').hide();
		}).blur(function(){
			if(trim(oContent.val())==''){
				$('.contact-message .content_info').hide();
				$('.contact-message .content_error').hide();
				$('.contact-message .content_success').hide();
			}else if(trim(oContent.val()).length<2){
				$('.contact-message .content_info').hide();
				$('.contact-message .content_success').hide();
				$('.contact-message .content_error').show();
			}else{
				$('.contact-message .content_success').show();
				$('.contact-message .content_info').hide();
				$('.contact-message .content_error').hide();
			}
		});
		// 提交表单
		$('.contact-message .btn').click(function(){
			var flag=true;
			if(!checkUser()){
				$('.contact-message .user_error').show();
				flag=false;
			}
			if(!checkEmail()){
				$('.contact-message .email_error').show();
				flag=false;
			}
			if(trim(oTheme.val()).length<2){
				$('.contact-message .theme_error').show();
				flag=false;
			}
			if(trim(oContent.val()).length<2){
				$('.contact-message .content_error').show();
				flag=false;
			}

			if(flag){
				var oData={
					'user':oUser.val(),
					'email':oEmail.val(),
					'theme':oTheme.val(),
					'content':oContent.val()
				};
				// $.ajax('contact.php',oData,'get',function(data){
				// 	$('.contact-message .success').show();
				// 	alert(data);
				// });
				$.ajax({
					url:'contact.php',
					data:oData,
					type:'get',
					success:function(result){
						alert(result);
					}
				});
			}else{
				return false;
			}
		});

		
	})();
	
    // 技术&知识文章列表页头部当前位置
    (function(){
    	$('.article-list .list-unstyled li a').click(function(){
	    	$('.article-list .direction .type').html($(this).html());
	    });
    })();

    // 引入百度地图
    (function(){
    	// 百度地图API功能
		var map = new BMap.Map("map");    // 创建Map实例
		map.centerAndZoom(new BMap.Point(114.379804,30.564446), 13);  // 初始化地图,设置中心点坐标和地图级别
		//添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes:[
	            BMAP_NORMAL_MAP,
	            BMAP_HYBRID_MAP
	        ]}));	  
		map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    })();
    





})