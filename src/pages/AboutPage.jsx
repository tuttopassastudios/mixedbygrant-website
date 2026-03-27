import { Link } from 'react-router-dom'
import About from '../components/About'
import Portfolio from '../components/Portfolio'

function AboutPage() {
  return (
    <div className="page">
      <nav className="page-nav">
        <Link to="/" className="back-link">← Back</Link>
      </nav>
      <div className="page-content">
        <About />
        <Portfolio />
      </div>
    </div>
  )
}

export default AboutPage
