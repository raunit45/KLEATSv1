import "./AboutUs.css"

const AboutUs = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO", image: "/placeholder.svg?height=150&width=150" },
    { name: "Jane Smith", role: "CTO", image: "/placeholder.svg?height=150&width=150" },
    { name: "Mike Johnson", role: "Lead Developer", image: "/placeholder.svg?height=150&width=150" },
    { name: "Sarah Brown", role: "Designer", image: "/placeholder.svg?height=150&width=150" },
  ]

  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About KL Eats</h1>
        <p>Connecting Students with Campus Cuisine</p>
      </header>

      <section className="company-overview">
        <h2>Our Story</h2>
        <p>
          KL Eats was founded in 2023 with a simple mission: to make campus dining easier and more enjoyable for
          students at KL University, Vijayawada. We're passionate about connecting students with the best food options
          on campus, saving them time and enhancing their university experience.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image || "/placeholder.svg"} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-statement">
        <h2>Our Mission</h2>
        <blockquote>
          "To revolutionize campus dining by providing a seamless, user-friendly platform that connects students with
          diverse, quality food options, enhancing their university experience one meal at a time."
        </blockquote>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <p>Email: info@kleats.in</p>
        <p>Visit us: KL GLUG (C424), KL University, Vijayawada</p>
      </section>
    </div>
  )
}

export default AboutUs

