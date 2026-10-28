import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    alert(
      `Welcome to BookNest, ${name}!\n\nRegistration form is working. Database connection will be added later.`
    );

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="register-page">
      <div className="register-card">

        <Link to="/" className="register-logo">
          📚 BookNest
        </Link>

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join our community and discover your next favourite book.
        </p>

        <form onSubmit={handleRegister}>

          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
          />

          <button type="submit" className="register-submit">
            Create My Account →
          </button>

        </form>

        <p className="register-login-text">
          Already have an account?{' '}
          <Link to="/login">Login here</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Register;