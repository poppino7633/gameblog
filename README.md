# my game blog

A personal game review site built with React + Vite.

## setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## adding a new review

Open `src/data/games.js` and add a new object to the array:

```js
{
  slug: "hollow-knight",       // used in the URL: /review/hollow-knight
  title: "Hollow Knight",
  emoji: "🐛",
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

That's it. No other files need to change.

## project structure

```
src/
  data/
    games.js          ← EDIT THIS to add/change reviews
  components/
    Nav.jsx
    Footer.jsx
  pages/
    Home.jsx          ← homepage grid
    AllReviews.jsx    ← list of all reviews
    ReviewPage.jsx    ← individual review (reads from games.js)
    NotFound.jsx      ← 404
  App.jsx             ← routing setup
  index.css           ← all styles
```
