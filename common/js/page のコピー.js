/* pagetop */

$(function(){

	showFlag = 0;
	var scrollDisp = $(".sectionLv01");
	delayHeight = 0;

	scrollDisp.css({opacity:'0'});
	$('html, body').animate({scrollTop:0},1);

	
	$('#ttlArea-Right').css({opacity:'0'});
	
	$(window).on('load scroll resize', function(){

		console.log('フラグ：'+showFlag);

		scrTop = $(window).scrollTop(); //スクロール量
		winHeight = $(window).height(); //ウィンドウの高さ
		scrBottom = scrTop + winHeight; //スクロールバーの下

		ttlAreaCH = $('#ttlAreaContents02').height();//ttlAreaにくっついていて欲しい
		ttlAreaCH02 = $('#ttlAreaContents').height();
		startrr01 = $('#section01').offset().top - ttlAreaCH - 55;
		startrr02 = ttlAreaCH02 - 55;
		startrr03 = ttlAreaCH/2;




		if(scrTop < startrr01){
			$('#ttlAreaContents').css({position:'fixed',top:'55px'});
		}else {
			$('#ttlAreaContents').css({position:'absolute',top:'auto',bottom:'0'});
			sectionAppear();
		}


	function sectionAppear(){
		scrollDisp.each(function(){
			var setThis = $(this), //.sectionLv01
			elmTop = setThis.offset().top; //.sectionLv01の上からの位置

			console.log('elmTop：'+elmTop);
			elmHeight = setThis.height(); ////.sectionLv01の高さ
			if(scrTop < elmTop - elmHeight){
				setThis.stop().animate({opacity:'1'}, 500);
			}
		});
	}

	});


});