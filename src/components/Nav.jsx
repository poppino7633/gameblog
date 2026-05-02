import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          my<span>games</span>.blog
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            home
          </NavLink>
          <NavLink to="/reviews" className={({ isActive }) => isActive ? 'active' : ''}>
            all reviews
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
