var placesData = {

	'start': {

		'default': {
			'pic': 'surface-sunset',
			'text': 'You are swimming alone out at sea as the sun sets. Between rumbles from your stomach you hear a bell ringing to the [E]ast.',
			'message': 'start',
			'commands': {
				'E': '#buoy'
			}
		}

	},


	'buoy': {

		'default': {
			'pic': 'surface-sunset',
			'text': 'A [BUOY] rocks back and forth on the gentle waves, ringing as it sways. [W]est leads back out to sea, further [E]ast is an island.',
			'message': '',
			'commands': {
				'W': '#start',
				'E': '#swim',
				'EAT_BUOY': '~eatBuoy'
			}
		}

	},


	'swim': {

		'default': {
			'pic': 'beach-sunset',
			'text': 'Waves lap against a sandy beach bathed in a red glow. [W]est is the buoy. You notice something splashing around here - a naked [WOMAN] is on the surface!',
			'message': '',
			'commands': {
				'W': '#buoy',
				'EAT_WOMAN': '~eatWoman',
				'KISS_WOMAN': '~kiss',
				'LOVE_WOMAN': '~kiss'
			}
		},

		'eaten': {
			'pic': 'beach-sunset',
			'text': 'The water tastes reassuringly bloody. You can follow the shore [S]outh.',
			'message': '',
			'commands': {
				'S': '#night'
			}
		}

	},


	'night': {

		'default': {
			'pic': 'beach-moonlit',
			'text': 'You swim slowly through the night, contemplating the solitary brutality of your existence as an apex predator. Continuing [S]outh will bring you near some buildings after sunrise.',
			'message': '',
			'commands': {
				'S': '#beach'
			}
		}

	},


	'beach': {

		'default': {
			'pic': 'beach',
			'text': 'You are near a beach packed with holidaymakers. They look so happy. A black [DOG] is paddling with a stick in its mouth, and there\'s a young [BOY] on an inflatable. The south-west corner of the island is to the [S]outh.',
			'message': '',
			'commands': {
				'S': '#corner',
				'EAT_DOG': '~eatDog',
				'EAT_BOY': '~eatBoy'
			}
		},

		'eatenDog': {
			'pic': 'beach',
			'text': 'You are near a beach packed with holidaymakers. There\'s a young [BOY] on an inflatable. The south-west corner of the island is to the [S]outh.',
			'message': '',
			'commands': {
				'S': '#corner',
				'EAT_BOY': '~eatBoy'
			}
		},

		'eatenBoy': {
			'pic': 'beach',
			'text': 'You are near a beach. The water is red. A woman stands on the beach shouting. The south-west corner of the island is to the [S]outh.',
			'message': '',
			'commands': {
				'S': '#corner'
			}
		}

	},


	'corner': {

		'default': {
			'pic': 'surface',
			'text': 'You are off the south-west corner of the island. [E]ast takes you around to the southern shore, while [W]est leads out to sea. The beach is [N]orth.',
			'message': '',
			'commands': {
				'E': '#pier',
				'W': '#nuke1',
				'N': '#beach'
			}
		}

	},


	'nuke1': {

		'default': {
			'pic': 'surface',
			'text': 'You are out at sea. The sun is warm on your dorsal fin and little fish bravely dart around you. Return to the coast [E]ast, or go [DOWN] to investigate a coral reef.',
			'message': '',
			'commands': {
				'E': '#corner',
				'DOWN': '#nuke3'
			}
		}

	},


	'nuke3': {

		'default': {
			'pic': 'seabed',
			'text': 'You are swimming just above a coral reef. A metal [DRUM] on the sea bed is covered in strange symbols and gives off a greenish glow. You can go back [UP] to the surface.',
			'message': '',
			'commands': {
				'UP': '#nuke1',
				'EAT_DRUM': '~eatDrum'
			}
		},

		'eatenDrum': {
			'pic': 'seabed',
			'text': 'You are swimming just above a coral reef. You can go back [UP] to the surface.',
			'message': '',
			'commands': {
				'UP': '#nuke1'
			}
		}

	},


	'pier': {

		'default': {
			'pic': 'beach',
			'text': 'You are near a wooden pier with two [MEN] standing on it. You wonder if they are good friends. A chunk of [MEAT] is hanging on a chain in the water. [W]est goes to the corner of the island, [S]outh leads out to sea, and [E]ast runs along the shore.',
			'message': '',
			'commands': {
				'W': '#corner',
				'S': '#fishing',
				'E': '#southern',
				'EAT_MEAT': '~eatMeat',
				'EAT_MEN': '~eatMen',
				'KISS_MEN': '~kiss',
				'LOVE_MEN': '~kiss'
			}
		},

		'eatenMeat': {
			'pic': 'beach',
			'text': 'You are near a broken wooden pier. Two [MEN] stand on the shore. [W]est goes to the corner of the island, [S]outh leads out to sea, and [E]ast runs along the shore.',
			'message': '',
			'commands': {
				'W': '#corner',
				'S': '#fishing',
				'E': '#southern',
				'EAT_MEN': '~eatMen',
				'KISS_MEN': '~kiss',
				'LOVE_MEN': '~kiss'
			}
		}

	},


	'fishing': {

		'default': {
			'pic': 'hull',
			'text': 'You are below a fishing [VESSEL], its nets symbolically blocking your way out to sea. The pier is to the [N]orth.',
			'message': '',
			'commands': {
				'N': '#pier',
				'EAT_VESSEL': '~eatVessel'
			}
		},
		'eatenVessel': {
			'pic': 'hull',
			'text': 'You are below a fishing [VESSEL] with a hole in its hull. The pier is to the [N]orth.',
			'message': '',
			'commands': {
				'N': '#pier'
			}
		}

	},


	'southern': {

		'default': {
			'pic': 'beach',
			'text': 'You are near the southern beach. There are boats, guns and people screaming, so you stay in deeper, more peaceful waters. [E]ast will take you into an estuary, the pier is to the [W]est, or you can go [S]outh to leave this miserable island.',
			'message': '',
			'commands': {
				'E': '#estuary',
				'S': '#leave',
				'W': '#pier'
			}
		}

	},


	'estuary': {

		'default': {
			'pic': 'estuary',
			'text': 'You are in a small estuary, which turns [N]orth into a pond or goes back out to sea to the [W]est. You feel trapped and angry.',
			'message': '',
			'commands': {
				'N': '#pond',
				'W': '#southern'
			}
		}

	},


	'pond': {

		'default': {
			'pic': 'estuary',
			'text': 'You are in the pond. There are [YACHTS] here with more people on them, happy people. You feel hungry and frustrated. The only exit is [S]outh.',
			'message': '',
			'commands': {
				'S': '#estuary',
				'EAT_YACHTS': '~eatYachts',
				'EAT_YACHT': '~eatYachts'
			}
		},

		'eatenYachts': {
			'pic': 'estuary',
			'text': 'You are in the pond. The police chief\'s [SON] is in the water, along with a [MAN]. When you attack one, the other may escape, so choose wisely. The only exit is [S]outh.',
			'message': '',
			'commands': {
				'S': '#estuary',
				'EAT_SON': '~eatSon',
				'EAT_MAN': '~eatMan',
				'KISS_MAN': '~kiss',
				'LOVE_MAN': '~kiss'
			}
		},

		'eatenSon': {
			'pic': 'estuary',
			'text': 'You are in the pond. The only exit is [S]outh.',
			'message': '',
			'commands': {
				'S': '#estuary'
			}
		},

		'eatenMan': {
			'pic': 'leg',
			'text': 'You are in the pond. A tasty-looking [LEG] of human drifts through the water. The only exit is [S]outh.',
			'message': '',
			'commands': {
				'S': '#estuary',
				'EAT_LEG': '~eatLeg'
			}
		},

		'eatenLeg': {
			'pic': 'estuary',
			'text': 'You are in the pond. The only exit is [S]outh.',
			'message': '',
			'commands': {
				'S': '#estuary'
			}
		}

	},


	'leave': {

		'default': {
			'pic': 'surface',
			'text': 'You are south of the island. It is peaceful here. You can swim [DOWN] deeper, or head [S]outh.',
			'message': '',
			'commands': {
				'DOWN': '#cable',
				'S': '#orca1'
			}
		}

	},


	'cable': {

		'default': {
			'pic': 'seabed',
			'text': 'You are near the sea bed. A thick [CABLE] runs along it and strongly triggers your sense of electroreception. The surface is [UP] above.',
			'message': '',
			'commands': {
				'UP': '#leave',
				'EAT_CABLE': '~eatCable'
			}
		}

	},


	'orca1': {

		'default': {
			'pic': 'hull',
			'text': 'You are at sea, near an old [BOAT] with a noisy engine. There is [BAIT] on a line. The island is [N]orth.',
			'message': '',
			'commands': {
				'N': '#leave',
				'EAT_BOAT': '~eatBoat',
				'EAT_BAIT': '~eatBait'
			}
		},

		'eatenBait': {
			'pic': 'surface',
			'text': 'You are at sea. The island is [N]orth. The faint sound of jolly singing to the [W]est awakens a fierce rage in you.',
			'message': '',
			'commands': {
				'N': '#leave',
				'W': '#orca3'
			}
		},

		'bazooka': {
			'pic': 'hull',
			'text': 'You are at sea, near an old [BOAT] with a noisy engine. There is [BAIT] on a line. The island is [N]orth.',
			'message': '',
			'commands': {
				'N': '#leave',
				'EAT_BOAT': '~eatBoat',
				'EAT_BAIT': '~bazooka'
			}
		}

	},

	'orca3': {

		'default': {
			'pic': 'hull',
			'text': 'You have found the noisy old [BOAT]. On deck, the police [CHIEF] is throwing [OFFAL] in the water.',
			'message': '',
			'commands': {
				'EAT_BOAT': '~eatBoat',
				'EAT_CHIEF': '~eatChief',
				'EAT_OFFAL': '~eatOffal',
				'KISS_CHIEF': '~kiss',
				'LOVE_CHIEF': '~kiss'
			}
		},

		'eatenOffal': {
			'pic': 'surface',
			'text': 'The boat has moved [N]orth towards the island. You feel compelled to follow it to the bitter end.',
			'message': '',
			'commands': {
				'N': '#cage'
			}
		}

	},


	'cage': {

		'default': {
			'pic': 'cage',
			'text': 'You are below the [BOAT]. It has stopped and lowered a [CAGE] containing a [DIVER] who has come out to play.',
			'message': '',
			'commands': {
				'EAT_BOAT': '~eatBoat',
				'EAT_CAGE': '~eatCage',
				'EAT_DIVER': '~eatCage',
				'KISS_DIVER': '~kiss',
				'LOVE_DIVER': '~kiss'
			}
		},

		'eatenCage': {
			'pic': 'cage',
			'text': 'You are below the [BOAT] and a broken [CAGE]. You can swim [DOWN] or leap [UP] onto the deck.',
			'message': '',
			'commands': {
				'EAT_BOAT': '~eatBoat',
				'DOWN': '#seabed',
				'UP': '#deck'
			}
		}

	},


	'seabed': {

		'default': {
			'pic': 'seabed',
			'text': 'You are on the sea bed, with nothing but some [SEAWEED]. [UP] leads to the boat.',
			'message': '',
			'commands': {
				'UP': '#cage',
				'EAT_SEAWEED': '~eatSeaweed'
			}
		},

		'eatenSeaweed': {
			'pic': 'seabed',
			'text': 'You are on the sea bed. A [DIVER] cowers behind rocks. [UP] leads to the boat.',
			'message': '',
			'commands': {
				'UP': '#cage',
				'EAT_DIVER': '~eatDiver',
				'KISS_DIVER': '~kiss',
				'LOVE_DIVER': '~kiss'
			}
		},

		'eatenDiver': {
			'pic': 'seabed',
			'text': 'You are on a sea bed littered with pieces of non-biodegradable rubber. [UP] leads to the boat.',
			'message': '',
			'commands': {
				'UP': '#cage'
			}
		}

	},


	'deck': {

		'default': {
			'pic': 'boat',
			'text': 'You are on the boat. A shark [HUNTER] is slipping around on the deck amongst fishing and diving equipment. You can slide [DOWN] into the water.',
			'message': 'onDeck',
			'commands': {
				'DOWN': '#cage',
				'EAT_HUNTER': '~eatHunter',
				'KISS_HUNTER': '~kiss',
				'LOVE_HUNTER': '~kiss'
			}
		},

		'eatenHunter': {
			'pic': 'boat',
			'text': 'You are on the boat. You can see the police [CHIEF] in the cabin, a final meal awaiting you. You can slide [DOWN] into the water.',
			'message': '',
			'commands': {
				'DOWN': '#cage',
				'EAT_CHIEF': '~eatChief2',
				'KISS_CHIEF': '~kiss',
				'LOVE_CHIEF': '~kiss'
			}
		},

		'eatenBottle': {
			'pic': 'boat',
			'text': 'You are on the boat. You can see the police [CHIEF] in the cabin, a final meal awaiting you. You can slide [DOWN] into the water.',
			'message': '',
			'commands': {
				'DOWN': '~explode',
				'EAT_CHIEF': '~eatChief3',
				'SPIT': '~spitBottle',
				'SPIT_BOTTLE': '~spitBottle',
				'SPIT_OUT_BOTTLE': '~spitBottle',
				'DROP_BOTTLE': '~spitBottle',
				'PUKE': '~spitBottle',
				'PUKE_BOTTLE': '~spitBottle',
				'VOMIT': '~spitBottle',
				'VOMIT_BOTTLE': '~spitBottle',
				'KISS_CHIEF': '~kiss',
				'LOVE_CHIEF': '~kiss'
			}
		},

		'noBottle': {
			'pic': 'boat',
			'text': 'You are on the boat. You can see the police [CHIEF] in the cabin, a final meal awaiting you. You can slide [DOWN] into the water.',
			'message': '',
			'commands': {
				'DOWN': '#cage',
				'EAT_CHIEF': '~eatChief4',
				'KISS_CHIEF': '~kiss',
				'LOVE_CHIEF': '~kiss'
			}
		}

	}


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