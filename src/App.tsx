import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';

// ================= HOME PAGE =================

function Home() {
  return (
    <div className="website">

      {/* Navigation Bar */}
      <header className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          BookNest
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/catalogue">Catalogue</Link>
          <a href="#about">About</a>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h1>
            Discover Your Next
            <span> Favourite Book</span>
          </h1>

          <p className="hero-description">
            Explore a world of stories, knowledge and imagination.
            Find the perfect book for every moment of your life.
          </p>

          <div className="hero-buttons">
            <Link to="/catalogue" className="explore-btn">
              Explore Books →
            </Link>

            <a href="#about" className="learn-btn">
              Learn More
            </a>
          </div>

          <div className="statistics">
            <div>
              <h3>10K+</h3>
              <p>Happy Readers</p>
            </div>

            <div>
              <h3>5K+</h3>
              <p>Books Available</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="book-circle">
            <span>📖</span>
          </div>

          <div className="floating-card">
            <span>⭐</span>

            <div>
              <strong>Reader's Choice</strong>
              <p>Find your next favourite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Books Preview */}
      <section className="catalogue" id="catalogue">
        <div className="section-heading">
          <p className="tagline">HANDPICKED FOR YOU</p>

          <h2>Explore Our Collection</h2>

          <p>
            Discover books that inspire, educate and entertain.
          </p>
        </div>

        <div className="book-grid">

          <div className="book-card">
            <div className="book-cover cover-one">
              📘
            </div>

            <h3>Atomic Habits</h3>
            <p>James Clear</p>

            <div className="book-bottom">
              <strong>₹399</strong>
              <Link to="/catalogue">
                <button>View Book</button>
              </Link>
            </div>
          </div>

          <div className="book-card">
            <div className="book-cover cover-two">
              📕
            </div>

            <h3>The Psychology of Money</h3>
            <p>Morgan Housel</p>

            <div className="book-bottom">
              <strong>₹349</strong>
              <Link to="/catalogue">
                <button>View Book</button>
              </Link>
            </div>
          </div>

          <div className="book-card">
            <div className="book-cover cover-three">
              📗
            </div>

            <h3>Ikigai</h3>
            <p>Héctor García</p>

            <div className="book-bottom">
              <strong>₹299</strong>
              <Link to="/catalogue">
                <button>View Book</button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="about">
        <h2>BookNest 📚</h2>

        <p>
          Your next great read is just a page away.
        </p>

        <p>
          © 2026 BookNest. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

// ================= CATALOGUE PAGE =================

function Catalogue() {
  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      cover: '📘',
    },
    {
      id: 2,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: 349,
      cover: '📕',
    },
    {
      id: 3,
      title: 'Ikigai',
      author: 'Héctor García',
      price: 299,
      cover: '📗',
    },
    {
      id: 4,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 320,
      cover: '📙',
    },
    {
      id: 5,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 275,
      cover: '📔',
    },
    {
      id: 6,
      title: 'Think Like a Monk',
      author: 'Jay Shetty',
      price: 380,
      cover: '📚',
    },
  ];

  return (
    <div className="website">

      <header className="navbar">
        <Link to="/" className="logo">
          📚 BookNest
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/catalogue">Catalogue</Link>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </header>

      <section className="catalogue">
        <div className="section-heading">
          <p className="tagline">FIND YOUR NEXT READ</p>
          <h2>Our Book Catalogue</h2>
          <p>Explore our collection of popular books.</p>
        </div>

        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-cover cover-one">
                {book.cover}
              </div>

              <h3>{book.title}</h3>
              <p>{book.author}</p>

              <div className="book-bottom">
                <strong>₹{book.price}</strong>
                <button
                  onClick={() =>
                    alert(`${book.title} selected!`)
                  }
                >
                  View Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>BookNest 📚</h2>
        <p>Your next great read is just a page away.</p>
      </footer>

    </div>
  );
}

// ================= MAIN APP =================

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/catalogue"
        element={<Catalogue />}
      />

      <Route
        path="*"
        element={
          <div className="register-page">
            <div className="register-card">
              <h1>Page Not Found</h1>

              <p className="register-subtitle">
                The page you are looking for does not exist.
              </p>

              <Link to="/" className="back-home">
                ← Back to Home
              </Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;