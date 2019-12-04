$(function(){
	$(function(){
		$(".main1 a").focusout(function(){
			$(".sub").height(200);
			$(".sub1").css({"display" : "block"});
			$(".st1").focus();
		});
		$(".ed1").focusin(function(){
			$(".main2 a").focus();
		});
		$(".main2 a").focusout(function(){
			$(".sub").height(200);
			$(".sub2").css({"display" : "block"});
			$(".st2").focus();
		});
		$(".ed2").focusin(function(){
			$(".main3 a").focus();
		});
		$(".main3 a").focusout(function(){
			$(".sub").height(200);
			$(".sub3").css({"display" : "block"});
			$(".st3").focus();
		});
		$(".ed3").focusin(function(){
			$(".main4 a").focus();
		});
		$(".main4 a").focusout(function(){
			$(".sub").height(200);
			$(".sub4").css({"display" : "block"});
			$(".st4").focus();
		});
		$(".ed4").focusin(function(){
			$(".sub").height(0);
		});
		$(".sub_back").hover(function(){
			$(".sub").toggleClass("hide");
		});


		var v=370;
		var w=370;
		var x=370;
		var y=370;
		var amount1=0;
		var amount2=0;
		var amount3=0;
		var amount4=0;
		var id=setInterval(leftMoving, 3000);
		var id2=setInterval(leftMoving2, 3000);
		var id3=setInterval(leftMoving3, 3000);
		var id4=setInterval(leftMoving4, 3000);
		function leftMoving(){
			amount1-=v;
			$(".sub1 .move").animate({left:amount1}, 500, function(){
				$(this).append($(".sub1 .move li:first-child"));
				amount1+=v;
				$(this).css({left:amount1});
			});
		}
		function leftMoving2(){
			amount2-=w;
			$(".sub2 .move").animate({left:amount2}, 500, function(){
				$(this).append($(".sub2 .move li:first-child"));
				amount2+=w;
				$(this).css({left:amount2});
			});
		}
		function leftMoving3(){
			amount3-=x;
			$(".sub3 .move").animate({left:amount3}, 500, function(){
				$(this).append($(".sub3 .move li:first-child"));
				amount3+=x;
				$(this).css({left:amount3});
			});
		}
		function leftMoving4(){
			amount4-=y;
			$(".sub4 .move").animate({left:amount4}, 500, function(){
				$(this).append($(".sub4 .move li:first-child"));
				amount4+=y;
				$(this).css({left:amount4});
			});
		}
	});
	var o=0;
	$(".lang").click(function(e){
		e.preventDefault();
		$(".lang2").addClass("active");
		o=$(".lang2").height();
		if (o > 80) {
			$(".lang2").removeClass("active");
		}
	});

	$(".main").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$(".sub1").hover(
		function(){
			$(".main1").addClass("active");
		},
		function(){
			$(".main1").removeClass("active");
		}
	);
	$(".sub2").hover(
		function(){
			$(".main2").addClass("active");
		},
		function(){
			$(".main2").removeClass("active");
		}
	);
	$(".sub3").hover(
		function(){
			$(".main3").addClass("active");
		},
		function(){
			$(".main3").removeClass("active");
		}
	);
	$(".sub4").hover(
		function(){
			$(".main4").addClass("active");
		},
		function(){
			$(".main4").removeClass("active");
		}
	);
	var filter = "win16|win32|win64|mac|macintel";
	if( navigator.platform  ){
        if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
             location.href = "https://anjs950601.github.io/project3m/";
        }
 	}
});
