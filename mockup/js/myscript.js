$(function() {
    var header = $(".tips_blondes_block");
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 240) {
            header.addClass("scroll_fixed");
        } else {
            header.removeClass("scroll_fixed");
        }
    });
	
	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 650) {
            $('.evolcommande_horizontalbar').addClass("fixedbar");
        } else {
            $('.evolcommande_horizontalbar').removeClass("fixedbar");
        }
    });
	
	
	
    var iw = $('body').innerWidth();
	var header2 = $(".insidepage");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 240 && iw >= 767) {
            header2.addClass("scroll_fixed");
        } else {
            header2.removeClass("scroll_fixed");
        }
    });
	
	var header3 = $(".checkout_topheader_block");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 240) {
            header3.addClass("scroll_fixed");
        } else {
            header3.removeClass("scroll_fixed");
        }
    });
	
$( ".responsive_searchbox_button" ).click(function() {
$( ".search_block .navbar-form" ).toggle( "slow" );
$(".responsive_searchbox_button").toggleClass("active");
$("header").toggleClass("addsearch");
});

	
$( ".responsive_menu_icon" ).click(function() {
$( ".menumain" ).toggle( "slow" );
$(".responsive_menu_icon").toggleClass("active");
$("#block_top_menu").toggleClass("responsive_menu_block");
});


$( ".select_responsive_button" ).click(function() {
$( ".select_responsive_block" ).toggle( "slow" );
$(".tips_blondes_block").toggleClass("active");
});


$( ".compatible_printers .more" ).click(function() {
$( ".compatible_list" ).toggle( "slow" );
$(".compatible_printers").toggleClass("open");
});


$( ".responsive_menuicon" ).click(function() {
$(".sbnew_menu").toggleClass("open_mobilemenu");
});

$( ".dropdown" ).hover(function() {
$(".dropdown-toggle").toggleClass("active");
});





$('.version_select').find('li a').each(function(){
	$(this).click(function(){
		
		$("body").removeClass();	
		var id_val=$(this).attr('id');
		//alert(id_val);
		$("body").addClass(id_val);		
		});
});





});



$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


 jQuery(document).ready(function ($) {
 $('#tabs').tab();
 });
 
 //custom-select
function DropDown(el) {
				this.custom_select = el;
				this.placeholder = this.custom_select.children('span');
				this.opts = this.custom_select.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.custom_select.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val);
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var custom_select = new DropDown( $('.custom_select') );

				$(document).click(function() {
					// all dropdowns
					$('.select_dropdown').removeClass('active');
				});

			});
	
	
// slider 	
	



// menu
var menuDelayOpen = null;
$(function() {
	initTopMenu();
});

$(window).bind('resize', initTopMenu);
window.onorientationchange = function() {
	initTopMenu();
}

function initTopMenu(e) {
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	
	if (winWidth < 900) {

		$(".bouteilles_menudrop").hover(
		    function () {
		    		$(".bouteilles_submenu").show();
		    		$(".bouteilles_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".bouteilles_menudrop > a").removeClass("active");
			        $(".bouteilles_submenu").hide();
		    }
		);
			 
		$(".futs_menudrop").hover(
		    function () {
			        $(".futs_submenu").show();
					$(".futs_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".futs_menudrop > a").removeClass("active");
			        $(".futs_submenu").hide();
		    }
		);
			 
		 $(".tireuses_menudrop").hover(
		    function () {
			        $(".tireuses_submenu").show();
					$(".tireuses_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".tireuses_menudrop > a").removeClass("active");
			        $(".tireuses_submenu").hide();
		    }
		);
			 
		$(".verres_menudrop").hover(
		    function () {
			        $(".verres_submenu").show();
					$(".verres_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".verres_menudrop > a").removeClass("active");
			        $(".verres_submenu").hide();
		    }
		);
			 
		$(".coffrets_menudrop").hover(
		    function () {
			        $(".coffrets_submenu").show();
					$(".coffrets_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".coffrets_menudrop > a").removeClass("active");
			        $(".coffrets_submenu").hide();
		    }
		);
		
		
		$(".brewing_menudrop").hover(
		    function () {
			        $(".brewing_submenu").show();
					$(".brewing_menudrop > a").addClass("active");
		    },
		    function () {
			        $(".brewing_menudrop > a").removeClass("active");
			        $(".brewing_submenu").hide();
		    }
		);
		
		
		
		
		
		
		
	} else {
		
		// start init gtm for bottle menu
		var lvl1 = $('.bouteilles_menudrop > a').text().trim();
		var tabs = $('.bouteilles_menudrop').find('[data-toggle]');
		tabs.each(function(){
			var lvl2 = $(this).find('strong').text().trim();
			var tab = $(this).attr('href');
			$(tab+' ul.list a').each(function(){
				$(this).off('click').on('click',function(){
					var link_name = $(this).text().trim();
					sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - type of beer', lvl2+' > '+link_name);
				});
			});
			$(tab+' div.discovery_selection_block a').each(function(){
				$(this).off('click').on('click',function(){
					var link_name = $(this).closest('div.discovery_selection_block').find('.titel').text().trim();
					sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push button', link_name);
				});
			});
			$(tab+' ul.pushs_list a').each(function(){
				$(this).off('click').on('click',function(){
					var link_name = $(this).find('.titel').text().trim();
					sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push right', link_name);
				});
			});
		});
		// end init gtm for bottle menu		

		$(".bouteilles_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
		    		$(".bouteilles_submenu").show();
		    		$(".bouteilles_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".bouteilles_menudrop > a").removeClass("active");
			        $(".bouteilles_submenu").hide();
		    	}, 500);
		    }
		);
		
		// start init gtm for fut menu
		var lvl1 = $('.futs_menudrop > a').text().trim();
		$('.futs_menudrop .menu_left_block ul.futs_list > li div.futs_box a').each(function(){
			$(this).off('click').on('click',function(){
				var link_name = $(this).closest('li').find('.band_liter_size').text().trim();
				link_name = link_name + ' ' + $(this).closest('li').find('.name').text().trim();
				sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push product', link_name);
			});
		});
		$('.futs_menudrop .menu_left_block ul.futs_list > li div.list_block a').each(function(){
			$(this).off('click').on('click',function(){
				var link_name = $(this).text().trim();
				sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push list', link_name);
			});
		});
		/*
		$('.futs_menudrop .menu_right_block ul.pushs_list a').each(function(){
			$(this).off('click').on('click',function(){
				var link_name = $(this).find('.titel').text().trim();
				sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push list', link_name);
			});
		});
		*/
		// end init gtm for fut menu		
		 
		$(".futs_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
			        $(".futs_submenu").show();
					$(".futs_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".futs_menudrop > a").removeClass("active");
			        $(".futs_submenu").hide();
		    	}, 500);
		    }
		);
		 
		$(".tireuses_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
			        $(".tireuses_submenu").show();
					$(".tireuses_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".tireuses_menudrop > a").removeClass("active");
			        $(".tireuses_submenu").hide();
		    	}, 500);
		    }
		);
		 
		// start init gtm for verres menu
		var lvl1 = $('.verres_menudrop > a').text().trim();
		$('.verres_menudrop ul.verres_prodact_list > li a').each(function(){
			$(this).off('click').on('click',function(){
				var link_name = $(this).find('.verres_titel_block').text().trim();
				sb_tracker.menuEvent('lvl2 - click - '+lvl1+' - push product', link_name);
			});
		});
		// end init gtm for verres menu	
		
		$(".verres_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
			        $(".verres_submenu").show();
					$(".verres_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".verres_menudrop > a").removeClass("active");
			        $(".verres_submenu").hide();
		    	}, 500);
		    }
		);
		 
		$(".coffrets_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
			        $(".coffrets_submenu").show();
					$(".coffrets_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".coffrets_menudrop > a").removeClass("active");
			        $(".coffrets_submenu").hide();
		    	}, 500);
		    }
		);
		
		$(".brewing_menudrop").hover(
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	menuDelayOpen = setTimeout(function () {
			        $(".brewing_submenu").show();
					$(".brewing_menudrop > a").addClass("active");
		    	}, 500);
		    },
		    function () {
		    	clearTimeout(menuDelayOpen);
		    	setTimeout(function () {
			        $(".brewing_menudrop > a").removeClass("active");
			        $(".brewing_submenu").hide();
		    	}, 500);
		    }
		);
		
	}

	$('.bouteilles_submenu ul.nav li.nav a').hover(function(){

		var id = ($(this).attr('id')).replace('country_tab_', '');
		$('.bouteilles_submenu .tab-content > .tab-pane').removeClass('active').removeClass('in');
		$('.bouteilles_submenu .tab-content #tabs'+id).addClass('active').addClass('in');


	});

	$('.discovery_content_block').each(function(i){
		$(this).attr('id', 'discovery_block-'+i);

		bnClick.addBanner({
			'selector': '#discovery_block-'+i,
			'category': 'mega menu',
			'action': 'lvl1 – click – Bootled beer – selection',
			'label': $(this).find('.titel').html()
		});
	});

	$('.pushs_list > li').each(function(i){
		$(this).attr('id', 'push_list-'+i);

		bnClick.addBanner({
			'selector': '#push_list-'+i,
			'category': 'mega menu',
			'action': 'lvl1 – click – Bootled beer – right banner',
			'label': $(this).find('.titel').html()
		});
	});

	$('#main-menu-item-4 .futs_list > li').each(function(i){
		$(this).attr('id', 'fut-item-'+i);

		if(i != 4) {
			bnClick.addBanner({
				'selector': '#fut-item-'+i,
				'category': 'mega menu',
				'action': 'lvl1 - click - Kegs - big banner',
				'label': $(this).find('.futs_text_block .band_liter_size').html()+' '+$(this).find('.futs_text_block .name').html()
			});
		} else {
			$(this).find('.links a').each(function(k){
				$(this).attr('id', 'fut-item-list-a-'+k);

				bnClick.addBanner({
					'selector': '#fut-item-list-a-'+k,
					'category': 'mega menu',
					'action': 'lvl1 - click - Kegs - right banner',
					'label': $(this).html()
				});
			});
		}

	});


}





// slider
/*
$(function() { 
 $('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint:480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});*/

$(function() { 

	var already_loaded = false;

	$(window).scroll(function () {

		if(window.outerWidth > 770) {

			if(isScrolledIntoView('.footer_block') && !already_loaded) {

				already_loaded = true;

				$.get(baseUrl+'ajax_category_menu', function(data) {
					$(".slider_block").html(data);

					$('.slider_block').slideDown();

 $('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint:480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});

			}

		}

	});
});


//hello bar

function hide(target) {
    document.getElementById(target).style.display = 'none';
}

// coustome selact
function initCustomSelect()
{
    $(".custom-select").each(function(){
    	if ($(this).parent('.select-wrapper').length == 0)
    	{
	        $(this).wrap("<span class='select-wrapper'></span>");
	        $(this).after("<span class='holder'></span>");
	        
	        var selectedOption = $(this).find(":selected").text();
	        $(this).next(".holder").text(selectedOption);
    	}
    });
    $(".custom-select").unbind('change').change(function(){
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    });

}
function initSelectField()
{
    $(".select_field").each(function(){
    	if ($(this).parent('.select-wrapper').length == 0)
    	{
	        $(this).wrap("<span class='select-wrapper'></span>");
	        $(this).after("<span class='holder'></span>");
	        
	        var selectedOption = $(this).find(":selected").text();
	        $(this).next(".holder").text(selectedOption);
    	}
    });
    $(".select_field").unbind('change').change(function(){
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    });

}

$(document).ready(function(){
	initCustomSelect();
	initSelectField();
	
	$('body').on('click', '.hellobarclosebtn', function(){
		var formData = 'header_hello=1';									 
		$.ajax({
			type: 'POST',
			url: baseDir + 'ajax/set_session.php',
			async: true,
			cache: false,
			dataType : "json",
			data: formData,
			success: function(jsonData) {					
				$('#header_hello_bar_block').fadeOut();
			},
		});
		
		return false;
	});
	$('body').on('click', '.cookiespopupclosebtn', function(){
		var formData = 'footer_cookie=1';									 
		$.ajax({
			type: 'POST',
			url: baseDir + 'ajax/set_session.php',
			async: true,
			cache: false,
			dataType : "json",
			data: formData,
			success: function(jsonData) {					
				$('#footer_cookie_bar_block').fadeOut();
			},
		});
		
		return false;
	});
	if (typeof productLis == 'undefined') {
		if (typeof masonry_width !== 'undefined') {
            $('.product_list').masonry({
                    itemSelector: '.product_list_item',
                    columnWidth:  masonry_width
            });
        }
	}
	
	/*if ($('.social_list').is('ul')) {
		$('.social_list').masonry({
	        itemSelector: '.social_list_item',
	        columnWidth:  207,
	        gutter: 10
		});
	}*/
	
	if ($('.film_list').is('ul')) {
		var imgQueue = [];
		$('.film_list img').each(function () {
			imgQueue.push($(this).attr('src'));
		});
		
		loadNextImage(imgQueue, function () {			
			$('.film_list').masonry({
				itemSelector: '.film_list_item',
				columnWidth:  160,
				isFitWidth: true,
			});
		});
		
	}
	
	if ($('.product_type_2 .product_info_text').is('div')) {
		$('.product_type_2 .product_info_text').dotdotdot();
	}
});

function loadNextImage(imgQueue, callback) {
    if (imgQueue.length > 0) {
        var imgN = new Image();
        imgN.src = imgQueue.shift();
        $(imgN).load(function(){
            loadNextImage(imgQueue, callback);
        });
    }
    else {
    	callback();
    }
}

function authenticationTrigger(origin) {
	dataLayer.push({
		'event':'accountCreated',
		'p' : {
			'origin' : origin
		}
	});
}


