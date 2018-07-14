$(document).ready(function(){
    $(".button1").click(function(){
        $(".artist").toggle("slow");
    });
    $(".button1").hover(function(){
    	$(this).css("color", "pink");
    }, function(){
    	$(this).css("color", "black");
	});
	$(".button2").click(function(){
        $(".hacker").toggle("slow");
    });
    $(".button2").hover(function(){
    	$(this).css("color", "#dae8ec");
    }, function(){
    	$(this).css("color", "black");
	});
	$(".button3").click(function(){
        $(".student").toggle("slow");
    });
    $(".button3").hover(function(){
    	$(this).css("color", "#e5d1d3");
    }, function(){
    	$(this).css("color", "black");
	});
	$(".button4").click(function(){
        $(".engineer").toggle("slow");
    });
    $(".button4").hover(function(){
    	$(this).css("color", "#535455");
    }, function(){
    	$(this).css("color", "black");
	});
});

