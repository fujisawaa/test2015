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



