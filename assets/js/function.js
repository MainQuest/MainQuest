$(function() {
	smoothScroll(300);
	navRespons ();
	sobreHidden ();
	portWork ();
	workLoad ();
});

//smoothScroll - scroll ate a com id, ao inves de recarregar pag
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

//navLogo
$(window).scroll(function (){

	var heroHeight = $('.hero-lettering').scrollTop() + $('.hero-lettering').innerHeight();
			$this = $(this)

	if ($this.scrollTop() > heroHeight) {
		$('.logo-img').fadeIn(300);
	} else {
		$('.logo-img').fadeOut(300);
	}
});

//navRespons
var toggleMenu = function () {
	$('.menu').toggleClass('show-mobile');
	$('nav').toggleClass('show-nav');
}
$(document).click(function(event) {
	if(!$(event.target).closest('.menu-container').length) {
	  if ($('.menu').hasClass('show-mobile')) {
			toggleMenu ();
	  }
	}
});
function navRespons () {
	$('.menu-container').click(function () {
		if ($('.mobile').is(':visible')) {
			toggleMenu ();
		}
	});
}

//Paralax-Header
$(window).scroll(function(){

	var $this = $(this)
			wScroll = $this.scrollTop();
			hParal = function () {
				$('.hero-pere').css({
					'transform' : 'translate(0px, -'+ wScroll /25 +'%)'
				});

				$('.hero-chao').css({
					'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
				});

				$('.hero-dragao').css({
					'transform' : 'translate(0px, '+ wScroll /40 +'%)'
				});

				$('.hero-lettering').css({
					'transform' : 'translate(0px, '+ wScroll /20 +'%)'
				});
			}
	if ($this.width() <= 1300) {
		if ($this.scrollTop() < 200){
			hParal ();
		}
	}
});

//sobreHidden
function sobreHidden (){
	$('.lermais').click(function () {
		$('.sobre-text').show();
		$('.lermais').hide();
	});

	$('.lermenos').click(function () {
			$('.sobre-text').hide();
			$('.lermais').show();
	});
}

//portWork
function portWork () {
	$('.thumb-container label').click(function (){
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	})
	$('.work-return').click(function (){
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	})
}

// workLoad
function workLoad () {
  $.ajaxSetup({ cache: false });

	$('.thumb-container label').click(function (){
		var $this = $(this),
				newTitle = $this.find('img').attr('alt'),
				newFolder = $this.find('.thumb-unit').data('folder'),
				spinner = '<div class="loader">Carregando...</div>',
				newHTML = '/work/'+ newFolder +'.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});
}
