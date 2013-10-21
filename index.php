<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"> 

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>Virtual HDU - 虚拟杭电</title>

	<link rel="stylesheet" href="style.css" type="text/css" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	
</head>

<body onkeydown="mapControl(event)">
<div class="loading" id = "loading">
	<div class="floater"></div>
	<div class="loading-box">
		<div class="loading-img"></div>
		<p><div id="loading-text">loading</div></p>
		<p><div id="tips-text"></div></p>
	</div>
</div>
<div class="top">
	<div class="global-nav">
		<div class="global-nav-item">
			<ul>
				<li>
					<a href="index.php">首页</a>
				</li>
				<li>
					<a onclick="buildingControl(2360,1340)">宿舍</a>
				</li>
				<li>
					<a onclick="buildingControl(0,190)">食堂</a>
				</li>
				<li>
					<a onclick="buildingControl(1630,440)">教室</a>
				</li>
				<li>
					<a onclick="buildingControl(1140,190)">图书馆</a>
				</li>
				<li>
					<a onclick="buildingControl(2150,190)">活动中心</a>
				</li>
				<li>
					<a onclick="buildingControl(1140,1140)">商店</a>
				</li>
				<li>
					<a class="bar" onclick="messageControl()">茶吧</a>
				</li>
				<li class="nav-info" >
					<a class="setting">设置</a>
				</li>
				<li class="nav-info" >
					<a class="user">ReSur</a>
				</li>
				<li class="nav-info" >
					<div class="icon-hduradio" id="icon-hduradio" onclick="musicControl()">
						<audio id="media-radio" loop="loop">
							<source src="music.ogg" type="audio/ogg">
							<source src="music.mp3" type="audio/mpeg">
						</audio>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div id="message-tab">
		<div class="class-tab"></div>
		<div class="message">
			<div class="message-submit">
					<input class="message-content" type="text" id="message-content" />
					<button type="button" onclick="postContent(document.getElementById('message-content').value)">点击发送</button>
			</div>
			<div class="message-box" id="message-box">
				<?php
					include("get.php");
				?>
			</div>
		</div>
	</div>
	<div class="mini-map" id="mini-map">
		<div class="position-circle">
			<div class="position-circle-center"></div>
		</div>
	</div>
</div>
	<div class="map" id="map"></div>
	<div class="map-info"></div>
<script type="text/javascript" src="common.js"></script>
<script type="text/javascript" src="ajax.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="http://1992s.com/wp-content/themes/portfolio-press-child/js/info.js"></script>
</body>

</html>