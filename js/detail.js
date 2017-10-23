$(function(){ 
            
		   $(".head_icon2").click(function () {
		   $("#listNav").slideToggle(600);
		   });   
	      $(".tz_btn").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  });
		   $(".last_btn01").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  }); 
		    $(".last_btn02").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  }); 
		   $(".tl06").click(function () {
		   $(".twbox").slideToggle(600);
		   });	
		   $(".tl06").toggle(function(){
			$(".tl06 i").addClass("bb02");
			$(".tl06 i").removeClass("bb01");
	},function(){
			$(".tl06 i").addClass("bb01");
			$(".tl06 i").removeClass("bb02");
		  });
	$(".tl03 a").toggle(function(){
			$("#tb01").removeClass("h_k");
			$(".tl03 a").text("收起");
			$(".tl03 a").addClass("bg02");
			$(".tl03 a").removeClass("bg01");
	},function(){
		    $("#tb01").addClass("h_k");	
		    $(".tl03 a").text("展开");
			$(".tl03 a").addClass("bg01");
			$(".tl03 a").removeClass("bg02");
		  });
	$(".tl05 a").toggle(function(){
			$("#tb01").removeClass("h_k");
			$(".tl05 a").text("收起");
			$(".tl05 a").addClass("bg02");
			$(".tl05 a").removeClass("bg01");
	},function(){
		    $("#tb01").addClass("h_k");	
		    $(".tl05 a").text("展开");
			$(".tl05 a").addClass("bg01");
			$(".tl05 a").removeClass("bg02");
		  });
});

$(function(){ 
            
		   $(".head_icon3").click(function () {
		   $("#listNav1").slideToggle(600);
		   });   
	      $(".tz_btn").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  });
		   $(".last_btn01").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  }); 
		    $(".last_btn02").click(function(){
		$('html,body').animate({scrollTop:$('.msg_box').offset().top}, 800);
	  }); 
		   $(".tl06").click(function () {
		   $(".twbox").slideToggle(600);
		   });	
		   $(".tl06").toggle(function(){
			$(".tl06 i").addClass("bb02");
			$(".tl06 i").removeClass("bb01");
	},function(){
			$(".tl06 i").addClass("bb01");
			$(".tl06 i").removeClass("bb02");
		  });
	$(".tl03 a").toggle(function(){
			$("#tb01").removeClass("h_k");
			$(".tl03 a").text("收起");
			$(".tl03 a").addClass("bg02");
			$(".tl03 a").removeClass("bg01");
	},function(){
		    $("#tb01").addClass("h_k");	
		    $(".tl03 a").text("展开");
			$(".tl03 a").addClass("bg01");
			$(".tl03 a").removeClass("bg02");
		  });
	$(".tl05 a").toggle(function(){
			$("#tb01").removeClass("h_k");
			$(".tl05 a").text("收起");
			$(".tl05 a").addClass("bg02");
			$(".tl05 a").removeClass("bg01");
	},function(){
		    $("#tb01").addClass("h_k");	
		    $(".tl05 a").text("展开");
			$(".tl05 a").addClass("bg01");
			$(".tl05 a").removeClass("bg02");
		  });
});

/*选项卡切换*/
$(function(){
	
	$("#list a").each(function(index){
		$(this).click(function(){
			$(".btn-content").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list a").removeClass("active").eq(index).addClass("active")
		})

	})
	/*影响m.78.cn首页选项卡，所以注释
	$("#list2 a").each(function(index){
		$(this).click(function(){
			$(".list_con").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list2 a").removeClass("active").eq(index).addClass("active")
		})

	})
	$("#list3 a").each(function(index){
		$(this).click(function(){
			$(".cont4_l").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list3 a").removeClass("active").eq(index).addClass("active")
		})

	})
	
	$("#list4 a").each(function(index){
		$(this).click(function(){
			$(".list4_con").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list4 a").removeClass("active").eq(index).addClass("active")
		})

	})
	
	$("#list5 a").each(function(index){
		$(this).click(function(){
			$(".cont6_l").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list5 a").removeClass("active").eq(index).addClass("active")
		})

	})
	
	$("#list7 a").each(function(index){
		$(this).click(function(){
			$(".list7_con").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list7 a").removeClass("active").eq(index).addClass("active")
		})

	})
	
	$("#list8 a").each(function(index){
		$(this).click(function(){
			$(".list8_con").css({"display":"none"}).eq(index).css({"display":"block"});
			$("#list8 a").removeClass("active").eq(index).addClass("active")
		})

	})*/
	$(".zzc").hide();
	$(".menu").hide();
	$(".head_icon3").click(function(){
		var temp1= $("#zzc").is(":visible");//是否可见
		if(temp1){
			$(".zzc").hide()
			$(".menu").hide();
		}else{
			$(".zzc").show()
			$(".menu").show();
		}
	})
	$(".menu_t em").click(function(){
		$(".zzc").hide()
		$(".menu").hide();
	})
})

function setTab(name,cursel,n){
            for(i=1;i<=n;i++){
                var menu=document.getElementById(name+i);
                var con=document.getElementById("con_"+name+"_"+i);
                menu.className=i==cursel?"active":"";
                con.style.display=i==cursel?"block":"none";
            }
        }


















