$(document).ready(function(){
	
	setTimeout(function(){$("#blind").animate({'opacity':[0, 'easeOutCubic']},500);},1000);
	
	//Click Event for <a>
	$("a").click(function(i) {
		var n = $(this);
		if(n.attr("target") === "_self") {
			i.preventDefault();
			$("#blind").animate({
				'opacity': 1
			}, {
				duration: 500,
				easing: "easeOutQuad",
				complete: function() { 
					//console.log(n.attr("href"));
					window.location.href = n.attr("href");
				}
			});
		}
	});
}); 


//Back to Page Top
function Page_BackToTop(){  
	$("body").animate({'scrollTop':[0, 'easeOutExpo']},500);
} 
