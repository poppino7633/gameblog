// ─────────────────────────────────────────────────────────────
//  games.js  —  add a new game by copying one of these objects
// ─────────────────────────────────────────────────────────────
//
//  Fields:
//    slug        unique URL identifier, e.g. "hollow-knight"
//    title       display name
//    emoji       one emoji used as cover art placeholder
//    genre       short genre label, e.g. "RPG", "FPS", "Horror"
//    developer   studio name
//    year        release year (number)
//    platform    platforms string, e.g. "PC / PS5"
//    score       number 0–100
//    verdict     one-word verdict shown under the score
//    excerpt     one sentence shown on the homepage card
//    pros        array of strings (keep each one short)
//    cons        array of strings (keep each one short)
//    review      array of strings — each string is one paragraph
//                Write these in your own voice!

const games = [
  {
    slug: "persona-5-royal",
    title: "Persona 5 Royal",
    emoji: "🎭",
    genre: "JRPG",
    developer: "Atlus",
    year: 2019,
    platform: "PS4 / PS5 / PC",
    score: 97,
    verdict: "Masterpiece",
    excerpt: "Write your one-sentence take here.",

    pros: [
      "Write your first pro here",
      "Write your second pro here",
      "Add as many as you want",
    ],
    cons: [
      "Write your first con here",
      "Add more if needed",
    ],

    review: [
      "This is your first paragraph. Write whatever you want here — your personal opinion, what you liked, what surprised you.",
      "This is your second paragraph. Keep it casual, it's your blog.",
      "Add as many paragraphs as you need by adding more strings to this array.",
    ],
  },

  {
    slug: "soma",
    title: "SOMA",
    emoji: "🤖",
    genre: "Sci-Fi Horror",
    developer: "Frictional Games",
    year: 2015,
    platform: "PC / PS4",
    score: 91,
    verdict: "Excellent",
    excerpt: "Write your one-sentence take here.",

    pros: [
      "Write your first pro here",
      "Write your second pro here",
    ],
    cons: [
      "Write your first con here",
    ],

    review: [
      "Your first paragraph about SOMA goes here.",
      "Your second paragraph goes here.",
    ],
  },

  {
    slug: "war-thunder",
    title: "War Thunder",
    emoji: "🪖",
    genre: "Military / F2P",
    developer: "Gaijin Entertainment",
    year: 2013,
    platform: "PC / Console",
    score: 72,
    verdict: "Good",
    excerpt: "Write your one-sentence take here.",

    pros: [
      "Write your first pro here",
    ],
    cons: [
      "Write your first con here",
      "Write your second con here",
    ],

    review: [
      "Your thoughts on War Thunder go here.",
    ],
  },
];

export default games;
