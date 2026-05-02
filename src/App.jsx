import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllReviews from './pages/AllReviews'
import ReviewPage from './pages/ReviewPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/reviews"       element={<AllReviews />} />
        <Route path="/review/:slug"  element={<ReviewPage />} />
        <Route path="*"              element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
