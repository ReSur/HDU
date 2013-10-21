var message_switch = false;
var img = new Image();
img.src = 'images/map.jpg';
img.onload = function() {
	$(".loading").remove();
	setInterval("point()",500);	//设置重载周期(毫秒)
}
function point(){
	$(".position-circle").fadeToggle();
}
function messageControl(){
	if (!message_switch) {
		$("#message-tab").show();
		$("#message-tab").addClass("class-animation-in");
		setInterval('loadXMLDoc()',10000);	//设置重载周期(毫秒)
	}else {
		$("#message-tab").slideUp("slow");
		$("#message-tab").removeClass("class-animation-in");
	}
	message_switch = !message_switch;
}

$(document).ready(function(){
	$(".setting").click(function(){
		$(".mini-map").fadeToggle();
	});
	$(".user").click(function(){
		$(".map-info").slideToggle();
	});
});