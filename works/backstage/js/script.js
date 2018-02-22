$(function(){
 				// 1、登录表单验证
 				(function(){
 					var btn=$('.btn');
 					var nameInfo=$('.nameInfo');
 					var passwordInfo=$('.passwordInfo');
 					var verifyInfo=$('.verifyInfo');
 					// 用户名验证函数
 					function nameCheck(){
 						var name=$('.name');
	 					var regName=/^[0-9a-zA-Z][0-9a-zA-Z-._]{2,16}[0-9a-zA-Z]$/;
	 					if(name.val()==''){
	 						nameInfo.text('请输入用户名');
	 						return false;
	 					}
	 					if(regName.test(name.val())==false){
	 						nameInfo.text('用户名格式错误');
	 						return false;
	 					}
	 					nameInfo.text('用户名输入正确');
 					}
 					// 2密码验证函数
 					function passwordCheck(){
 						var password=$('.password');
 						
 						if(password.val()==''){
 							passwordInfo.text('请输入密码');
 							return false;
 						}
 						if(password.val().length<6||password.val().length>16){
 							passwordInfo.text('密码有误，长度为6-16位');
 							return false;
 						}
 						passwordInfo.text('密码输入正确');
 						return true;
 					}
 					 function verifyCheck(){
 					 	var verify=$('.verify');
 					 	if(verify.val()==''){
 					 		verifyInfo.text('请输入验证码');
 					 		return false;
 					 	}
 					 	verifyInfo.text('验证码输入正确');
 					 	return true;
 					 }

 					$('.btn').click(function(){
 						var flagName=nameCheck();
 						var flagPassword=passwordCheck();
 						var flagVerify=verifyCheck();
 						nameCheck();
 						passwordCheck();
 						verifyCheck();
 						if(flagName==true&&flagPassword==true&&flagVerify==true){
 							alert('登录成功！');
 							return true;
 						}else{
 							return false;
 						}
 					})
 				})();


 					// 3左侧菜单展开收起效果
		        	(function(){
		        		var onOff=true;
		        		$('#leftMenu dl dt').click(function(){
		        			$(this).siblings('dd').slideToggle('slow');
		        			if(onOff){
		        				$(this).css({'backgroundPosition':'right -40px'});
		        				onOff=false;
		        			}else{
		        				$(this).css({'backgroundPosition':'right 12px'});
		        				onOff=true;
		        			}	
		        		})
		        	})();

		        	// 4顶部导航显示隐藏菜单
	        		(function(){
	        			var onOff=true;
		        		$('#link_1').click(function(){
		        			if(onOff){
		        				$('#leftMenu').hide();
		        				$(this).children().text('显示菜单');
		        				$('#rightMain').css('left',0);
		        				onOff=false;
		        			}else{
		        				$('#leftMenu').show();
		        				$(this).children().text('隐藏菜单');
		        				$('#rightMain').css('left','187px');
		        				onOff=true;
		        			}
	        			})
	        		})();   	


 				//顶部导航切换效果
 				(function(){
        			$('.headerNav li').click(function(){
        				var index=$(this).index();
        				$(this).addClass('active').siblings().removeClass('active');
        				// $('#leftMenu').find('div').eq(index).show().siblings().hide();
        				$('#leftMenu').children().eq(index).show().siblings().hide();
        			})
        		})();


        		// 主页左侧菜单切换
        	(function(){
        		$('#leftMenu li a').click(function(){
        			var link=$(this).attr('link');
        			// alert(link);
        			$('#rightMain iframe').attr('src',link);
        			$(this).addClass('selected').parent().siblings().children().removeClass('selected');
        			$(this).parents('dl').siblings().find('li a').removeClass('selected');
        		})
        	})();


        	// 网站设置页面导航切换
			(function(){
				$('.navTab li').click(function(){
					var index=$(this).index();
					$(this).addClass('active').siblings().removeClass('active');
					$('.navTabCon .navTabConList').eq(index).show().siblings().hide();
				})
			})();



 })