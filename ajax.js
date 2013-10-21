function postContent(send) {
	if (send == "") {
		alert("请输入内容后再提交！");
	}
	else {
		document.getElementById('message-content').value = "";
		loadXMLDoc(send);
	}
}
function loadXMLDoc(send)
{
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (typeof send == "undefined"){
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("message-box").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","get.php",true);
		xmlhttp.send();
	}
	else {
		xmlhttp.open("POST","post.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("message-content="+send);
		loadXMLDoc();	//发出后立即刷新
	}
}