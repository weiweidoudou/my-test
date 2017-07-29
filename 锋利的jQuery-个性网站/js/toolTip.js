$(function(){
	var myTitle;
	$(".new a").hover(function(e){
		
		myTitle=this.title;
		this.title="";
		$("body").append("<div id='myTitle'>"+myTitle+"</div>");
		$("#myTitle").css({
			top:e.pageY+20+"px",
			left:e.pageX+20+"px"
		});
	},function(){
		$("#myTitle").remove();
		this.title=myTitle;
	}).mousemove(function(e){
		$("#myTitle").css({
			top:e.pageY+20+"px",
			left:e.pageX+20+"px"
		});
	});
})
