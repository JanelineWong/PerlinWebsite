$(document).ready(function(){
    $(".button1").click(function(){
    	$(".hacker, .engineer, .student").hide("slow")
        $(".artist").toggle("slow");
    });
    $(".button1").hover(function(){
    	$(this).css("color", "#FFC0CB");
    }, function(){
    	$(this).css("color", "#000000");
	});
	$(".button2").click(function(){
		$(".artist, .engineer, .student").hide("slow")
        $(".hacker").toggle("slow");
    });
    $(".button2").hover(function(){
    	$(this).css("color", "#DAE8EC");
    }, function(){
    	$(this).css("color", "#000000");
	});
	$(".button3").click(function(){
		$(".artist, .engineer, .hacker").hide("slow")
        $(".student").toggle("slow");
    });
    $(".button3").hover(function(){
    	$(this).css("color", "#E5D1D3");
    }, function(){
    	$(this).css("color", "#000000");
	});
	$(".button4").click(function(){
		$(".artist, .student, .hacker").hide("slow")
        $(".engineer").toggle("slow");
    });
    $(".button4").hover(function(){
    	$(this).css("color", "#959690");
    }, function(){
    	$(this).css("color", "#000000");
	});
});


