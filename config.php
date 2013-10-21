<?php
$con = mysql_connect("db4free.net","ihdu","resur&roki");
if(!$con)
	{
	die( 'Could not connect: ' . mysql_error() );
	}
mysql_query("set names utf8"); //以utf8读取数据
mysql_select_db("ihdu",$con); //数据库
?>