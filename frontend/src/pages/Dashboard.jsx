import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-container dashboard-nav">
          <Link to="/" className="dashboard-logo">
            Resume<span>AI</span>
          </Link>

          <div className="dashboard-user">
            <span className="user-name">Welcome</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-container dashboard-main">
        <section className="dashboard-welcome">
          <div>
            <h1>Welcome to your dashboard</h1>
            <p>
              Create a new resume or continue working on one of your saved
              resumes.
            </p>
          </div>
        </section>

        <section className="dashboard-actions">
          <Link to="/create-resume" className="dashboard-action-card">
            <div className="action-icon">✦</div>

            <div className="action-content">
              <h2>Create Resume</h2>
              <p>
                Build a professional resume from scratch with AI assistance.
              </p>
            </div>

            <span className="action-arrow">→</span>
          </Link>

          <Link to="/upload-resume" className="dashboard-action-card">
            <div className="action-icon">↑</div>

            <div className="action-content">
              <h2>Upload Resume</h2>
              <p>
                Upload your existing PDF and let AI convert it into an
                editable resume.
              </p>
            </div>

            <span className="action-arrow">→</span>
          </Link>
        </section>

        <section className="saved-resumes">
          <div className="section-heading">
            <div>
              <h2>Your Resumes</h2>
              <p>Your saved resumes will appear here.</p>
            </div>
          </div>

          <div className="empty-resumes">
            <div className="empty-icon">📄</div>

            <h3>No resumes yet</h3>

            <p>
              You haven't created any resumes yet. Start building your first
              professional resume.
            </p>

            <Link to="/create-resume" className="btn btn-primary">
              Create Your First Resume
              <span className="arrow">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;