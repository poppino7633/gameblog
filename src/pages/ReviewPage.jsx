import { useParams, useNavigate } from 'react-router-dom'
import games from '../data/games'

export default function ReviewPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const game = games.find(g => g.slug === slug)

  if (!game) {
    return (
      <main className="page not-found">
        <h1>Review not found</h1>
      </main>
    )
  }

  return (
    <main className="page review-page">

      <button className="back-link" onClick={() => navigate('/reviews')}>
        <nbsp />← All reviews <nbsp />
      </button>

      <header className="review-page-header">
        <img src={game.image} alt={game.title} className="review-banner" />
        <h1>{game.title}</h1>
        <div className="review-page-meta">
          <span>{game.genre}</span>
          <span>{game.developer}</span>
          <span>{game.platform}</span>
          <span>{game.year}</span>
        </div>
      </header>

      {/* Two-column layout */}
      <div className="review-layout">

        {/* Review text */}
        <article className="review-text">
          {game.review.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>

        {/* Right: sidebar */}
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
                <tr><td>Developer</td><td>{game.developer}</td></tr>
                <tr><td>Platform</td><td>{game.platform}</td></tr>
                <tr><td>Genre</td><td>{game.genre}</td></tr>
                <tr><td>Released</td><td>{game.year}</td></tr>
              </tbody>
            </table>
          </div>

        </aside>
      </div>
    </main>
  )
}
