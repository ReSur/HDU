<?php
	header("content-Type: text/html; charset=utf-8");
	include("config.php");
	$name= "ReSur";
	var_dump($_POST['message-content']);
	$patch = $_POST['message-content'];
	$content = str_replace("
	","<br />",$patch);
	$sql = "insert into content (name,content) values ('$name','$content')";
	mysql_query($sql);
?>