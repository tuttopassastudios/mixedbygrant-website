import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import Social from '../components/Social'

function ContactPage() {
  return (
    <div className="page">
      <nav className="page-nav">
        <Link to="/" className="back-link">← Back</Link>
      </nav>
      <div className="page-content">
        <Contact />
        <Social />
      </div>
    </div>
  )
}

export default ContactPage
