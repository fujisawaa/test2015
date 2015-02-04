/* pagetop */

$(function(){

	$(window).on('load',function(){
	$('html, body').animate({scrollTop:0},1);
	$('#ttlArea-Right').css({display:'none'});
	});

	$(window).on('load scroll resize', function(){

		scrTop = $(window).scrollTop(); //スクロール量
		winHeight = $(window).height(); //ウィンドウの高さ
		scrBottom = scrTop + winHeight; //スクロールバーの下

		ttlAreaCH = $('#ttlAreaContents02').height();//ttlAreaにくっついていて欲しい
		startrr01 = $('#section01').offset().top - ttlAreaCH - 55;
		startrr02 = 240;
		console.log(scrTop);

		//ttlAreaエレベーター
		if(scrTop < startrr01){
			$('#ttlAreaContents').css({position:'fixed',top:'55px'});
		}else {
			$('#ttlAreaContents').css({position:'absolute',top:'auto',bottom:'0'});
		}

		//紹介部分のフェード
		if(scrTop < startrr02){
			$('#ttlArea-Right').css({display:'block'}).addClass('hide');
		}else {
			$('#ttlArea-Right').removeClass('hide');
		}

		//コンテンツ部分のフェード
		$('.sectionLv01').each(function(){
			elmTop = $(this).offset().top;
			elmHeight = $(this).height();
			if(scrTop < elmTop -elmHeight -400){
				$(this).addClass('hide');
			}else{
				$(this).removeClass('hide');
			}
	
		});

	});


});