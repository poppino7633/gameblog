import { useNavigate } from 'react-router-dom'
import games from '../data/games'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="page">
      <header className="home-header">
        <h1>games i've played,<br /><em>opinions i have.</em></h1>
        <p>personal reviews — no sponsors, no scores out of ten from a committee.</p>
      </header>

      <div className="game-grid">
        {games.map(game => (
          <div
            key={game.slug}
            className="game-card"
            onClick={() => navigate(`/review/${game.slug}`)}
          >
            <div className="game-card-emoji">{game.emoji}</div>
            <div className="game-card-title">{game.title}</div>
            <div className="game-card-meta">
              <span>{game.genre}</span>
              <span>{game.year}</span>
            </div>
            <p className="game-card-excerpt">{game.excerpt}</p>
            <div className="game-card-score">{game.score}/100 — {game.verdict}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
