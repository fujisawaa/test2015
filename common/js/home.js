$(function(){

	var setWrap = $('#contentsWrapper'),
	setBase = $('.stageBase'),
	scrollSpeed = 1000,
	scrollEasing = 'swing',
	slideSpeed = 500,
	slideEasing = 'linear';


	$(window).on('load scroll resize',function(){
		$('html,body').stop();
		var wdHeight = $(window).height();
		setBase.css({height:wdHeight});
		$('#home').css({height:wdHeight});
		scrTop = $(window).scrollTop();
		console.log("scrTop:"+scrTop);

		//scrollTrigger
		sbHeight = $('#stage2').offset().top;

		sb01Height = $('#stage1').offset().top;
		sb02Height = sbHeight;
		sb03Height = $('#stage3').offset().top;
		sb04Height = $('#stage4').offset().top;
		sb05Height = $('#stage5').offset().top;
		sb06Height = $('#stage6').offset().top;

		sb01Switch = sbHeight*0.7;
		sb02Switch = sbHeight*1.5;
		sb03Switch = sbHeight*2.5;
		sb04Switch = sbHeight*3.5;
		sb05Switch = sbHeight*4.5;
		sb06Switch = sbHeight*5.5;

		//console.log(sb01Height);
		//console.log(sb02Height);
		//console.log(sb03Height);
		//console.log(sb04Height);
		//console.log(sb05Height);
		//console.log(sb06Height);


		if(sb01Switch < scrTop ){
			$('html,body').animate({scrollTop:sb02Height},100);
		}
	});



});
