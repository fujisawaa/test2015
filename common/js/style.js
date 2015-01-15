
/* includeArea */
/*$(function(){
	var include = "/include.html #target";
	$("#includeArea").load(include, function(){
		return false;
	});
});*/


/* pagetop */
$(function(){
	loadWindow();
	window.onresize = function(){
		loadWindow();
	}


	function pagetopStop(){
        scrollHeight = $(document).height(); 
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        footHeight = $("#footer").innerHeight();

        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pagetop").css({
                "position":"absolute",
                "bottom": "0px"
            });
        } else {
            $("#pagetop").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
	}

	function loadWindow(){
	
    var appVersion = window.navigator.appVersion.toLowerCase();
    if (appVersion.indexOf("msie 7.") != -1||appVersion.indexOf("msie 8.") != -1){
		    $(window).scroll(function(){
				pagetopStop();
			});
	} else if(($(window).height())+300<document.body.clientHeight){
    $('#pagetop').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#pagetop').fadeIn();
        }
        else {
            $('#pagetop').fadeOut();
		}
		pagetopStop();
    });
	}else{

		    $(window).scroll(function(){
				pagetopStop();
			});

	}
	}
	
    $('a[href^=#], #pagetop').click(function(e){
		e.preventDefault();
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, 300, 'swing');
		return false;
    });
	

});


/*fontsizeResizer*/
$(function(){
	$("#font-size").fontSize();
});


/* popupWindow */
/* $(function(){
	$(".popupwindow").click(function(){
		window.open(this.href,"windowName","width=700,height=960,resizable=yes,scrollbars=yes");
		return false;
	});
}); */


/* rollover */
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_n."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_n.", "_o."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_o.", "_n."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}


/* accordion */
$(function(){
	$(".accordionDl dd").hide();
	$(".accordionDl dt a").click(function(){
		$(this).parent().next().slideToggle();
		$(this).parent().toggleClass("active");
	});
});


/*opa*/
$(function(){
	$('.opa').hover(
		function(){
			$("img", this).fadeTo(200, 0.6);
		},
		function(){
			$("img", this).fadeTo(1, 1.0);
		}
	);
});