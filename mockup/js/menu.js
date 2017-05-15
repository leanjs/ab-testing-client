$(function() {
	
$('.version_select').find('li a').each(function(){
	$(this).click(function(){
		
		$("body").removeClass();	
		var id_val=$(this).attr('id');
		//alert(id_val);
		$("body").addClass(id_val);		
		});
});


	
	
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 650) {
		$('.evolcommande_horizontalbar').addClass("fixedbar");
	} else {
		$('.evolcommande_horizontalbar').removeClass("fixedbar");
	}
});




$( ".responsive_menuicon" ).click(function() {
	$(".sbnew_menu").toggleClass("open_mobilemenu");
});

$( ".compatible_printers .more" ).click(function() {
	$( ".compatible_list" ).toggle( "slow" );
	$(".compatible_printers").toggleClass("open");
});




$( ".seedrums_button" ).click(function() {
	$(".left_text_block").toggleClass("seedrums_content");
});


	
});



/*$(document).ready(function(){
$('.navbar-collapse .navbar-nav').find('li').each(function(){
	$(this).find('a .caret').click(function(){
		
		//$(this).closest('.dropdown-menu').addClass('123');
		
		//($(this).parent().parent().attr('class'));
		
		//$(this).parent().parent().find('.dropdown-menu').css('display', 'none');
		$(this).parent().parent().find('.dropdown-menu').css('display', 'none');
		
	});
	
});	
	
});*/



$(document).ready(function(){
$('.navbar-collapse .navbar-nav').find('li').each(function(){	
	$(this).find('a .caret').click(function(){	
	//$(this).parent().parent().parent().find('.dropdown').removeClass('open_menu');		
		$(this).parent().parent().toggleClass('open_menu');
	});	
});		
});


























