(function($) {
	'use strict';

	jQuery(document).on('ready', function(){

		/*Start Menu JS*/		
		$(window).on('scroll', function(){
			if ( $(window).scrollTop() > 100 ) {
				$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
			} else {
				$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
			}
		});	

		var url = window.location;
	        $('ul.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
	        $('ul.navbar-nav a').filter(function() {
	             return this.href == url;
	        }).parent().addClass('active');

	     $('.navbar .dropdown').hover(function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

			}, function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

			});

			$('.navbar .dropdown > a').click(function(){
			location.href = this.href;
			});			
		/*End Menu JS*/


		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/

		/* Start Scroll To Top*/
	  	$(window).on('scroll', function() {
	    	if ($(this).scrollTop() > 200) {
	      		$('.go-top').fadeIn(200);
	    	} else {
	      		$('.go-top').fadeOut(200);
	      	}
	  	});
  	
	    // Animate the scroll to top
	    $('.go-top').on('click', function(event) {
	        event.preventDefault();
	        $('html, body').animate({scrollTop: 0}, 300);
	    })
	    /* End Scroll To Top */
	  
	    /* Testimonial */
	    $('.testimonial').owlCarousel({
		    loop:true,
		    margin:15,
		    nav:true,
		    autoplay: true,
		    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})	    

		/* Service Testimonial */
	    $('.testimonial-service').owlCarousel({
		    loop:true,
		    margin:15,
		    nav:true,
		    autoplay: true,
		    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		}) 

		/* Project Single Carousel */
	    $('.single-project').owlCarousel({
		    loop:true,
		    margin:15,
		    nav:true,
		    autoplay: true,
		    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		    items: 1,
		    dots: false,
		})


	    /* Client Logo Carousel */
		$('.client').owlCarousel({
		    items:2,
		    loop:true,
		    margin:30,
		    autoplay: true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});

		// Counter Start
	    $('.counter').counterUp({
	        delay: 20,
	        time: 2000
	    });
	    /* Counter end */

		// smoothbox
	      $('.sb').smoothbox({
	        loop : false
	      });	


	});

})(jQuery);