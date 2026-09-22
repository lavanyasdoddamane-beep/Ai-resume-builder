import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-content">
          <a className="brand" href="/">
            <div className="brand-icon">R</div>

            <div>
              <span className="brand-name">ResumeAI</span>
              <span className="brand-tagline">Smart Resume Builder</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#templates">Templates</a>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="btn btn-login">
              Sign In
            </Link>

            <Link to="/register" className="btn btn-primary">
             Register
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                AI-powered resume creation
              </div>

              <h1>
                Build a resume that
                <span> gets you noticed.</span>
              </h1>

              <p className="hero-description">
                Create professional, ATS-friendly resumes with intelligent AI
                assistance, modern templates and a real-time preview.
              </p>

              <div className="hero-buttons">
                <Link to="/login" className="btn btn-primary btn-large">
                 Create My Resume
                <span className="arrow">→</span>
                </Link>

                <Link to="/login" className="btn btn-secondary btn-large">
                 Upload Existing Resume
                </Link>
              </div>

              <div className="hero-benefits">
                <div>
                  <span className="check">✓</span>
                  Free to get started
                </div>

                <div>
                  <span className="check">✓</span>
                  ATS-friendly
                </div>

                <div>
                  <span className="check">✓</span>
                  Easy PDF export
                </div>
              </div>
            </div>

            {/* Resume visual */}
            <div className="hero-visual">
              <div className="floating-card ai-card">
                <div className="sparkle">✦</div>

                <div>
                  <strong>AI Enhancement</strong>
                  <p>Improving your project description...</p>
                </div>
              </div>

              <div className="resume-window">
                <div className="window-bar">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>Live Resume Preview</span>
                </div>

                <div className="resume-paper">
                  <div className="resume-header">
                    <div>
                      <h3>Alex Morgan</h3>
                      <p>Software Developer</p>
                    </div>

                    <div className="resume-contact">
                      alex@email.com
                      <br />
                      Bengaluru, India
                    </div>
                  </div>

                  <div className="resume-section">
                    <h4>Professional Summary</h4>
                    <div className="text-line full"></div>
                    <div className="text-line long"></div>
                    <div className="text-line medium"></div>
                  </div>

                  <div className="resume-section">
                    <h4>Experience</h4>

                    <div className="resume-entry">
                      <div className="entry-heading">
                        <strong>Frontend Developer</strong>
                        <span>2025 — Present</span>
                      </div>

                      <div className="text-line full"></div>
                      <div className="text-line long"></div>
                    </div>
                  </div>

                  <div className="resume-section">
                    <h4>Projects</h4>

                    <div className="resume-entry">
                      <div className="entry-heading">
                        <strong>AI Resume Builder</strong>
                      </div>

                      <div className="text-line full"></div>
                      <div className="text-line medium"></div>
                    </div>
                  </div>

                  <div className="resume-columns">
                    <div>
                      <h4>Skills</h4>

                      <div className="skill-pills">
                        <span>React</span>
                        <span>Python</span>
                        <span>MongoDB</span>
                      </div>
                    </div>

                    <div>
                      <h4>Education</h4>
                      <strong>B.E. Computer Science</strong>
                      <p>2023 — 2027</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card ats-card">
                <div className="score-circle">92</div>

                <div>
                  <strong>ATS Score</strong>
                  <p>Your resume looks great!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">POWERFUL FEATURES</span>

              <h2>Everything you need to build a better resume</h2>

              <p>
                From AI-powered writing assistance to professional templates,
                ResumeAI helps you create a polished resume from start to
                finish.
              </p>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon">✦</div>
                <h3>AI Writing Assistant</h3>
                <p>
                  Transform simple descriptions into clear, professional and
                  impactful resume content using AI.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">▣</div>
                <h3>Live Preview</h3>
                <p>
                  See your resume update instantly while you add or edit your
                  information.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>ATS-Friendly Templates</h3>
                <p>
                  Choose clean and professional templates designed to remain
                  readable by applicant tracking systems.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">↑</div>
                <h3>Resume Import</h3>
                <p>
                  Upload an existing PDF resume and convert its information into
                  editable resume sections.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">◈</div>
                <h3>Easy Customization</h3>
                <p>
                  Personalize templates, colors and resume sections while
                  keeping the layout professional.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">↓</div>
                <h3>PDF Download</h3>
                <p>
                  Save your completed resume and download a clean PDF whenever
                  you are ready to apply.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="steps-section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">HOW IT WORKS</span>
              <h2>Your professional resume in four simple steps</h2>
            </div>

            <div className="steps-grid">
              <article className="step">
                <div className="step-number">01</div>
                <h3>Create or Upload</h3>
                <p>Start from scratch or upload your existing PDF resume.</p>
              </article>

              <article className="step">
                <div className="step-number">02</div>
                <h3>Add Your Details</h3>
                <p>
                  Enter education, skills, projects, experience and other
                  relevant information.
                </p>
              </article>

              <article className="step">
                <div className="step-number">03</div>
                <h3>Enhance With AI</h3>
                <p>
                  Improve summaries and descriptions with intelligent writing
                  assistance.
                </p>
              </article>

              <article className="step">
                <div className="step-number">04</div>
                <h3>Save & Download</h3>
                <p>
                  Choose your template, review the final result and download
                  your resume.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Templates preview */}
        <section className="templates-section" id="templates">
          <div className="container templates-content">
            <div>
              <span className="section-label">PROFESSIONAL TEMPLATES</span>

              <h2>Designed for clarity. Built for opportunities.</h2>

              <p>
                Choose from clean resume layouts made to highlight your
                experience without unnecessary design distractions.
              </p>

              <Link to="/login" className="btn btn-primary">
               Start Building
              <span className="arrow">→</span>
              </Link>
            </div>

            <div className="template-stack">
              <div className="template-page template-back"></div>

              <div className="template-page template-middle"></div>

              <div className="template-page template-front">
                <div className="template-header"></div>
                <div className="template-title"></div>

                <div className="template-line full"></div>
                <div className="template-line long"></div>
                <div className="template-line medium"></div>

                <div className="template-title small"></div>

                <div className="template-line full"></div>
                <div className="template-line long"></div>

                <div className="template-title small"></div>

                <div className="template-line full"></div>
                <div className="template-line medium"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container cta-box">
            <div>
              <span className="section-label light">GET STARTED TODAY</span>
              <h2>Ready to build your next resume?</h2>
              <p>
                Create a professional resume, enhance your content with AI and
                get ready for your next opportunity.
              </p>
            </div>

            <Link to="/login" className="btn btn-primary btn-large">
               Create My Resume
            <span className="arrow">→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="brand-icon">R</div>
            <strong>ResumeAI</strong>
          </div>

          <p>Build smarter. Apply confidently.</p>

          <p>© 2026 ResumeAI</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;