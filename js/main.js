// wrapper start
(function() {

var score = 0;
var place = 'start';

var places = jQuery.extend(true, {}, placesData);
var messages = jQuery.extend(true, {}, messagesData);
var ended = false;

var saved = {};

function formatContent(txt) {
	txt = txt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	txt = txt.replace(/\n/g, '<br />');
	txt = txt.replace(/\[/g, '<span class="paper5">').replace(/\]/g, '</span>');
	return txt;
}

	
	// change state
	function stateShow(s) {
		places[place]._current = s;
		var p = places[place][places[place]._current];
		if (p.pic != '') {
			var pic = $('<img>');
			pic.attr('src', 'img/'+p.pic);
			$('#gameContent').append(pic);
			if (p.pic == 'estuary') {
				$('#gameContent').append('<span class="glitch1 paper3 ink7 flash bright"></span><span class="glitch2 paper4 ink3 bright">_</span>');
			}
		}
		var para = $('<p>');
		para.html(formatContent(p.text));
		$('#gameContent').append(para);
		if (p.message != '') {
			messageShow(p.message);
			p.message = '';
		}
		$('#game').scrollTop(0);
	};

	// show a message
	function messageShow(msgId) {

		// bazooka if eaten his son
		if (msgId == 'eatSon') {
			places['orca1']._current = 'bazooka';
		}

		// spit out bottle
		if (msgId == 'spitBottle') {
			inv = inv.replace(/Bottle\n/, '');
		}

		// go nuclear
		if (msgId == 'eatDrum') {
			messages['bazooka'].pic = 'nuclear';
			messages['bazooka'].text += '\n'+messages['nuclear'].text;
			messages['eatCable'].pic = 'nuclear';
			messages['eatCable'].text += '\n'+messages['nuclear'].text;
			messages['explode'].pic = 'nuclear';
			messages['explode'].text += '\n'+messages['nuclear'].text;
			messages['fart'].text = messages['fartNuclear'].text;
		}

		var m = messages[msgId];
		if (m.pic != '') {
			var pic = $('<img>');
			pic.attr('src', 'img/'+m.pic);
			$('#gameContent').append(pic);
		}
		var para = $('<p>');
		para.addClass('ink'+String(m.colour));
		para.html(formatContent(m.text));
		$('#gameContent').append(para);
		
		if (m.score != 0) {
			score += m.score;
			if (! m.ending) {
				para = $('<p>');
				para.addClass('ink0');
				para.text('You are now '+score+'% full!');
				$('#gameContent').append(para);
			}
			if (! $('#gameHead').is(':visible')) {
				if (Modernizr.audio) {
					if ($('audio#audioEat')[0].currentTime !== 0) {
						$('audio#audioEat')[0].currentTime = 0;
					}
					$('audio#audioEat')[0].play();
				}
			}
		}

		if (m.inv != '') {
			inv += m.inv + '\n';
			para = $('<p>');
			para.addClass('ink0');
			para.text('Added to inventory:'+m.inv);
			$('#gameContent').append(para);
		}

		if (m.action != '') {
			var a = m.action;
			var aType = a.charAt(0);
			a = a.substring(1);
			if (aType == '~') {
				messageShow(a);
			} else if (aType == '#') {
				place = a;
				placeShow();
			} else if (aType == '.') {
				stateShow(a);
			}
		}

		if (m.ending) {
			ended = true;
			para = $('<p>');
			para.addClass('ink0');
			if ('score' in saved) {
				para.html('Your final score: '+score+'%<br />Use <span class="paper5">RESTART</span>/<span class="paper5">LOAD</span> to play again');
			} else {
				para.html('Your final score: '+score+'%<br />Use <span class="paper5">RESTART</span> to play again');
			}
			$('#gameContent').append(para);
			if (m.score == 0) {
				if (Modernizr.audio) {
					if ($('audio#audioExplosion')[0].currentTime !== 0) {
						$('audio#audioExplosion')[0].currentTime = 0;
					}
					$('audio#audioExplosion')[0].play();
				}
			} else {
				// perfect 100%
				if (score == 100) {
					pic.attr('src', 'img/perfect.png');
				}
			}
		}

		$('html').removeClass('paper7').addClass('paper'+m.colour);
		$('#game').scrollTop(0);
	}



// show current place
function placeShow() {
	$('#gameContent').html('');
	$('#gameContent').css('margin-top', '0');
	if (! ('_current' in places[place])) {
		places[place]._current = 'default';
	}
	var p = places[place][places[place]._current];
	if (p.pic != '') {
		var pic = $('<img>');
		pic.attr('src', 'img/'+p.pic);
		$('#gameContent').append(pic);
		
		//if there is only one command, put it into the input
		var keys = Object.keys(p.commands);
		console.log(keys[0]);
		$('input[name=command]').val(keys[0]);
		
	

	}
	var para = $('<p>');
	para.html(formatContent(p.text));
	$('#gameContent').append(para);
	if (p.message != '') {
		messageShow(p.message);
		p.message = '';
	}
	$('#game').scrollTop(0);
};


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

	$('#game').on('click', function() {
		
			var i = $('#game form input').val();
			if(i.length > 0){ 

			$(window).scrollTop(1);

			$('#game form p *').css('visibility', 'hidden');

			var delay = 800;

			// pause before showing stuff
			var t = setTimeout(function() {
				$('#gameHead').hide();
				$('html').removeClass('paper0 paper1 paper2 paper3 paper4 paper5 paper6').addClass('paper7');
				$('#game form p *').css('visibility', 'visible');
				
				$('#game form').css('bottom', '25em');
			}, delay);

			// location commands
			var p = places[place][places[place]._current];
			if (i in p.commands) {
				var c = p.commands[i];
				var cType = c.charAt(0);
				c = c.substring(1);
				if (cType == '~') {
					messageShow(c);
				} else if (cType == '#') {
					place = c;
					placeShow();
				} else if (cType == '.') {
					stateShow(c);
				}
				return false;
			}
			

			$('input[name=command]').val('');
		}
	});
});


// for anything that requires all resources
$(window).load(function() {

	// preload images that'll be needed
	var preload = ['surface-sunset', 'beach-sunset', 'eat', 'love', 'beach-moonlit', 'beach', 'surface', 'seabed', 'hull', 'estuary', 'leg', 'explode', 'nuclear', 'boat', 'cage', 'success', 'perfect'];
	$.each(preload, function() {
		$('<img />').attr('src', 'img/'+this);
	});

	// hacky intro stuff
	$('#game > *').hide();
	$('#game form').show().blur();
	$('#gameLoaded p').eq(1).hide();
	$('#gameLoaded').show();
	$('html').addClass('play paper2');
	setTimeout(function() {
		$('html').removeClass('paper2').addClass('paper0');
	}, 80);
	setTimeout(function() {
		$('html').removeClass('paper0').addClass('paper7');
	}, 160);
	setTimeout(function() {
		$('#gameLoaded p').eq(1).show();
		$(document).on('touchend.intro mouseup.intro MSPointerUp.intro keydown.intro', function() {

			// title screen
			$(this).off('touchend.intro mouseup.intro MSPointerUp.intro keydown.intro');
			if (Modernizr.audio) {
				$('audio#audioTitle')[0].play();
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

					$(document).on('touchend.intro mouseup.intro MSPointerUp.intro keydown.intro', function() {
						$(this).off('touchend.intro mouseup.intro MSPointerUp.intro keydown.intro');
						if (Modernizr.audio) {
							$('audio#audioTitle')[0].pause();
						}
						$('html').removeClass('paper4').addClass('paper7');
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


	// scroll stuff up the screen
	var contentScrollFocused = false;
	function contentScroll() {
		if ($('#game form input').css('visibility') == 'hidden') {
			return;
		}

		if (ended) {
			$('#gameShare').show();
		} else {
			$('#gameShare').hide();
		}

		if (Math.random() < 0.1) {
			return;
		}
		var h = 16*Math.round($('#gameContent').height()/16);
		var t = parseInt($('#gameContent').css('margin-top'), 10);
		if (h+16 > -t) {
			$('#gameContent').css('margin-top', String(t-16) + 'px');
			$('#game form').css('bottom', '25em');
			contentScrollFocused = false;
		} else {
			$('#game form').css('bottom', '0');
			if (! contentScrollFocused) {
				$('#game form input').focus();
				contentScrollFocused = true;
			}
		}
	};

	// move cursor
	var commandLength = 0
	setInterval(function() {
		var l = $('#game form input').val().length;
		if (l == commandLength) {
			return;
		}
		commandLength = l;
		$('#game form span').eq(1).css('left', String(1 + l)+'em');
		$('#game form span').eq(2).css('left', String(2 + l)+'em');
	}, 40);

	// stop stupid safari autoscrolling
	$('#game').on('scroll', function() {
		if ($('#game').scrollTop() !== 0) {
			$('#game').scrollTop(0);
		}
	});


	// start the game
	function gameStart() {

		// keep focus
		setTimeout(function() {
			$('#game').on('click', function() {
				$('#game form input').focus();
			});
		}, 1000);

		$('#gameContent').show();
		placeShow();
		$('html').removeClass('paper0 paper1 paper2 paper3 paper4 paper5 paper6').addClass('paper7');
		setInterval(contentScroll, 50);
		contentScroll();

		
		//$('#game form').on('submit', function() {});

	};


	$('#gameShare a').eq(0).on('click', function() {
		var msg = 'I scored '+score+'% at JAWS: The Text Adventure! ';
		if (score == 100) {
			msg += 'Iâ€™m the perfect killing machine';
		} else {
			msg += 'How bitey are you?';
		}

		var w = 550;
		var h = 420;
		var winName = 'win'+String(Math.floor(100000*Math.random()));
		var t = Math.floor((screen.height - h)/2 - 50);
		var l = Math.floor((screen.width - w)/2);
		window.open('https://twitter.com/share?related=usvsth3m&text=' + encodeURIComponent(msg) + '&url=' + encodeURIComponent(window.location.href), winName, 'width='+w+',height='+h+',top='+t+',left='+l+',scrollbars=yes,resizable=yes,toolbar=no,location=no');
		return false;
	});


});



// wrapper end
})();