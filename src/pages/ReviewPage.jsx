import { useParams, useNavigate } from 'react-router-dom'
import games from '../data/games'

export default function ReviewPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Find the game matching the URL slug
  const game = games.find(g => g.slug === slug)

  // If no game found, show 404
  if (!game) {
    return (
      <main className="page not-found">
        <h1>review not found</h1>
        <p>no game with that slug exists in games.js</p>
      </main>
    )
  }

  return (
    <main className="page review-page">

      {/* Back link */}
      <button className="back-link" onClick={() => navigate('/reviews')}>
        ← all reviews
      </button>

      {/* Page header */}
      <header className="review-page-header">
        <h1>{game.emoji} {game.title}</h1>
        <div className="review-page-meta">
          <span>{game.genre}</span>
          <span>{game.developer}</span>
          <span>{game.platform}</span>
          <span>{game.year}</span>
        </div>
      </header>

      {/* Two-column layout */}
      <div className="review-layout">

        {/* Left: your written review */}
        <article className="review-text">
          {game.review.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>

        {/* Right: sidebar with score, pros/cons, info */}
        <aside className="review-sidebar">

          {/* Score */}
          <div className="sidebar-score">
            <div className="sidebar-score-number">{game.score}</div>
            <div className="sidebar-score-label">out of 100</div>
            <div className="sidebar-score-verdict">{game.verdict}</div>
          </div>

          {/* Pros */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">the good</div>
            <div className="pros-cons">
              {game.pros.map((pro, i) => (
                <div key={i} className="pro">
                  <span className="pro-icon">+</span>
                  <span>{pro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">the bad</div>
            <div className="pros-cons">
              {game.cons.map((con, i) => (
                <div key={i} className="con">
                  <span className="con-icon">−</span>
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Game info */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">info</div>
            <table className="info-table">
              <tbody>
                <tr><td>developer</td><td>{game.developer}</td></tr>
                <tr><td>platform</td><td>{game.platform}</td></tr>
                <tr><td>genre</td><td>{game.genre}</td></tr>
                <tr><td>released</td><td>{game.year}</td></tr>
              </tbody>
            </table>
          </div>

        </aside>
      </div>
    </main>
  )
}
