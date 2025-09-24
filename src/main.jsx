import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import images
import gamedev from './assets/gamedev.jpg'
import godot from './assets/godot.png'
import leetcode from './assets/leetcode.png'
import unity from './assets/unity.webp'
import vr from './assets/vr.jpg'
import webdev1 from './assets/webdev1.jpg'
import webdev2 from './assets/webdev2.jpg'
import webdev3 from './assets/webdev3.jpeg'


// INIT event cards (title, description, image)
const eventCards = [
  {
    id: 1,
    title: 'Game Development (Beginner)',
    description: 'Learn the basics of game development with Godot.',
    image: godot,
  },
  {
    id: 2,
    title: 'Interview Prep (Advanced)',
    description: 'Practice hard-difficulty LeetCode problems.',
    image: leetcode,
  },
  {
    id: 3,
    title: 'Web Development (Intermediate)',
    description: 'Create your own porotfolio website from scratch.',
    image: webdev1,
  },
  {
    id: 4,
    title: 'Game Development (Advanced)',
    description: 'Delve into advanced game mechanics and design using Unity.',
    image: unity,
  },
  {
    id: 5,
    title: 'Web Development (Beginner)',
    description: 'Design and build a simple website using HTML and CSS.',
    image: webdev2,
  },
  {
    id: 6,
    title: 'App Development (Beginner)',
    description: 'Learn the basics of app development using Flutter.',
    image: webdev1,
  },
  {
    id: 7,
    title: 'Interview Prep (Beginner)',
    description: 'Get ready for your coding interviews by practicing easy LeetCode questions.',
    image: leetcode,
  },
  {
    id: 8,
    title: 'Web Development (Advanced)',
    description: 'Build complex, responsive web applications with React and Node.js.',
    image: webdev3,
  },
  {
    id: 9,
    title: 'Game Development (Intermediate)',
    description: 'Build upon your existing game development skills using Unity.',
    image: gamedev,
  },
  {
    id: 10,
    title: 'VR Development (Advanced)',
    description: 'Create immersive experiences using Unity and VR technology.',
    image: vr,
  },
]

// Card component
function Card({ image, title, description }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn">RSVP</button>
    </article>
  )
}

function CardsGrid() {
  useEffect(() => {
    document.title = 'Community Events — CommunityBoard'
  }, [])

  return (
    <main className="cards-wrap">
      <div className="cards-container">
        <header className="cards-header">
          <h1 className="page-title">INIT FIU Events</h1>
        </header>
        <section className="cards-grid" aria-label="cards grid">
          {eventCards.map((c) => (
            <Card key={c.id} image={c.image} title={c.title} description={c.description} />
          ))}
        </section>
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardsGrid />
  </StrictMode>,
)
