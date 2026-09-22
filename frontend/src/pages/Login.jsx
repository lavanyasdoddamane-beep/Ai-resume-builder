import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            Resume<span>AI</span>
          </Link>

          <h1>Welcome back</h1>
          <p>Sign in to continue building your professional resume.</p>
        </div>

        <form className="auth-form">
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
              placeholder="Enter your password"
            />
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Sign In
          </button>
        </form>

        <div className="auth-divider">
          <span>Don't have an account?</span>
        </div>

        <Link to="/register" className="btn btn-secondary auth-register">
          Create an Account
        </Link>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;