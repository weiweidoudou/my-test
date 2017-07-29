$(function() {
	$(".changeSkin li").click(function() {
		switchSkin((this.id));
	})

	var $id = $.cookie("MySkin");
	if($id) {
		switchSkin($id);
	}

})
  
function switchSkin(id) {
	$("#" + id).html("✔")
		.siblings().html("");

	$("#cssSheet").attr("href", "css/" + id + "Style.css");
	var $cookie = $.cookie("MySkin", id, {
		path: '/',
		expires: 10
	});
}
