
  $(document).ready(function(){
     AOS.init({
    duration: 2000,
  
  })
  });



  $(document).ready(function(){

	$('.ikio_procuts').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dotsEach: true,
		dotData: true,
		responsiveClass: true,
		navText: ["<img src='assets/img/chevron.png'>", "<img src='assets/img/chevron.png'>"],
		autoplay:true,
		slideSpeed: 3000,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		owldots: true,
		responsive: {
		  0: {
			items: 1,
			nav: true,
		  },
		  600: {
			items: 1,
			nav: true,
		  },
		  1000: {
			items: 1,
			nav: true,
		  }
		}
	  });

});


 $(document).ready(function(){
	$('.mobo_button').click(function(){
	  $(this).toggleClass('open');
	  $('.main_menus').toggleClass('activemenus')
	});
	});

	
	  
 

$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
	});
});



$(document).ready(function(){
$('#chooseFile').bind('change', function () {
	var filename = $("#chooseFile").val();
	if (/^\s*$/.test(filename)) {
	  $(".file-upload").removeClass('active');
	  $("#noFile").text("No file chosen..."); 
	}
	else {
	  $(".file-upload").addClass('active');
	  $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	}
  });
  
});


$(document).ready(function () {
	$(window).scroll(function () {
  
	  if ($(window).scrollTop() >= 300) {
		$('.header_section').addClass('fixed_header')
	  } else {
		$('.header_section').removeClass('fixed_header')
	  }
  
	});
  });
  
  
  
$(document).ready(function(){
    animateDiv('.dc1');
    animateDiv('.dc2');
    animateDiv('.dc3');
    animateDiv('.dc4');
    animateDiv('.dc5');
	animateDiv('.dc7');
});

function makeNewPosition(){
    
    var h = 200;
    var w = 300;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 4000,   function(){
      animateDiv(myclass);        
    });
    
};


$(document).ready(function () {
	var sliderSelector = '#swiper1',
		options = {
			
			loop: true,
			speed: 800,
			slidesPerView: 2, // or 'auto'
			// spaceBetween: 10,
			centeredSlides: true,
			effect: 'coverflow', // 'cube', 'fade', 'coverflow',
			coverflowEffect: {
				rotate: 10, // Slide rotate in degrees
				stretch: 0, // Stretch space between slides (in px)
				depth: 0, // Depth offset in px (slides translate in Z axis)
				modifier: 1, // Effect multipler
				slideShadows: true, // Enables slides shadows
			},
 			grabCursor: true,
			a11y: true,
            keyboardControl: true,
		
	     	pagination: '.swiper-pagination',
          paginationClickable: true,
	       nextButton: '#js-next1',
	        prevButton: '#js-prev1', 
			breakpoints: {
				1023: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			},
		
		};
	var mySwiper = new Swiper(sliderSelector, options);
 


});




  