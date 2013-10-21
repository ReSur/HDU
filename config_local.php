<?php
$con = mysql_connect("localhost","root","resur-mysql-root");
if(!$con)
	{
	die( 'Could not connect: ' . mysql_error() );
	}
mysql_query("set names utf8"); //以utf8读取数据
mysql_select_db("resur",$con); //数据库
?>