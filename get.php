<?php
	include("config.php"); //引入数据库连接文件
	$sql = "SELECT * FROM content ORDER BY id DESC"; //搜索数据表content
	$resule = mysql_query($sql,$con);
?>
<?
	while(($row=mysql_fetch_array($resule))&&$item<23) {
		$item++;
?>
	<div class="message-item">
		[<? echo $row[1] ?>]&nbsp<? echo $row[2] ?><br />
	</div>
<?
}
?>