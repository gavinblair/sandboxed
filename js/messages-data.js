var messagesData = {

	'start': {
		'colour': 1,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': '',
		'inv': '',
		'action': ''
	},

	'quit': {
		'colour': 0,
		'ending': true,
		'score': 0,
		'pic': '',
		'text': 'You have quit the game.',
		'inv': '',
		'action': ''
	},

	'save': {
		'colour': 5,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Game saved.',
		'inv': '',
		'action': ''
	},

	'help': {
		'colour': 0,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'COMMANDS\n\nMove around:    [N] [S] [E] [W] [UP] [DOWN]\n\nFill your belly:[EAT] OBJECT\n\nInventory/score:[INV]\n\nRepeat location description:[LOOK]\n\nStore position: [SAVE]/[LOAD]\n\nEnd the game:   [QUIT]\n\nOther commands will need to be discovered when required',
		'inv': '',
		'action': ''
	},

	'error': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Sorry, that command doesn\'t do anything here',
		'inv': '',
		'action': ''
	},

	'errorEat': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You have to specify something after EAT',
		'inv': '',
		'action': ''
	},

	'swear': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'No self-respecting great white shark would use such language in polite company.',
		'inv': '',
		'action': ''
	},

	'piss': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'The water around you feels warmer.',
		'inv': '',
		'action': ''
	},

	'shit': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You feel marginally lighter.',
		'inv': '',
		'action': ''
	},

	'fart': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Bubbles rise to the surface.',
		'inv': '',
		'action': ''
	},

	'fartNuclear': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Glowing bubbles rise to the surface, releasing tiny clouds of green mist.',
		'inv': '',
		'action': ''
	},

	'talk': {
		'colour': 0,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'As a shark, your outbound communication options are limited to body language. You wonder if this explains your anger and loneliness.',
		'inv': '',
		'action': ''
	},

	'kiss': {
		'colour': 3,
		'ending': true,
		'score': 0,
		'pic': 'love',
		'text': 'The chemistry between you is instantaneous. You abandon your empty, meaningless lives, swimming off in search of a place where human and chordate can be together in peace.',
		'inv': '',
		'action': ''
	},

	'wait': {
		'colour': 0,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Thorin sits down and starts singing about gold.',
		'inv': '',
		'action': ''
	},

	'sleep': {
		'colour': 0,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'As an obligate ram ventilator you can never truly rest, but you briefly allow your mind to drift off into a relaxed state.',
		'inv': '',
		'action': ''
	},

	'sara': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Endless thanks to my wonderful wife Sara. We will always follow our creative dreams and never be parted.\n- Your ever-loving husband, Dave',
		'inv': '',
		'action': ''
	},

	'nuclear': {
		'colour': 2,
		'ending': true,
		'score': 0,
		'pic': 'nuclear',
		'text': 'The plutonium in your stomach turns into an atomic fireball that triggers all-out nuclear war, destroying the world.',
		'inv': '',
		'action': ''
	},

	'eatBuoy': {
		'colour': 2,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'Your teeth grind against metal as you wonder if the buoy feels loneliness.',
		'inv': '',
		'action': ''
	},

	'eatWoman': {
		'colour': 2,
		'ending': false,
		'score': 12,
		'pic': 'eat',
		'text': 'You nibble playfully at her toes, then consume most of her main organs.',
		'inv': '',
		'action': '.eaten'
	},

	'eatDog': {
		'colour': 2,
		'ending': false,
		'score': 8,
		'pic': 'eat',
		'text': 'It didn\'t suffer much, and no one seems to have noticed.',
		'inv': '',
		'action': '.eatenDog'
	},

	'eatBoy': {
		'colour': 2,
		'ending': false,
		'score': 10,
		'pic': 'eat',
		'text': 'As you fulfill your primal urge, the holidaymakers notice and run screaming from the water.',
		'inv': '',
		'action': '.eatenBoy'
	},

	'eatDrum': {
		'colour': 4,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You don\'t feel any more full, but notice a warm, tingling sensation in your gut.',
		'inv': 'Plutonium',
		'action': '.eatenDrum'
	},

	'eatMeat': {
		'colour': 2,
		'ending': false,
		'score': 6,
		'pic': 'eat',
		'text': 'As you grab your snack, the chain pulls the pier apart. One man falls into the water but is rescued by his helpful friend.',
		'inv': '',
		'action': '.eatenMeat'
	},

	'eatMen': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You leap up and bare your teeth but can\'t reach them. They look at you with fear.',
		'inv': '',
		'action': ''
	},

	'eatVessel': {
		'colour': 2,
		'ending': false,
		'score': 1,
		'pic': 'eat',
		'text': 'You tear into the hull, somehow managing to eat just one of the fisherman\'s eyes in the process.',
		'inv': '',
		'action': '.eatenVessel'
	},

	'eatYachts': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You crash into the yachts, knocking people into the water. They are not so happy now.',
		'inv': '',
		'action': '.eatenYachts'
	},

	'eatSon': {
		'colour': 2,
		'ending': false,
		'score': 11,
		'pic': 'eat',
		'text': 'You enjoy the morsel, but may have made a powerful enemy. Meanwhile, the man scrambles to safety.',
		'inv': '',
		'action': '.eatenSon'
	},

	'bazooka': {
		'colour': 2,
		'ending': true,
		'score': 0,
		'pic': 'explode',
		'text': 'As you surface, the police chief appears on deck with a bazooka. "You ate my son!" he shouts before pulling the trigger.',
		'inv': '',
		'action': ''
	},

	'eatMan': {
		'colour': 2,
		'ending': false,
		'score': 11,
		'pic': 'eat',
		'text': 'You take several bites and drag the man around. Meanwhile, the chief\'s son scrambles to safety.',
		'inv': '',
		'action': '.eatenMan'
	},

	'eatLeg': {
		'colour': 2,
		'ending': false,
		'score': 5,
		'pic': 'eat',
		'text': 'You snap it up immediately.',
		'inv': '',
		'action': '.eatenLeg'
	},

	'eatCable': {
		'colour': 2,
		'ending': true,
		'score': 0,
		'pic': 'explode',
		'text': 'As your teeth pierce the outer layers, hundreds of thousands of volts surge through your head before exploding your body.',
		'inv': '',
		'action': ''
	},

	'eatBoat': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You knock it around from below, loosening a few planks. You hear shouting, but the humans cannot get you.',
		'inv': '',
		'action': ''
	},

	'eatBait': {
		'colour': 2,
		'ending': false,
		'score': 1,
		'pic': 'eat',
		'text': 'As you eat, a harpoon is fired into you with a barrel attached. You try to shake it off, and the boat is gone when you surface.',
		'inv': 'Yellow barrel',
		'action': '.eatenBait'
	},

	'eatChief': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You cannot reach him but give him quite a scare. Two more harpoons are fired.',
		'inv': 'Yellow barrel\nYellow barrel',
		'action': '.eatenOffal'
	},

	'eatOffal': {
		'colour': 2,
		'ending': false,
		'score': 1,
		'pic': 'eat',
		'text': 'You grab small pieces at the surface and give the chief a scare. Two more harpoons are fired.',
		'inv': 'Yellow barrel\nYellow barrel',
		'action': '.eatenOffal'
	},

	'eatCage': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You chew at the metal cage, opening it up, but the diver manages to swim away.',
		'inv': '',
		'action': '.eatenCage'
	},

	'eatSeaweed': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You get no satisfaction from the slimy vegetation, but its removal reveals the diver.',
		'inv': '',
		'action': '.eatenSeaweed'
	},

	'eatDiver': {
		'colour': 2,
		'ending': false,
		'score': 14,
		'pic': 'eat',
		'text': 'The wetsuit is chewy, but you eventually get through it.',
		'inv': '',
		'action': '.eatenDiver'
	},

	'onDeck': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You have severely damaged the boat. The stern is broken and sinking.',
		'inv': '',
		'action': ''
	},

	'eatHunter': {
		'colour': 2,
		'ending': false,
		'score': 16,
		'pic': 'eat',
		'text': 'You give the despised shark hunter a gory death, and smash the cabin windows looking for more.',
		'inv': '',
		'action': '.eatenHunter'
	},

	'eatChief2': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'You almost get him, but he backs away and wedges a gas [BOTTLE] down your throat.',
		'inv': 'Bottle',
		'action': '.eatenBottle'
	},

	'explode': {
		'colour': 2,
		'ending': true,
		'score': 0,
		'pic': 'explode',
		'text': 'As you leave the boat, the chief fires a rifle, hitting the explosive gas bottle with a lucky shot.',
		'inv': '',
		'action': ''
	},

	'eatChief3': {
		'colour': 3,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'The [BOTTLE] is jamming your mouth and making it hard to eat anything.',
		'inv': '',
		'action': ''
	},

	'spitBottle': {
		'colour': 0,
		'ending': false,
		'score': 0,
		'pic': '',
		'text': 'With some effort, you manage to expel the gas bottle, freeing up your JAWS!',
		'inv': '',
		'action': '.noBottle'
	},

	'eatChief4': {
		'colour': 2,
		'ending': true,
		'score': 15,
		'pic': 'success',
		'text': 'You feed one last time before swimming off into the sunset. Maybe tomorrow, you\'ll want to settle down. Until tomorrow, you\'ll just keep moving on.',
		'inv': '',
		'action': ''
	}
	
};
/*
'': {
	'colour': 0,
	'ending': false,
	'score': 0,
	'pic': '',
	'text': '',
	'inv': '',
	'action': '.newstate/#location/~message'
}
*/