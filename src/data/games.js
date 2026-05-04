//  Fields:
//    slug        unique URL identifier, e.g. "hollow-knight"
//    title       display name
//    genre       short genre label, e.g. "RPG", "FPS", "Horror"
//    developer   studio name
//    year        release year (number)
//    platform    platforms string, e.g. "PC / PS5"
//    score       number 0–100
//    verdict     one-word verdict shown under the score
//    excerpt     one sentence shown on the homepage card
//    pros        array of strings 
//    cons        array of strings 
//    review      array of strings 

const games = [
  {
    slug: "persona-5-royal",
    title: "Persona 5 Royal",
    image: "/gameblog/images/p5r.jpg",
    genre: "JRPG",
    developer: "Atlus",
    year: 2019,
    platform: "PS4 / PS5 / PC",
    score: 85,
    verdict: "Good, but not perfect",
    excerpt: "A very fun 50-100 hours of JRPG gameplay and social sim elements.",

    pros: [
      "Very engaging combat",
      "Amazing UI and style",
      "Catchy, jazzy soundtrack",
      "Good replay value due to sheer amplitude",
    ],
    cons: [
      "Poorly adjusted difficulty, game gets easier over time",
      "Combat themes become repetitive over time",
      "Dialogue can get very tedious at times",
      "Some characters are better written than others",
    ],

    review: [
      "First of all, the game looks and sounds absolutely stunning. The UI oozes style, and the game combines 2D and 3D aesthetics seamlessly. The soundtrack generally fits the various moods of the game, and I am especially a fan of the ambient themes of all of the locations (such as Leblanc and Shibuya). Definitely listen to the OST even if you don't want to buy the game, it's really worth it.",
      "Gameplay wise, the combat brings a lot of mechanics that mesh together in a very fun and engaging way. The \"One more\" and Baton Pass mechanics make for some pretty interesting challenges, especially during bossfights (a good example is the Madarame fight, where elemental weaknesses and baton passes are leveraged in an absolutely genius way, forcing you to be smart with your attacks). My only gripe is with the difficulty. The game is very inconsistent on Hard difficulty, and actually very easy on Merciless, due to the huge Crit/Technical/Weak multiplier. The game introduces mechanics like status effects, insta-kills, finishers, revive abilities that trivialise the vast majority of fights over time. However, this is more of a nitpick than anything, as the combat is very fun regardess.",
      "The Social Sim aspect of the game is going to be where I differ a bit from other reviews I've read. While I do like a good chunk of the party members and confidents, there is A LOT of dialogue in places that, in my opinion, need to be streamlined for an enjoyable experience. If I am trying to advance a confident or improve a skill, I truly do not want to be interrupted by having to read another convo between the party members, where they add absolutely nothing new to the story. I get that it's realistic, but having to listen to random dialogue #234 feels like sitting at a red light. Most confident events, however, add a lot of depth to the characters and enhance the gameplay with the various perks they offer.",
      "As for the story, I quite liked the premise, and am pretty neutral on the continuation/end. Without giving away any spoilers, the Kamoshida, Futaba and Sae arcs are my favorites, in my opinion, as they either add enjoyable characters to the party/confident pool, or do a good job at world-building. I am not a fan of the Okumura arc, because it completely fails to develop the new character it introduces, and adds an unnecessary conflict that is resolved in an unsatisfying way.",
    ],
  },

  {
    slug: "soma",
    title: "SOMA",
    image: "/gameblog/images/soma.jpg",
    genre: "Sci-Fi Horror",
    developer: "Frictional Games",
    year: 2015,
    platform: "PC / PS4",
    score: 95,
    verdict: "Excellent",
    excerpt: "One of the best short stories in gaming. By far.",

    pros: [
      "Amazing, thought provoking story",
      "Very cool looking underwater world",
    ],
    cons: [
      "Horror elements can be a bit lacking at times",
    ],

    review: [
      "I have to keep this review short to avoid spoilers. The only thing i can say about the story is that for the game's short length, it can absolutely blow your mind with its themes on ethics and humanity. If you want to have an existential crisis, go play this game.",
      "The gameplay is pretty simple, more of a walking sim than anything else, although there are some pretty interesting puzzles, in line with previous games such as the Amnesia series. I would say that it's not as \"scary\" as Amnesia, especially The Dark Descent, but it replaces the sheer eeriness of Amnesia with the existential dread of not knowing what your place is in its apocalyptic world.",
    ],
  },

  {
    slug: "war-thunder",
    title: "War Thunder",
    image: "/gameblog/images/warthunder.jpg",
    genre: "Military / F2P",
    developer: "Gaijin Entertainment",
    year: 2013,
    platform: "PC / Console",
    score: 70,
    verdict: "Good if you hate your wallet",
    excerpt: "Write your one-sentence take here.",

    pros: [
      "Very realistic depiction of tank physics and movement",
    ],
    cons: [
      "Grindy if you don't spend a lot of money",
    ],

    review: [
      "The gameplay is where War Thunder genuinely shines. The tank physics and movement feel incredibly authentic, and there's a real satisfaction in learning how armor angles and shell types work. It rewards you for actually knowing your vehicle, and that kind of depth is pretty rare in a free to play game.",
      "The elephant in the room, however, is the grind. The higher you climb in the tech tree, the more the game starts feeling like it's designed to frustrate you into spending money. Premium vehicles and accounts make a massive difference in progression speed, which starts feeling pretty unfair once you hit mid to high tiers. It's a shame, because the core game is genuinely good underneath all of that.",
    ],
  },
];

export default games;
