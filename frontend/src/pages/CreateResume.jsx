import { Link } from "react-router-dom";

function CreateResume() {
  return (
    <div className="resume-name-page">
      <div className="resume-name-card">
        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="resume-name-header">
          <div className="resume-name-icon">📄</div>

          <h1>Create a new resume</h1>

          <p>
            Give your resume a name so you can easily find and manage it later.
          </p>
        </div>

        <div className="resume-name-form">
          <label htmlFor="resumeName">Resume name</label>

          <input
            type="text"
            id="resumeName"
            placeholder="e.g. Software Developer Resume"
          />

          <Link to="/resume-editor" className="btn btn-primary resume-name-button">Continue
            <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  );
}

export default CreateResume;