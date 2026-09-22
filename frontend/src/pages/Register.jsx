import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            Resume<span>AI</span>
          </Link>

          <h1>Create your account</h1>
          <p>Start building professional resumes with AI assistance.</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Create Account
          </button>
        </form>

        <div className="auth-divider">
          <span>Already have an account?</span>
        </div>

        <Link to="/login" className="btn btn-secondary auth-register">
          Sign In
        </Link>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Register;