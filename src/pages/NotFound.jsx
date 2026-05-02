import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <main className="page not-found">
      <h1>404</h1>
      <p>this page doesn't exist.</p>
      <br />
      <button className="back-link" onClick={() => navigate('/')}>← go home</button>
    </main>
  )
}
