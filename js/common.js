(function(){
	TouchSlide({ 
	    slideCell:"#nav",
	    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	    mainCell:".bd ul", 
	    effect:"left", 
	    autoPlay:true,//自动播放
	    autoPage:true//自动分页
	});

	TouchSlide({ 
	    slideCell:"#articlePic",
	    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	    mainCell:".bd ul", 
	    effect:"left", 
	    autoPlay:true,//自动播放
	    autoPage:true//自动分页
	});
})();

;$(function(){

	$("#menuBtn").click(function(){
		$("#menuBox").slideToggle();
	});
	$("#menuClose").click(function(){
		$("#menuBox").slideToggle();
	});

	$("#secTitNav li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$("#secTitCont").find(".secSub").eq(idx).show().siblings().hide();
	});

	$("#secTitNav2 li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$("#secTitCont2").find(".secSub").eq(idx).show().siblings().hide();
	});
	/**superman修改start**/
	$("#secTitNav li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$("#secTitCont").find(".secList3Sub").eq(idx).show().siblings().hide();
	});
	$("#secTitNav2 li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$("#secTitCont").parent().next().find(".secList3Sub").eq(idx).show().siblings().hide();
	});
/**superman修改end**/


	$(".secNav li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$(this).parent().siblings(".secCont").find(".secSub").eq(idx).show().siblings().hide();
	});

	$("#articleNav li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var idx = $(this).index();
		$("#articleWrap").find(".articleCont").eq(idx).show().siblings().hide();
	});

	$(".sNavSub em").click(function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur").siblings("p").css({"height":"30px"});
		}else{
			$(this).addClass("cur").siblings("p").css({"height":"auto"});
		}
	});

	$(".secAreaKey").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var key = $(this).find("a").html();
		var idx = null;
		if(key == "A" || key == "B" || key == "C" || key == "D" || key == "E"){
			idx = 0;
		}else if(key == "F" || key == "G" || key == "H" || key == "J" || key == "K"){
			idx = 1;
		}else if(key == "L" || key == "M" || key == "N" || key == "P" || key == "Q"){
			idx = 2;
		}else if(key == "R" || key == "S" || key == "T" || key == "W" || key == "X"){
			idx = 3;
		}else if(key == "Y" || key == "Z" ){
			idx = 4;
		}
		var html = $(this).next(".secAreaCont").html();
		$(".secAreaBox").eq(idx).html(html).siblings(".secAreaBox").html("");
	});

	$("#fontTop").click(function(){
		if($("#fontMid").is(":hidden")){
			$("#fontMid").show();
		}else{
			$("#fontMid").hide();
		}
	});

	$("#fontMid a").click(function(){
		$(".articleCont p").css({"font-size":$(this).attr("size")+"px"});
		$("#fontMid").hide();
	});
	$(".shang360_search").submit(function(){
		if($.trim($(this).find("input[name=keywords]").val()) == ""){
			alert("请填写搜索内容");
			return false;
		}
	});
	$("#toLy").click(function(event){
		event.preventDefault();
		var id = $(this).attr("href");
		
		var top = $(id).position().top-45;

		$("html,body").animate({"scrollTop":top+"px"},600);
	});
		var id = document.location.hash;
		if(!!id){
			var top = $(id).position().top-45;
			$("html,body").animate({"scrollTop":top+"px"},600);
		}
	
});