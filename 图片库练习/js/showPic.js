function addLoadEvent(func) {
	var oldOnload = window.onload;
	if(typeof(window.onload) != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		}
	}
}



function preparePlaceHolder(){
	var placeHolder=document.createElement("img");
	placeHolder.id="placeHolder";
	placeHolder.setAttribute("src","img/1.jpg")
	
	var description=document.createElement("p");
	description.id="description";
	description.innerHTML="ice ccream"; 
	
	var body=document.getElementsByTagName("body")[0];
	body.appendChild(placeHolder);
	body.appendChild(description);
	
}

//为a添加点击事件
function prepareGallery() {

	if(!document.getElementById("imageList")) return false;
	
	
	var imgList = document.getElementById("imageList");
	var lists = imgList.getElementsByTagName("a");

	
	for(var i = 0; i < lists.length; i++) {
		lists[i].onclick = function() {
		
			return !showPic(this);
			
		} 
	}

}
//将a的某些信息显示在placeHolder和description上
function showPic(a) {
	if(!document.getElementById) return false;
	if(!document.getElementById("placeHolder")) return false;
	var placeHolder = document.getElementById("placeHolder");
	placeHolder.src = a.href;
	if(document.getElementById("description")) {
		var description = document.getElementById("description");
		description.innerHTML= a.title;
	}
	return true;

}
 
addLoadEvent(preparePlaceHolder); 
addLoadEvent(prepareGallery);