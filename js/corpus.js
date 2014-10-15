/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */

var templates = [
"@who in a @context world, @verb with a @adjective @noun."



];

var phrases = [
	"The date is 2024. Imagine",
	"In 10 years, you'll see",
	"This is your future:"
];

var labels = [
	"What else might the future bring?",
  "This is crazy, show me another!"
];

/*
	Auto Generated from WTF.csv
*/

corpus = {};

corpus.who = ["Artists", "The Neighborhood Drone" , "Beekeepers", "A homeless man", "Librarians", "Dinosaurs", "I am", "Communities", "Doctors", "Taxi drivers", "Darth Vader", "An astronaut", "Scientists", "A psychologist", "Adversarial Robots", "Mutants", "My grand grand future son", "Alien colonization", "Revived Walt Disney", "Elephants", "Drones", "Barack Obama", "Jimmy Carter", "An abolitionist", "Youth", "Business people", "Women", "Dali Lama", "Aliens", "Coders", "Teachers", "Me", "Artichokes", "Super Germs", "Talking animals", "Robots", "Haters", "Punks", "Ross", "Doppelgängers", "Enemies", "Children", "Microbes", "Grandma", "Elders", "My clone", "A fireman", "Farmers", "Sarah", "A Middle Schooler", "A Waitress" , "Simba" , "Monkeys" , "Futuristas", "My children"];

corpus.context = ["weird", "anticipatory", "busy", "forgiving", "diseased", "strange", "desperate", "invisible", "borderless", "flooded", "dry", "crowded", "competitive", "open sourced", "cooperative", "collaborative", "depressing", "empowering", "inspiring", "loved", "crowded", "chaotic", "judgmental", "scary", "bedazzled", "dormant", "unstable", "satisfactory", "virtual", "expansive", "isolated", "fun", "inclusive", "hot","challenging", "collaborative", "connected", "highly organized", "sustainable", "wholly unfamiliar", "regulated", "adversarial", "friendly", "community-oriented" ];

corpus.verb = ["laughing", "sharing", "destroying", "running", "being watched", "gathering information", "gardening", "stalking birds", "blogging", "harvesting", "organizing", "eating", "dreaming", "philosophizing", "peacemaking", "rendering", "owning", "speaking", "dancing", "sleeping", "ritualizing", "smelling", "vacationing", "living", "celebrating", "dying", "creating","running", "touching", "tasting", "smelling", "hearing", "seeing", "using telepathy", "designing interactions", "driving", "singing", "blogging","browsing","chatting","file sharing","gaming","hacking","microblogging","sharing","shopping","syncing"];

corpus.adjective = ["healthy", "four dimensional", "audio reactive", "collaborative", "time traveling", "local", "green", "intense", "lab grown", "isolated", "artisinal", "organic", "free range", "family owned", "musical", "resilient", "quality", "implanted", "organic", "compartmentalized", "fresh", "genetically engineered", "composted", "teleported", "nourishing", "sentient", "compressed","cross-platform","crowdsourced","distributed","dynamic","generative","gesture controlled","integrated","lightweight","locally executing","memcached","monetized","motion controlled","open source","optimized","micro", "nano", "swarming", "smart", "emergent", "disruptive", "crowdsourced", "increasingly available", "augmented", "hyper-local", "distributed"];

corpus.noun = ["ticket", "backpack", "kitchen sink", "gestural interface","surveillance camera", "birth control", "set of glasses", "ticket", "backpack", "kitchen sink", "internal music device", "shelf", "health checkup screen", "robot-sourced disco bootie", "beard", "monkey", "tea pot", "space craft", "screw driver", "glue gun", "power tool", "slime", "wand", "skate board", "pen", "scooter", "soil", "tree", "earth", "space", "statistic", "microchip", "building", "fly trap", "time machine", "water bottle", "moon", "internal bionic body part", "cyborg plant", "communication device", "necklace", "submarine", "banana", "hamburger", "toothbrush", "water slide", "snake pit", "farm", "home", "tomato", "phone", "jetpack", "car", "book", "plant", "fork and knife", "set of chopsticks", "hat", "street sign"];
