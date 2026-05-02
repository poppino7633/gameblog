# DaveGames game reviews

A personal game review site built with React + Vite.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Adding a new review

Open `src/data/games.js` and add a new object to the array:

```js
{
  slug: "hollow-knight",       // used in the URL: /review/hollow-knight
  title: "Hollow Knight",
  image: "/images/hollow-knight.jpg",
  genre: "Metroidvania",
  developer: "Team Cherry",
  year: 2017,
  platform: "PC / Switch",
  score: 94,
  verdict: "Excellent",
  excerpt: "One sentence shown on the homepage.",

  pros: ["First pro", "Second pro"],
  cons: ["First con"],

  review: [
    "Your first paragraph.",
    "Your second paragraph.",
  ],
},
```
