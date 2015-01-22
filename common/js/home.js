	$(document).ready(function() {

		

		$('#fullpage').fullpage({
			'resize' : true,
			'anchors': ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
			'verticalCentered': false,
			'css3': true,
			'navigation': true,
			'continuousVertical': true,
			'onLeave': function(index, nextIndex, direction){
				$(".enter").css("opacity","0");
			},
			'afterLoad': function(anchorLink, index){
					start01();
			}
		});

		start01();


		

		function start01() {
			$(".active.section .enter ").delay(500).animate({"opacity":"1"},1000,function(){
				
			});
		}

		function start02() {
			$("div:not('.active')>.enter").css("opacity","0");
		}


	});


$(function() {
     h = $(window).height();
     w = $(window).width();
 
    $('#wrapper').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
    $('#loader img').delay(5000).addClass("loadEnd");
    $('#loader-bg ,#loader').delay(200).fadeOut(300);
    $('#wrapper').css('display', 'block');
visualSlide();
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
    setTimeout('stopload()',10000);
});
 
function stopload(){
    $('#wrap').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
}

function visualSlide(){
	$("#visualSlide,#visualSlide ul").css({display:"block"});
	$("#visualSlide ul").delay(600).animate({ 
    top: "0px"
  }, 1500, function(){
		visualSlideno();
	});
}

function visualSlideno(){
	$("#visualSlide,#visualSlide ul").delay(100).fadeOut("1000", function(){
		$(this).css("display","none");
	});
}
