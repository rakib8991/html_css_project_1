(function($){

    jQuery( document ).ready(function() {
       jQuery('.berger-menu').click(function(){
           jQuery('.menu-area').toggle();
       });
    });

    jQuery(window).resize(function(){
        var displaySize = $(window).width();
		if(displaySize > 983){
			jQuery('.menu-area').removeAttr('style');
		}
    });

}(jQuery))