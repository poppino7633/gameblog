import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          dave<span>games</span>.blog
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/reviews" className={({ isActive }) => isActive ? 'active' : ''}>
            All reviews
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
