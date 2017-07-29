$(function(){
	$(".a_top a").mouseover(function(){
		var index=$(".a_top a").index(this);
		$(".a_bottom").animate({
			left:-790*index+"px"
		},1000);
	})
})
