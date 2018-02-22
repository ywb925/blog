<?php
$user=$_GET['user'];
$email=$_GET['email'];
$theme=$_GET['theme'];
$content=$_GET['content'];

// if($user&&$email&&$theme&&$content){
// 	echo '您所发送的主题为'+$theme+'的内容'+$content+'已提交，感谢您的关注！';
// }else{
// 	echo '抱歉，提交失败！';
// }
echo "提交成功";

?>