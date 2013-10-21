<?php
	header("content-Type: text/html; charset=utf-8");
	include("config.php");
	$sql = "CREATE TABLE IF NOT EXISTS `content`(`id` int(11) NOT NULL auto_increment,`name` varchar(15) NOT NULL,`content` varchar(140) NOT NULL,PRIMARY KEY (`id`))ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=3;";
	mysql_query("DROP TABLE `content`");
	mysql_query($sql);
?>