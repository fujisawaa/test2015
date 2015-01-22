/* pagetop */

$(function(){


	var scrollDisp = $(".sectionLv01");
	delayHeight = 100;

	scrollDisp.css({opacity:'0'});
	$('html, body').animate({scrollTop:0},1);


	$(window).on('load scroll resize', function(){

		scrTop = $(window).scrollTop(); //スクロール量
		winHeight = $(window).height(); //ブラウザ縦サイズ
		scrBottom = scrTop + winHeight;

		console.log("scrBottom："+ scrBottom);

		if(scrBottom < 1406){
			$('#ttlAreaContents').css({position:'fixed',top:'101px'});
		}else {
			$('#ttlAreaContents').css({position:'absolute',top:'auto'});
		}

		scrollDisp.each(function(){
			var setThis = $(this), //.sectionLv01
			elmTop = setThis.offset().top, //.sectionLv01の上からの位置
			elmHeight = setThis.height(); ////.sectionLv01の高さ
			if(scrTop > elmTop - winHeight + delayHeight && scrTop < elmTop + elmHeight){
				setThis.stop().animate({opacity:'1'}, 500);
			}else if(scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
				setThis.stop().animate({opacity:'0'}, 500);
			}
		});

	});


});