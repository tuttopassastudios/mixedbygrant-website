function Portfolio() {
  const links = [
    {
      href: 'https://credits.muso.ai/profile/b5874068-912e-4dbc-a6df-eb48bd7da6fe',
      icon: '♫',
      text: 'Muso.AI Credits',
    },
    {
      href: 'https://soundcloud.com/grantespos',
      icon: '♬',
      text: 'SoundCloud',
    },
  ]

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="links">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-text">{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
