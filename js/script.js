$(document).ready(function(){
	$('.button-collapse').sideNav({
		menuWidth: 170, 
		edge: 'left', 
		closeOnClick: true, 
		draggable: true
	});

	$('.slider').slider();

	$('.pic').hover(
       function(){ 
       	$(this).removeClass('hover');

       },
       function(){
       	$(this).addClass('hover');
       }
	);
	$('.postgre').hover(
       function(){ 
       	$(this).removeClass('hover');

       },
       function(){
       	$(this).addClass('hover');
       }
	);

});


$(window).scroll(function(){
	var opacity = 1;
	var lastScrollTop = 0;
	var st = $(this).scrollTop();
		if(st == 0)
	    	$('.navbar-fixed').css('opacity','5');
		if (opacity > 0.5 && (st > lastScrollTop)){
	    	$('.navbar-fixed').css('opacity','-=0.01');
	    	opacity -= 0.01;
		}else if(opacity < 1){
	    	$('.navbar-fixed').css('opacity','+=0.01');
	    	opacity += 0.01;
	   }
	   lastScrollTop = st;
});

