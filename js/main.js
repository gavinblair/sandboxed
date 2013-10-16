// wrapper start
(function() {
var currentlyplaying = false;
// conditions required to have full interactivity
if ( (jQuery !== undefined) && (Modernizr !== undefined) && (Modernizr.fontface) ) {
	$('html').addClass('ok');
} else {
	return;
}


// DOM's ready
$(document).ready(function() {
	if ( (Modernizr.pointerevents) || (! Modernizr.inlinesvg) ) {
		$('#overlaySVG').remove();
	}
	if (! Modernizr.pointerevents) {
		$('#overlay').remove();
	}


	$('#sound').click(function(){
		localStorage.muted = mute($(this));
		return false;
	});

	if(localStorage.muted === 'true'){
		mute($('#sound'));
	}
});

function mute(el){
	el.toggleClass('off');
	var a = document.getElementsByTagName('audio');
	var muted = el.hasClass('off');
	for(var i in a){
		a[i].muted = muted;
		if(muted){
			a[i].pause();
		}
	}
	if(!muted && currentlyplaying){
		currentlyplaying.play();
	}
	return muted;
}


// for anything that requires all resources
$(window).load(function() {



	// hacky intro stuff
	$('#game > *').hide();
	$('#gameLoaded p').eq(1).hide();
	$('#gameLoaded').show();
	$('html').addClass('play paper2');

	if(window.location.hash){
		gameStart(window.location.hash);
	} else {
		setTimeout(function() {
			$('html').removeClass('paper2').addClass('paper0');
		}, 80);
		setTimeout(function() {
			$('html').removeClass('paper0').addClass('paper7');
		}, 160);
		setTimeout(function() {
			$('#gameLoaded p').eq(1).show();
			$('.clicker').on('click touchend', function() {
				$('.clicker').off('click touchend');
				// title screen
				if (Modernizr.audio) {
					$('audio#audioTitle')[0].play();
					currentlyplaying = $('audio#audioTitle')[0];
				}
				$('html').removeClass('paper7').addClass('paper0');
				$('#gameLoaded').remove();
				setTimeout(function() {
					$('#gameTitle > *').hide();
					$('#gameTitle p:first-child').show();
					$('#gameTitle').show();
					setTimeout(function() {
						$('#gameTitle h1').css('height', '128px');
						$('#gameTitle h1').show();
					}, 750);
					setTimeout(function() {
						$('#gameTitle h1').css('height', '');
					}, 800);
					setTimeout(function() {
						$('#gameTitle h1 + p').show();
					}, 1250);
					setTimeout(function() {
						$('#gameTitle h1 + p + p').show();
					}, 1750);
					setTimeout(function() {
						$('#gameTitle h1 + p + p + p').show();

						$('.clicker').on('click touchend', function() {
							$(this).off('click touchend');
							
							$('html').removeClass('paper4').addClass('paper0');
							setTimeout(function() {
								$('#gameTitle').remove();
								gameStart();
							}, 160);
						});

					}, 2000);
				}, 250);
				return false;

			});
		}, 480);
	}

	// scaling
	function resized() {

		$('#overlay, #overlaySVG').css('top', $('html').css('margin-top')).css('bottom', $('html').css('margin-bottom'));

		var w = $(window).width();
		var h = $(window).height() - parseInt($('html').css('margin-top'), 10) - parseInt($('html').css('margin-bottom'), 10);

		var scaleW = 0.8*w/512;
		var scaleH = 0.9*h/384;

		var scale = scaleW;
		if (scaleH < scaleW) {
			scale = scaleH;
		}
		if (scale < 0.6) {
			scale = 0.6;
		}
		if (scale > 2) {
			scale = 2;
		}

		if (! Modernizr.csstransforms) {
			scale = 1;
		}

		var marginLeft = Math.floor((w - scale*512)/2);
		if (marginLeft < 0) {
			marginLeft = 0;
		}
		var marginTop = Math.floor((h - scale*384)/2);
		if (marginTop < 5) {
			marginTop = 5;
		}

		var css = 'scale('+scale+')';
		if (Modernizr.csstransforms3d) {
			css += ' perspective(1000px) rotateX(0.1deg) translateZ(1px)';
		}
		$('#game').css({
			'-moz-transform': css,
			'-webkit-transform': css,
			'-ms-transform': css,
			'transform': css,
			'margin-left': String(marginLeft)+'px',
			'margin-top': String(marginTop)+'px'
		});
	}
	resized();
	$(window).on('resize', resized);

	// flashing
	setInterval(function() {
		$('#game').toggleClass('flash');
	}, 320);


	// disable selection
	$('#game').on('selectstart', function() {
		return false;
	});

	// stop stupid safari autoscrolling
	$('#game').on('scroll', function() {
		if ($('#game').scrollTop() !== 0) {
			$('#game').scrollTop(0);
		}
	});


	// start the game
	function gameStart(hash) {

		$('#gameContent').show();
		
		$('html').removeClass('paper0 paper1 paper2 paper3 paper4 paper5 paper6').addClass('paper0');

		if(hash === undefined){
			$('#game').html(ich.one());
		} else {
			$('#game').html(ich[hash.substr(1)]());
		}
	};


	
});



// wrapper end
})();