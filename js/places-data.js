var placesData = {

	'start': {

		'default': {
			'pic': '1.gif?v=1',
			'text': 'A [complete noob] stands in a field. He has just entered a certain game for the first time. It is dark, and the sounds of [horrible growling] fill the air.\n\nEnter your name:',
			'message': 'start',
			'commands': {
				'Peter': '#2'
			}
		}

	},


	'2': {

		'default': {
			'pic': '2.gif?v=1',
			'text': 'Your name is Peter, but online you go by [forpetessake]. You are in an open world sandbox game called [Sandboxed].  This is your first time playing a game like this, and to be honest you are [a little scared]. Is it supposed to be this dark when you start the game?\n\nThe [growls] are getting louder. What will you do?',
			'message': '',
			'commands': {
				'look around': '#3'
			}
		}

	},


	'3': {

		'default': {
			'pic': '3.gif?v=1',
			'text': "You can't see much. After some straining you think you can see [red glowing eyes] in the darkness. You are standing in a field of tall [grass].\n\nThe red glowing eyes are coming closer, and the growling intensifies.",
			'message': '',
			'commands': {
				'pick up a blade of grass': '#4'
			}
		}

	},


	'4': {
		'default': {
			'pic': '4.gif?v=1',
			'text': 'You pluck a large, sturdy looking [blade of grass] and prepare to defend yourself with it. Boy, do you feel stupid. And terrified.',
			'message': '',
			'commands': {
				'use blade of grass as a sword': '#4b'
			}
		}

	},

	'4b': {
		'default': {
			'pic': '5.gif?v=1',
			'text': "You hold out the [blade of grass] to the enclosing group of red eyes and wave it vigorously.",
			'message': '',
			'commands': {
				'-->': '#5'
			}
		}

	},

	'5': {
		'default': {
			'pic': 'blank.png?v=2',
			'text': "You aren't even Level 1 yet, how hard could these things be to kill? There was no tutorial, no wise wizard handing you a sword and sending you on your way... You just woke up in this terrifying grass field from hell!\n\nSo far, you think, this game sucks.\n\nYou can now see sharp teeth bared under each set of red eyes.",
			'message': '',
			'commands': {
				'growl at the red eye monsters': '#6'
			}
		}

	},

	'6': {
		'default': {
			'pic': '6.gif?v=1',
			'text': "You give your best growl, hoping to intimidate- uh oh, looks like you're being ripped to shreds by monsters. You guess you can say you saw that coming. After a few seconds you are dead.\n\n[GAME OVER]",
			'message': '',
			'commands': {
				'respawn': '#7'
			}
		}

	},


	'7': {
		'default': {
			'pic': '7.gif?v=1',
			'text': "You wake up in the same field. It's still dark, and there are still monsters all over. It looks like they have just finished ripping someone to shreds, and they are now looking at you.",
			'message': '',
			'commands': {
				'RUN': '#8'
			}
		}

	},

};
/*
'': {

	'default': {
		'pic': '',
		'text': '',
		'message': '',
		'commands': {
			'E': '~message/#location/.state'
		}
	}

}
*/