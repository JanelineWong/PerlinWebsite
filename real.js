$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle("slow");
    });
    $("button").hover(function(){
    	$(this).css("color", "pink");
    }, function(){
    	$(this).css("color", "black");
	});
});

