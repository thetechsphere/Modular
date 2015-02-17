 /**
	* Project: Modular
	* Name: modular.css V 1.4
	* Author: Corbin "Spr0xy" Matschull
	* License: MIT
	*
	*
	*
	* MASSIVE TODO: Rewrite this entire file, it's clunky, big and buggy!
 **/
  /* jQuery checker for propagation from the top of the page.
  
  jQuery.fn.topper = function(prop){
  'use strict';
    var v = parseInt(this.css(prop),10);
    return isNaN(v) ? 0 : v; 
  };	*/
 
/**
* NavBurger controller
**/ 
 $('.navburger').click(function(){
    $('.navburger').toggleClass('open');
    $('.nav-links').toggleClass('open');
  });
  
  
	/**
	*
	* Modal controller
	*
	**/
	$('.popup-button').click(function(){
			var down = false;
				if(!$('body').hasClass('modal--open') && down == false){
					$('body').addClass('modal--open');
					$('.main-modal').toggleClass('modal-open');
					$('.popup').toggleClass('popped');
					down = true;
					}else{
					throw new Error('!Cannot animate modal!');
				}
		$('.popup').click(function(){
			if($('body').hasClass('modal--open') && down == true){
				$('body').removeClass('modal--open');
				$('.main-modal').toggleClass('modal-open');
				$('.popup').toggleClass('popped');
				down = false;
			}
		});
});

/**
* Warning bar controller
**/
$('.button-warning').click(function(){
	var animated = false;
		if(!$('body').hasClass('bar--open') && animated == false){
				$('body').addClass('bar--open');
				$('.warning-bar').toggleClass('open', true);
				animated = true;
		}else{
			throw new Error('Cannot animate warning bar element');
		}
		$('.warning-bar-toggle').click(function(){
			if($('body').hasClass('bar--open') && animated == true){
				$('body').removeClass('bar--open');
				$('.warning-bar').toggleClass('open', false);
				animated = false;
			}
		});
});

/**
* Default bar controller
**/
$('.button-default').click(function(){
	var animated = false;
		if(!$('body').hasClass('bar--open') && animated == false){
				$('body').addClass('bar--open');
				$('.default-bar').toggleClass('open', true);
				animated = true;
		}else{
			throw new Error('Cannot animate warning bar element');
		}
		$('.default-bar-toggle').click(function(){
			if($('body').hasClass('bar--open') && animated == true){
				$('body').removeClass('bar--open');
				$('.default-bar').toggleClass('open', false);
				animated = false;
			}
		});
});

/**
* Toaster Controller
*
* TODO: Write better size and location linter
**/
$(document).ready(function(){
	var animated = false, 
		 toast               = $('#toast'),
		 toasterMain	   = $('#toastContainer'),
		 containerLeft   = $(toasterMain).hasClass('bottomLeft'), 
		 containerRight = $(toasterMain).hasClass('bottomRight')
	;
	
	if(containerLeft && !containerRight && !animated){
			$(toast).click(function(){
			$(toasterMain).removeClass('toaster-cold').addClass('toaster-active');
			animated = true;
			setTimeout(function(){
				$(toasterMain).addClass('toaster-cold').removeClass('toaster-active').dequeue(); }, 4000);
				animated = false;
			});
		}else if(containerRight && !containerLeft && !animated){
			$(toasterMain).addClass('i-am-toast-right');
			$(toasterMain).removeClass('i-am-toast');
			
			$(toast).click(function(){
			$(toasterMain).animate({ 'left' : '81vw' });
			});
		}else{
			throw new Error('Error in passing toast function to DOM');
		}
});
