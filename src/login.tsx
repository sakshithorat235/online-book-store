import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      `Login form is working for ${email}. Backend authentication will be added later.`
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <Link to="/" className="login-logo">
          📚 BookNest
        </Link>

        <div className="login-icon">👋</div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to continue your reading journey.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="login-options">
            <label className="remember-label">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot-password">
              Forgot password?
            </span>
          </div>

          <button type="submit" className="login-submit">
            Login to Account →
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?{' '}
          <Link to="/register">Create Account</Link>
        </p>

        <Link to="/" className="login-back">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;