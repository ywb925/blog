	$(function(){
			
			// 提交登录
			$('#login .log').click(function(){
				if(/[\w]{2,20}/.test(trim($('#login .user input').val()))&&$('#login .pass input').val().length>=6){
					$('#login .log').attr('disabled','true');
					$('#login .log').css('backgroundPosition', 'right');
					$('#loading p').html('正在尝试登录...');
					$.ajax({
						type:'post',
						url:'login.php',
						data:$('#login form').serialize(),
						success:function(result){
							$('#loading').hide();
							$('#login .log').attr('disabled','false');
							$('#login .log').css('backgroundPosition', 'left');
							if(result==1){//失败
								$('#login .info').html('登录失败，用户名或密码不正确！');
							}else{
								// setCookie('user',trim($('#login .user input').val()));
								$('#login .info').html();
								$('#success').show();
								$('#success p').html('登录成功...');
								setTimeout(function(){
									$('#success').hide();
									// $('#login').hide();
									$('#login form')[0].reset();

								},1500);
							}

						},
						async:true
					});
				}else{
					$('#login .info').html('登录失败，用户名或密码不合法！');
				}
			});

			// 去除字符串首尾空格
			function trim(str){
				return str.replace(/^\s+|\s+$/g,'');
			}
			// 用户验证
			$('#reg .user').focus(function(){
				$('#reg .info_user').show();
				$('#reg .succ_user').hide();
				$('#reg .error_user').hide();
			}).blur(function(){
				if(trim($(this).val())==''){
					$('#reg .info_user').hide();
					$('#reg .error_user').hide();
					$('#reg .succ_user').hide();
				}else if(!checkUser()){
					$('#reg .error_user').show();
					$('#reg .info_user').hide();
					$('#reg .succ_user').hide();
				}else{
					$('#reg .info_user').hide();
					$('#reg .succ_user').show();
					$('#reg .error_user').hide();
				}
			});

			// 验证用户名(包括是否已被注册)
			function checkUser(){
				var flag=true;
				if(!/[\w]{2,20}/.test($('#reg .user').val())){
					$('#reg .error_user').html('输入不合法，请重新输入！');
					return false;
				}else{
					$('#reg .loading').show();
					$('#reg .info_user').hide();
					$.ajax({
						type:'post',
						url:'isUser.php',
						data:$('#reg form').serialize(),// 表单序列化后的数据
						success:function(result){
							if(result==1){
								$('#reg .error_user').html('此用户名已注册');
								flag=false;
							}else{
								flag=true;
							}
							$('#reg .loading').hide();
						},
						async:false
					});
				}
				return flag;
			}

			// 密码验证
			$('#reg .pass').focus(function(){
				$('#reg .info_pass').show();
				$('#reg .succ_pass').hide();
				$('#reg .error_pass').hide();
			}).blur(function(){
				if(trim($(this).val())==''){
					$('#reg .info_pass').hide();
				}else{
					if(checkPass()){
						$('#reg .info_pass').hide();
						$('#reg .error_pass').hide();
						$('#reg .succ_pass').show();
					}else{
						$('#reg .info_pass').hide();
						$('#reg .error_pass').show();
						$('#reg .succ_pass').hide();
					}
				}
			});

			
			// 密码强度验证
			$('#reg .pass').keyup(function(){
				checkPass();
			});

			function checkPass(){
				var value=trim($('#reg .pass').val());
				var len=value.length;
				var code_len=0;
				if(len>0&&!/\s/.test(value)){
					$('#reg .info_pass .q2').html('●').css('color', 'green');
				}else{
					$('#reg .info_pass .q2').html('○').css('color', '#666');
				}

				if(len>=6&&len<=20){
					$('#reg .info_pass .q1').html('●').css('color', 'green');
				}else{
					$('#reg .info_pass .q1').html('○').css('color', '#666');
				}

				if(/[0-9]/.test(value)){
					code_len++;
				}
				if(/[a-z]/.test(value)){
					code_len++;
				}
				if(/[A-Z]/.test(value)){
					code_len++;
				}
				if(/[^a-zA-Z0-9]/.test(value)){
					code_len++;
				}

				if(code_len>=2){
					$('#reg .info_pass .q3').html('●').css('color', 'green');
				}else{
					$('#reg .info_pass .q3').html('○').css('color', '#666');
				}

				if(code_len>=3&&len>=10){
					$('#reg .info_pass .s1').css('color', 'green');
					$('#reg .info_pass .s2').css('color', 'green');
					$('#reg .info_pass .s3').css('color', 'green');
					$('#reg .info_pass .s4').html('高').css('color', 'green');
				}else if(code_len>=2&&len>=8){
					$('#reg .info_pass .s1').css('color', '#f60');
					$('#reg .info_pass .s2').css('color', '#f60');
					$('#reg .info_pass .s3').css('color', '#ccc');
					$('#reg .info_pass .s4').html('中').css('color', '#f60');
				}else if(code_len>=1){
					$('#reg .info_pass .s1').css('color', 'maroon');
					$('#reg .info_pass .s2').css('color', '#ccc');
					$('#reg .info_pass .s3').css('color', '#ccc');
					$('#reg .info_pass .s4').html('低').css('color', 'maroon');
				}else{
					$('#reg .info_pass .s1').css('color', '#ccc');
					$('#reg .info_pass .s2').css('color', '#ccc');
					$('#reg .info_pass .s3').css('color', '#ccc');
					$('#reg .info_pass .s4').html(' ').css('color', '#ccc');
				}
				if(len>=6&&len<=20&&code_len>=2&&!/\s/.test(value)){
					return true;
				}else{
					return false;
				}
				
			}

			// 确认密码验证
			$('#reg .notpass').focus(function(){
				$('#reg .info_notpass').show();
				$('#reg .error_notpass').hide();
				$('#reg .succ_notpass').hide();
			}).blur(function(){
				if(trim($(this).val())==''){
					$('#reg .info_notpass').hide();
				}else if(checkNotpass()){
					$('#reg .info_notpass').hide();
					$('#reg .error_notpass').hide();
					$('#reg .succ_notpass').show();
				}else{
					$('#reg .info_notpass').hide();
					$('#reg .error_notpass').show();
					$('#reg .succ_notpass').hide();
				}
			});

			function checkNotpass(){
				if(trim($('#reg .pass').val())==trim($('#reg .notpass').val())){
					return true;
				}
			}
			// 提　　问：
			$('#reg .ques').bind('change',function(){
				if(checkQues())  $('#reg .error_ques').hide();
			});

			function checkQues(){
				if($('#reg .ques').val()!=0) return true;
			}
			// 回答验证
			$('#reg .ans').focus(function(){
				$('#reg .info_ans').show();
				$('#reg .error_ans').hide();
				$('#reg .succ_ans').hide();
			}).blur(function(){
				if(trim($(this).val())==''){
					$('#reg .info_ans').hide();
				}else if(checkAns()){
					$('#reg .info_ans').hide();
					$('#reg .error_ans').hide();
					$('#reg .succ_ans').show();
				}else{
					$('#reg .info_ans').hide();
					$('#reg .error_ans').show();
					$('#reg .succ_ans').hide();
				}
			});

			function checkAns(){
				if(trim($('#reg .ans').val()).length>=2&&trim($('#reg .ans').val()).length<=32)
					return true;
			}
			// 电子邮件验证
			$('#reg .email').focus(function(){
				if($(this).val().indexOf('@')==-1)
					$('#reg .all_email').show();
				$('#reg .info_email').show();
				$('#reg .error_email').hide();
				$('#reg .succ_email').hide();
			}).blur(function(){
				$('#reg .all_email').hide();
				if(trim($('#reg .email').val())==''){
					$('#reg .info_email').hide();
				}else if(checkEmail()){
					$('#reg .info_email').hide();
					$('#reg .error_email').hide();
					$('#reg .succ_email').show();
				}else{
					$('#reg .info_email').hide();
					$('#reg .error_email').show();
					$('#reg .succ_email').hide();
				}
			});
			
			// 电子邮件键入补全
			$('#reg .email').keyup(function(ev){
				if($(this).val().indexOf('@')==-1){
					$('#reg .all_email').show();
					$('#reg .all_email li span').html($(this).val());
				}else{
					$('#reg .all_email').hide();
				}

				$('#reg .all_email li').css({'background':'none','color':'#666'});

			});

			// 电子邮件选定补全
			$('#reg .all_email li').mousedown(function(){
				$('#reg .email').val($(this).text());
				checkEmail();
			});

			function checkEmail(){
				if(/^[\w-\.]+@[\w-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($('#reg .email').val()))) return true;
			}
			// 电子邮件补全移入效果
			$('#reg .all_email li').hover(function(){
				$(this).css({'background':'#E5EDF2','color':'#369'});
			},function(){
				$(this).css({'background':'none','color':'#666'});
			});

			// 生　　日：
			var year=$('#reg .year');
			var month=$('#reg .month');
			var day=$('#reg .day');
			// 加入年
			for(var i=1960;i<=2018;i++){
				year[0].add(new Option(i,i),undefined);//DOM的add方法
			}
			// 加入月
			for(var i=1;i<=12;i++){
				month[0].add(new Option(i,i),undefined);//DOM的add方法
			}
			// 日
			var day30=[4,6,9,11];
			var day31=[1,3,5,7,8,10,12];
			// 判断某个月份是否在某个数组里
			function inArr(arr,value){
				for(var i in arr){
					if(arr[i]==value)
						return true;
				}
				return false;
			};

			year.bind('change',selectDay);
			month.bind('change',selectDay);
			day.bind('change',function(){
				if(checkBirthday()){
					$('#reg .error_birthday').hide();
				}
			});

			function checkBirthday(){
				if(year.val()!=0&&month.val()!=0&&day.val()!=0)
					return true;
			}
			function selectDay(){
				if(month.val()!=0&&year.val()!=0){
					var curDay=0;
					if(inArr(day31,parseInt(month.val()))){
						curDay=31;
					}else if(inArr(day30,parseInt(month.val()))){
						curDay=30;
					}else{
						if((parseInt(year.val())%4==0&&parseInt(year.val())%100!=0)||parseInt(year.val())%400==0){
							curDay=29;
						}else{
							curDay=28;
						}
					}

					// 加入之前先清空之前的数据
					day[0].options.length=1;

					for(var i=1;i<=curDay;i++){
						day[0].add(new Option(i,i),undefined);
					}
				}else{
					day[0].options.length=1;
				}
			};

			// 备　　注：
			// 刷新页面后，初始化表单数据
			$('#reg form')[0].reset();

			$('#reg textarea').keyup(function(){
				checkPs();
			});
			$('#reg textarea').bind('paste',function(){
				// 右键粘贴会在内容粘贴到文本框之前触发
				setTimeout(checkPs,50);
			});

			// 清尾
			$('#reg .ps .clear').click(function(){
				$('#reg textarea').val($('#reg textarea').val().substring(0,200));
				checkPs();
			});

			function checkPs(){
				var num=200-$('#reg textarea').val().length;
				if(num>=0){
					$('#reg .ps').eq(0).show();
					$('#reg .ps .num').html(num);
					$('#reg .ps').eq(1).hide();
					return true;
				}else{
					$('#reg .ps').eq(0).hide();
					$('#reg .ps').eq(1).show();
					$('#reg .ps .num').eq(1).html(Math.abs(num)).css('color','red');
					return false;
				}
			}

			// 提交注册
			$('#reg form .reg').click(function(){
				var flag=true;
				if(!checkUser()){
					$('#reg .error_user').show();
					flag=false;
				}
				if(!checkPass()){
					$('#reg .error_pass').show();
					flag=false;
				}
				if (!checkNotpass()) {
					$('#reg .error_notpass').show();
					flag = false;
				}
				if (!checkQues()) {
					$('#reg .error_ques').show();
					flag = false;
				}
				if (!checkAns()) {
					$('#reg .error_ans').show();
					flag = false;
				}
				
				if (!checkEmail()) {
					$('#reg .error_email').show();
					flag = false;
				}
				if (!checkBirthday()) {
					$('#reg .error_birthday').show();
					flag = false;
				}
				
				if (!checkPs()) {
					flag = false;
				}

				if(flag){
					$('#loading').show();
					$('#loading p').html('正在提交注册中！')
					// 提交过程中不可点击按钮，避免重复点击提交
					$(this).attr('disabled','true');
					$(this).css('backgroundPosition','right');
					$.ajax({
						url:'reg.php',
						type:'post',
						data:$('#reg form').serialize(),
						success:function(result){
							if(result==1){
								$('#loading').hide();
								$('#success').show();
								$('#success p').html('注册成功，请登录！');
								setTimeout(function(){
									$('#success').hide();
									// 表单初始化(jQuey中没有reset方法，通过调用DOM中的reset来重置)
									$('#reg .succ').hide();
									$('#reg form')[0].reset();
									// $('#reg').hide();

									$('#reg .reg').attr('disabled','false');
									$('#reg .reg').css('backgroundPosition','left');	
				
								},1500);
							}
						},
						async:true
					});			
				}
				
			});

			
		
		})