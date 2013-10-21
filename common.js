var len = 2;
var rnd = Math.floor(Math.random()*len);
var tips = new Array(rnd);
tips[0] = "你知道吗？通过键盘上的方向键可以控制地图移动";
tips[1] = "你知道吗？点击右上角的设置可以关闭小地图";
var loading = document.getElementById('loading-text');
var loading_point = 1;
setInterval('loadingAnimation()',1000);
function loadingAnimation () {
	switch (loading_point)
	{
	case 0:
		loading.innerHTML = "loading";
		break;
	case 1:
		loading.innerHTML = "loading.  ";
		break;
	case 2:
		loading.innerHTML = "loading..";
		break;
	case 3:
		loading.innerHTML = "loading...";
		break;
	} 
	loading_point = (loading_point+1)%4;
}
document.getElementById('tips-text').innerHTML = tips[rnd];
var music_switch = false;
var y = 0;
var map_x = 1140;
var map_y = 190;	//初始坐标
var time = 1;	//移动1px毫秒数
var speed = 3;	//build模式速度。注意：请用正数！
var step = 200;	//每步移动距离

function musicControl () {
	if (y < 40) {
		y+=20;
	}else{
		y+=-20;
	}
	document.getElementById('icon-hduradio').style.backgroundPositionY = - y + "px";
	if (!music_switch) {
		document.getElementById('media-radio').play();
	}else {
		document.getElementById('media-radio').pause();
	}
	music_switch = !music_switch;
}

function mapControl(event) {
          if(event.keyCode == 38){
          		x_plus = 0;
          		y_plus = -1;
          		step_now = 0;
		mapMove();
          }	//press up
          if (event.keyCode == 40){ 
          	          	x_plus = 0;
          		y_plus = 1;
          		step_now = 0;
		mapMove(0);
          } 	//press down

          if(event.keyCode == 37){
          		x_plus = -1;
          		y_plus = 0;
          		step_now = 0;
		mapMove(0);		
          }	//press left
          if (event.keyCode == 39){ 
          		x_plus = 1;
          		y_plus = 0;
          		step_now = 0;
		mapMove(0);
          	} 	//press right
}

function mapMove() {
	map_x+=x_plus;
	map_y+=y_plus;
	document.getElementById('map').style.backgroundPosition = -map_x + "px" + " " + -map_y  + "px";
	document.getElementById('mini-map').style.backgroundPosition = -0.2*map_x + "px" + " " + -0.2*map_y  + "px";
		step_now++;
      		if (step_now < step) {
      			setTimeout("mapMove()",time);
      		}
}

function buildingControl(building_x, building_y) {
	point_x = building_x;
	point_y = building_y;
	pointMove(map_x, map_y);
}
function pointMove(map_x_now, map_y_now) {
	a = map_x_now - point_x;
	b = map_y_now - point_y;
	if(a > speed) {
		x_plus = -speed;
	}else if(a < -speed){
		x_plus = speed;
	}else{
		x_plus = 0;
	}
	if(b > speed) {
		y_plus = -speed;
	}else if(b < -speed){
		y_plus = speed;
	}else{
		y_plus = 0;
	}
	map_x+=x_plus;
	map_y+=y_plus;
	if ( !((a > -speed) && (a < speed) && (b > -speed) && (b < speed)) ) {
		document.getElementById('map').style.backgroundPosition = -map_x + "px" + " " + -map_y  + "px";
		document.getElementById('mini-map').style.backgroundPosition = -0.2*map_x + "px" + " " + -0.2*map_y  + "px";
		setTimeout("pointMove(map_x, map_y)",time);
	}
}