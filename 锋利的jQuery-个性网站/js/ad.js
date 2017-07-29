//$(function(){
//	$(".main ul li").mouseover(function(){
//		var index=$(".main ul li").index(this);
//		
//		$(".main>img").attr("src","img/ads/"+(index+1)+".jpg"); 
//		$(this).addClass("highLight")
//		.siblings().removeClass("highLight");
//	})
//})
$(function() {
	var index = 0;
	var timer;
	$(".main ul li").mouseover(function() {

		index = $(".main ul li").index(this);
		showImg(index);

	}).eq(0).mouseover();

	
	$(".main").hover(function() {
		clearInterval(timer);
	}, function() {

		 timer= setInterval(function() {
			if(index>4){
				index=0;
			}
			showImg(index);
			index++;
		}, 1000)
	}).trigger("mouseout");

})

function showImg(index) {
	$(".main ul li").eq(index).addClass("highLight")
		.siblings().removeClass("highLight");

	$(".adImgs img").eq(index).fadeIn()
		.siblings().fadeOut();
}