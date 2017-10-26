// article.js

$(document).ready(function(){

	// -----Tooltip Code-------
	$('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').hover(function(){
    	showToolDef($(this));
    })  

    function showToolDef(define){
    	var definition = $(define).data("definition");
    	$("#destination").html(definition);

    }

    // ----Sidebar Fixed Code--------

    var $help = $("#help-container");
    var $window = $(window);
    var helpHeight = $help.parent().height();
    var helpWidth = $help.parent().width() -30;
    var top = $help.parent().offset().top;
    var bottom = top+helpHeight;
    var marginTop = parseInt($help.parent().css("margin-top").replace("px",""));
    var marginBottom = parseInt($help.parent().css("margin-bottom").replace("px",""));
    // console.log(helpHeight);
    // console.log(bottom);

        $window.bind("scroll resize", function() {
        	scrollHelp($help, marginTop, helpWidth, helpHeight,top)
    	}).scroll();


    $window.resize(function(){
        // console.log("resizing")
        
	    $help = $("#help-container");
	    $window = $(window);
	    helpHeight = $help.parent().height();
	    helpWidth = $help.parent().width() -30;
	    top = $help.parent().offset().top;
	    bottom = top+helpHeight;
	    marginTop = parseInt($help.parent().css("margin-top").replace("px",""));
	    marginBottom = parseInt($help.parent().css("margin-bottom").replace("px",""));
        // console.log(helpHeight);
        // console.log(helpWidth);

        scrollHelp($help, marginTop, helpWidth, helpHeight,top)

    	});

    $("#my-toggle").click(function(){
    	// console.log($(".navbar-collapse").height())
    	if ($(".navbar-collapse").height() < 0){
    		// console.log("open");
    		var newtop = top +137;
    		var openInt = setInterval(function(){
    			while (top < newtop){
    			top = top + (137./6);
    			// console.log(top)
    			scrollHelp($help, marginTop, helpWidth, helpHeight,top)
}
		clearInterval(openInt);
		},100);
    		
    	}
    	else{
    		// console.log("close");
    		var newtop = top -137;
    		var closeInt = setInterval(function(){
    			while (top > newtop){
    			top = top - (137./6);
    			// console.log(top)
    			scrollHelp($help, marginTop, helpWidth, helpHeight,top)
}
		clearInterval(closeInt);
		},100);
    	}
    })
	
	function scrollHelp(help, marginTop, helpWidth, helpHeight,top){
		var gap = $window.height() - $help.height() - marginTop;
        var bottomHeight = $(document).height() -( $("#article-body").offset().top + $("#article-body").height());
        var visBottom = bottomHeight - ($(document).height() - $(window).scrollTop() - $(window).height());
        // console.log(visBottom);
        $help.css({
            position: "fixed",
            margin: "0px 15px"
        })
        $help.width(helpWidth);
        $help.height(helpHeight);
        var scrollTop = $window.scrollTop()
            if (scrollTop < top - marginTop-50) {
                $help.css({
                    top: (top - scrollTop) + "px",
                    bottom: "auto"
                });
            } else if (visBottom > gap) {
                $help.css({
                    top: "auto",
                    bottom: visBottom + "px"
                });
            } else {
                $help.css({
                    top: marginTop+50,
                    bottom: "auto"
                });
            }
	}


});