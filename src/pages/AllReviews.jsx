import { useNavigate } from 'react-router-dom'
import games from '../data/games'

export default function AllReviews() {
  const navigate = useNavigate()

  return (
    <main className="page">
      <header className="reviews-header">
        <h1>All reviews</h1>
        <p>Everything i've written so far, newest first.</p>
      </header>

      <div className="review-list">
        {games.map(game => (
          <div
            key={game.slug}
            className="review-list-item"
            onClick={() => navigate(`/review/${game.slug}`)}
          >
            <img src={game.image} alt={game.title} className="rli-img" />
            <div className="rli-body">
              <div className="rli-title">{game.title}</div>
              <div className="rli-meta">
                <span>{game.genre}</span>
                <span>{game.developer}</span>
                <span>{game.platform}</span>
                <span>{game.year}</span>
              </div>
            </div>
            <div className="rli-score">{game.score}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
