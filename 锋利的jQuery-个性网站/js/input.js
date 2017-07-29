$(function(){
	var $defaultPH;
	$(".header input").focus(function(){
		$defaultPH=$(this).attr("placeholder");
		$(this).attr("placeholder","");
		}).blur(function(){
			if($(this).attr("placeholder")==""){
				$(this).attr("placeholder",$defaultPH);
			}
		}).keyup(function(e){
			if(e.which==13){
				alert("回车提交表单");
			}
		})
})
