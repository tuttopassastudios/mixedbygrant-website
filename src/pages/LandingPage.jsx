import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">MIXEDBYGRANT</h1>
        <p className="landing-tagline">Audio Engineer & Producer</p>
        <nav className="landing-nav">
          <Link to="/about" className="landing-link">About</Link>
          <Link to="/contact" className="landing-link">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage
