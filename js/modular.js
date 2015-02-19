 /**
  * Project: Modular
  * Name: modular.js V 1.6
  * Author: Corbin "Spr0xy" Matschull
  * License: MIT
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

// Call navburger class and attach function on click of the element
$('.navburger').click(function(){
	// Toggle the "open" class of the navburger on every click of the element
	$(this).toggleClass('open');
	// Toggle the "open" class of the nav-links so we actually display them links
	$('.nav-links').toggleClass('open');
});

// Call modalT class and attach function for every event of hovering
$('.modalT').hover(function(){
	// Toggle "hovering" class for every hover event of "modalT"
	$(this).toggleClass('hovering');	
});
	/**
	*
	* Modal controller
	*
	**/
	// Call modalT class, attach function for every click event
	$('.modalT').click(function(){
			// Our BOOL checker to stop conflicts in animations
			var down = false;
				// Check if the DOM body has the modal--open class
				// Also check if down is equal to false
				// If first argument returns true & second argument returns true, cont...
				if(!$('body').hasClass('modal--open') && down == false){
					// Attach "modal--open" to DOM body
					$('body').addClass('modal--open');
					// Attach "modal--open" to main modal body
					$('.main-modal').toggleClass('modal-open');
					// Attach "popped" to popup -
					//(our dim background, giving focus to the modal)
					$('.popup').toggleClass('popped');
					// Set our BOOL to true
					down = true;
					
					}else{ //If either of the args in the IF statement, return their opposites
					// Throw this error to the JavaScript console in your browser
					throw new Error('!Cannot animate modal!');
				}
		// Attach click function to popup class
		// This will check for click events on the popup body
		// It will then run this function
		$('.popup').click(function(){
			// Check if body has modal--open class and if down is true (our BOOL from up above)
			if($('body').hasClass('modal--open') && down == true){
				// IF these check out, remove the modal--open class appended to the DOM body
				$('body').removeClass('modal--open');
				// Toggle the main-modal class "modal-open"
				$('.main-modal').toggleClass('modal-open');
				// Toggle the popped class appended to the popup
				$('.popup').toggleClass('popped');
				// Return down to false to repeat modal animations
				down = false;
			}
		});
});
/**
* Warning bar controller
**/
// Call warning button class and append function for every click event
$('.button-warning').click(function(){
	// Set an animated BOOL for stopping any animation errors
	var animated = false;
		// Check if the body does not have the "bar--open" class
		// Check if animated is false
		// If these check out, continue
		if(!$('body').hasClass('bar--open') && animated == false){
				// Add "bar--open" class to DOM body
				$('body').addClass('bar--open');
				// Toggle warning bar class "open"
				// We use two arguments in this toggleClass method, explanations as follows
				// .toggleClass('classToAdd', true /true means add the class/)
				$('.warning-bar').toggleClass('open', true);
				// Set our BOOL to true for next function body
				animated = true;
		}else{ // If all else fails, default to here
			// Throw this error to the JavaScript console in your browser
			throw new Error('Cannot animate warning bar element');
		}
		// This is our close button, append the click function 
		$('.warning-bar-toggle').click(function(){
			// If the DOM body has the "bar--open" class
			// AND animated is set to true
			// Continue with function
			if($('body').hasClass('bar--open') && animated == true){
				// Remove the "bar--open" class from the DOM body
				$('body').removeClass('bar--open');
				// Toggle the class of warning-bar
				// See the toggle class documentation on line 88 for more
				$('.warning-bar').toggleClass('open', false);
				// Return animated to false
				animated = false;
			}
		});
});
/**
* Default bar controller
**/
// This code is the exact same as the warning bar function on line 78
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
// Set a main ready function on the entire DOM
$(document).ready(function(){
	// Couple vars here,
	// animated - a BOOL checker for stopping conflicts
	// toast - A jQuery call for the ID "toast"
	// toasterMain - This is the main toaster container
	// containerLeft - This is a TODO, this will choose toaster locations to bottomLeft
	// containerRight - This is a TODO, this will choose toaster locations to bottomRight
	var animated 			 = false, 
		 toast               = $('#toast'),
		 toasterMain	     = $('#toastContainer'),
		 containerLeft       = $(toasterMain).hasClass('bottomLeft'), 
		 containerRight      = $(toasterMain).hasClass('bottomRight')
	;
	
	// Check for toaster locations
	if(containerLeft && !containerRight && !animated){
			// Attach click function to toaster
			$(toast).click(function(){
			// Toggle toaster classes
			$(toasterMain).removeClass('toaster-cold').addClass('toaster-active');
			// Change animated BOOL
			animated = true;
			
			// Set a timeout to automatically move the toast after 4 second (4000 milliseconds)
			setTimeout(function(){
				// Add class and remove class and deqeue any animations to toasterMain
				$(toasterMain).addClass('toaster-cold').removeClass('toaster-active').dequeue(); }, 4000);
				// Change animated BOOL to false
				animated = false;
			});
		// Another checker for location
		}else if(containerRight && !containerLeft && !animated){
			// Classes addition and deletion
			$(toasterMain).addClass('i-am-toast-right');
			$(toasterMain).removeClass('i-am-toast');
			// Toaster click, THIS IS TODO!!! IT IS BUGGY!
			$(toast).click(function(){
			$(toasterMain).animate({ 'left' : '81vw' });
			});
		}else{ //IF all else fails
			// Throw this error
			throw new Error('Error in passing toast function to DOM');
		}
});
