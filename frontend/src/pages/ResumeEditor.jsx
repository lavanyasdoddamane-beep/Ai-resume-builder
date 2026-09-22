import { useState } from "react";
import { Link } from "react-router-dom";

function ResumeEditor() {
  const sections = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Tell us about yourself.",
      required: true,
    },
    {
      id: "summary",
      title: "Professional Summary",
      description:
        "Give recruiters a short introduction about your professional background.",
      required: false,
    },
    {
      id: "education",
      title: "Education",
      description: "Add your educational qualifications.",
      required: false,
    },
    {
      id: "skills",
      title: "Skills",
      description: "Add the skills you want recruiters to see.",
      required: false,
    },
    {
      id: "experience",
      title: "Experience",
      description: "Add your professional work experience.",
      required: false,
    },
    {
      id: "projects",
      title: "Projects",
      description: "Showcase your important projects.",
      required: false,
    },
    {
      id: "certifications",
      title: "Certifications",
      description: "Add your professional certifications.",
      required: false,
    },
    {
      id: "achievements",
      title: "Achievements",
      description: "Highlight your achievements and accomplishments.",
      required: false,
    },
    {
      id: "internships",
      title: "Internships",
      description: "Add your internship experience.",
      required: false,
    },
    {
      id: "languages",
      title: "Languages",
      description: "Add the languages you know.",
      required: false,
    },
    {
      id: "volunteer",
      title: "Participation and Involment",
      description: "Add your volunteer experience.",
      required: false,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [personalInfo, setPersonalInfo] = useState({
    image: null,
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    linkedin: "",
    website: "",
  });

  const [summary, setSummary] = useState("");
  const [achievements, setAchievements] = useState([]);
const [achievementInput, setAchievementInput] = useState("");
const [internships, setInternships] = useState([]);
const [internshipInput, setInternshipInput] = useState("");
const [languages, setLanguages] = useState([]);
const [languageInput, setLanguageInput] = useState("");
const [volunteerExperience, setVolunteerExperience] = useState([]);
const [volunteerInput, setVolunteerInput] = useState("");

  const [educationList, setEducationList] = useState([]);

  const [educationForm, setEducationForm] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    location: "",
    description: "",
  });

  const [skillCategories, setSkillCategories] = useState([]);

const [skillCategoryInput, setSkillCategoryInput] = useState("");
const [skillInput, setSkillInput] = useState("");
  const [experienceList, setExperienceList] = useState([]);
  const [certificationList, setCertificationList] = useState([]);
const [projectList, setProjectList] = useState([]);

const [projectForm, setProjectForm] = useState({
  name: "",
  role: "",
  technologies: "",
  startDate: "",
  endDate: "",
  url: "",
  description: "",
});
const [certificationForm, setCertificationForm] = useState({
  name: "",
  organization: "",
  issueDate: "",
  credentialId: "",
  credentialUrl: "",
  description: "",
});

const [experienceForm, setExperienceForm] = useState({
  jobTitle: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  description: "",
});

  function handlePersonalChange(event) {
    const { name, value } = event.target;

    setPersonalInfo((previousInfo) => ({
      ...previousInfo,
      [name]: value,
    }));
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setPersonalInfo((previousInfo) => ({
      ...previousInfo,
      image: file,
    }));
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;

    setEducationForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function addEducation() {
    if (
      !educationForm.institution.trim() &&
      !educationForm.degree.trim()
    ) {
      alert("Please enter at least the institution or degree.");
      return;
    }

    setEducationList((previousList) => [
      ...previousList,
      educationForm,
    ]);

    setEducationForm({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: "",
      location: "",
      description: "",
    });
  }

  function deleteEducation(index) {
    setEducationList((previousList) =>
      previousList.filter((_, itemIndex) => itemIndex !== index)
    );
  }
  function handleExperienceChange(event) {
  const { name, value, type, checked } = event.target;

  setExperienceForm((previousForm) => ({
    ...previousForm,
    [name]: type === "checkbox" ? checked : value,
  }));
}
function handleCertificationChange(event) {
  const { name, value } = event.target;

  setCertificationForm((previousForm) => ({
    ...previousForm,
    [name]: value,
  }));
}
function handleProjectChange(event) {
  const { name, value } = event.target;

  setProjectForm((previousForm) => ({
    ...previousForm,
    [name]: value,
  }));
}

function addProject() {
  if (
    !projectForm.name.trim() &&
    !projectForm.description.trim()
  ) {
    alert("Please enter at least the project name or description.");
    return;
  }

  setProjectList((previousList) => [
    ...previousList,
    projectForm,
  ]);

  setProjectForm({
    name: "",
    role: "",
    technologies: "",
    startDate: "",
    endDate: "",
    url: "",
    description: "",
  });
}

function deleteProject(index) {
  setProjectList((previousList) =>
    previousList.filter(
      (_, projectIndex) => projectIndex !== index
    )
  );
}

function handleEnhanceProject() {
  alert(
    "AI enhancement will be connected when we integrate Gemini."
  );
}

function addCertification() {
  if (
    !certificationForm.name.trim() &&
    !certificationForm.organization.trim()
  ) {
    alert("Please enter at least the certification name or organization.");
    return;
  }

  setCertificationList((previousList) => [
    ...previousList,
    certificationForm,
  ]);

  setCertificationForm({
    name: "",
    organization: "",
    issueDate: "",
    credentialId: "",
    credentialUrl: "",
    description: "",
  });
}

function deleteCertification(index) {
  setCertificationList((previousList) =>
    previousList.filter(
      (_, certificationIndex) => certificationIndex !== index
    )
  );
}
function addExperience() {
  if (
    !experienceForm.jobTitle.trim() &&
    !experienceForm.company.trim()
  ) {
    alert("Please enter at least the job title or company.");
    return;
  }

  setExperienceList((previousList) => [
    ...previousList,
    experienceForm,
  ]);

  setExperienceForm({
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });
}

function deleteExperience(index) {
  setExperienceList((previousList) =>
    previousList.filter(
      (_, experienceIndex) => experienceIndex !== index
    )
  );
}

function handleEnhanceExperience() {
  alert(
    "AI enhancement will be connected when we integrate Gemini."
  );
}
 function addSkillCategory() {
  const categoryName = skillCategoryInput.trim();

  if (!categoryName) {
    return;
  }

  const alreadyExists = skillCategories.some(
    (category) =>
      category.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (alreadyExists) {
    alert("This skill category already exists.");
    return;
  }

  setSkillCategories((previousCategories) => [
    ...previousCategories,
    {
      category: categoryName,
      skills: [],
    },
  ]);

  setSkillCategoryInput("");
}

function handleSkillCategoryKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addSkillCategory();
  }
}

function deleteSkillCategory(categoryIndex) {
  setSkillCategories((previousCategories) =>
    previousCategories.filter(
      (_, index) => index !== categoryIndex
    )
  );
}

function addSkill(categoryIndex) {
  const newSkill = skillInput.trim();

  if (!newSkill) {
    return;
  }

  const category = skillCategories[categoryIndex];

  if (!category) {
    return;
  }

  const alreadyExists = category.skills.some(
    (skill) =>
      skill.toLowerCase() === newSkill.toLowerCase()
  );

  if (alreadyExists) {
    alert("This skill has already been added to this category.");
    return;
  }

  setSkillCategories((previousCategories) =>
    previousCategories.map((categoryItem, index) => {
      if (index !== categoryIndex) {
        return categoryItem;
      }

      return {
        ...categoryItem,
        skills: [...categoryItem.skills, newSkill],
      };
    })
  );

  setSkillInput("");
}

function handleSkillKeyDown(event, categoryIndex) {
  if (event.key === "Enter") {
    event.preventDefault();
    addSkill(categoryIndex);
  }
}





  function handleSkillKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addSkill();
    }
  }

  function deleteSkill(index) {
    setSkills((previousSkills) =>
      previousSkills.filter((_, skillIndex) => skillIndex !== index)
    );
  }

  function handleNext() {
    if (currentStep === 0) {
      if (!personalInfo.fullName.trim()) {
        alert("Please enter your full name.");
        return;
      }

      if (!personalInfo.email.trim()) {
        alert("Please enter your email address.");
        return;
      }
    }

    if (currentStep === 2) {
      if (
        educationList.length === 0 &&
        (educationForm.institution.trim() ||
          educationForm.degree.trim())
      ) {
        addEducation();
      }
    }

    
    if (currentStep === 4 &&(experienceForm.jobTitle.trim() ||experienceForm.company.trim())) {
  addExperience();
}
if (
  currentStep === 5 &&
  (projectForm.name.trim() ||
    projectForm.description.trim())
) {
  addProject();
}

    if (currentStep < sections.length - 1) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  }

  function handlePrevious() {
    if (currentStep > 0) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
  }

  function handleSkip() {
    if (currentStep < sections.length - 1) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  }

  function handleEnhanceSummary() {
    alert("AI enhancement will be connected when we integrate Gemini.");
  }

  const currentSection = sections[currentStep];
  const isLastStep = currentStep === sections.length - 1;

  return (
    <div className="resume-editor-page">

      {/* HEADER */}
      <header className="editor-header">

        <div className="editor-header-left">
          <Link to="/dashboard" className="editor-logo">
            Resume<span>AI</span>
          </Link>

          <div className="editor-divider"></div>

          <span className="editor-resume-name">
            My Resume
          </span>
        </div>

        <div className="editor-header-actions">
          <button className="editor-save-btn">
            Save
          </button>

          <button className="editor-download-btn">
            Download PDF
          </button>
        </div>

      </header>

      {/* PROGRESS */}
      <div className="resume-progress">

        <div className="resume-progress-inner">

          <div className="progress-top">
            <span>
              Step {currentStep + 1} of {sections.length}
            </span>

            <span>
              {currentSection.title}
            </span>
          </div>

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width: `${((currentStep + 1) / sections.length) * 100}%`,
              }}
            ></div>

          </div>

          <div className="progress-steps">

            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`progress-step ${
                  index === currentStep ? "active" : ""
                } ${
                  index < currentStep ? "completed" : ""
                }`}
              >
                <span className="progress-dot">
                  {index < currentStep ? "✓" : index + 1}
                </span>

                <span className="progress-step-name">
                  {section.title}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* MAIN EDITOR */}
      <main className="resume-editor-main">

        {/* LEFT SIDE */}
        <section className="resume-form-panel">

          <div className="editor-panel-header">

            <span className="step-label">
              Step {currentStep + 1} of {sections.length}
            </span>

            <h1>
              {currentSection.title}
            </h1>

            <p>
              {currentSection.description}
            </p>

          </div>

          {/* PERSONAL INFORMATION */}
          {currentSection.id === "personal" && (
            <div className="resume-section">

              <div className="resume-section-heading">

                <div>
                  <h2>Personal Information</h2>

                  <p>
                    Your name and email are required.
                    Other details are optional.
                  </p>
                </div>

                <span className="required-label">
                  Required fields
                </span>

              </div>

              <div className="form-grid">

                <div className="form-group form-group-full">

                  <label htmlFor="image">
                    Profile image
                  </label>

                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <span className="field-hint">
                    Optional. Recommended: professional photo.
                  </span>

                </div>

                <div className="form-group">

                  <label htmlFor="fullName">
                    Full name{" "}
                    <span className="required-star">*</span>
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={handlePersonalChange}
                    placeholder="Your full name"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    Email address{" "}
                    <span className="required-star">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalChange}
                    placeholder="you@example.com"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalChange}
                    placeholder="+91 XXXXX XXXXX"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="profession">
                    Profession
                  </label>

                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={personalInfo.profession}
                    onChange={handlePersonalChange}
                    placeholder="e.g. Software Developer"
                  />

                </div>

                <div className="form-group form-group-full">

                  <label htmlFor="linkedin">
                    LinkedIn profile
                  </label>

                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={personalInfo.linkedin}
                    onChange={handlePersonalChange}
                    placeholder="https://linkedin.com/in/yourname"
                  />

                </div>

                <div className="form-group form-group-full">

                  <label htmlFor="website">
                    Personal website
                  </label>

                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={personalInfo.website}
                    onChange={handlePersonalChange}
                    placeholder="https://yourwebsite.com"
                  />

                </div>

              </div>

            </div>
          )}

          {/* PROFESSIONAL SUMMARY */}
          {currentSection.id === "summary" && (
            <div className="resume-section">

              <div className="resume-section-heading">

                <div>
                  <h2>Professional Summary</h2>

                  <p>
                    Give recruiters a short introduction
                    about your professional background.
                  </p>
                </div>

                <span className="optional-label">
                  Optional
                </span>

              </div>

              <div className="form-group form-group-full">

                <label htmlFor="summary">
                  Summary
                </label>

                <textarea
                  id="summary"
                  value={summary}
                  onChange={(event) =>
                    setSummary(event.target.value)
                  }
                  placeholder="Write a short professional summary about yourself..."
                  rows="8"
                ></textarea>

                <div className="ai-section-actions">

                  <button
                    type="button"
                    className="ai-enhance-btn"
                    onClick={handleEnhanceSummary}
                  >
                    ✦ Enhance with AI
                  </button>

                  <span className="field-hint">
                    AI will improve your summary while
                    keeping your original information.
                  </span>

                </div>

              </div>

            </div>
          )}

          {/* EDUCATION */}
          {currentSection.id === "education" && (
            <div className="resume-section">

              <div className="resume-section-heading">

                <div>
                  <h2>Education</h2>

                  <p>
                    Add your educational qualifications.
                    You can add multiple entries.
                  </p>
                </div>

                <span className="optional-label">
                  Optional
                </span>

              </div>

              {educationList.length > 0 && (
                <div className="education-list">

                  {educationList.map((education, index) => (
                    <div
                      className="education-card"
                      key={index}
                    >

                      <div className="education-card-content">

                        <h3>
                          {education.degree ||
                            "Education"}
                        </h3>

                        <p className="education-institution">
                          {education.institution}
                        </p>

                        {education.fieldOfStudy && (
  <div className="preview-education-field">
    {education.fieldOfStudy}
  </div>
)}

                        {(education.startYear ||
                          education.endYear) && (
                          <p className="education-years">
                            {education.startYear}
                            {education.startYear &&
                            education.endYear
                              ? " - "
                              : ""}
                            {education.endYear}
                          </p>
                        )}

                        {education.location && (
                          <p>
                            {education.location}
                          </p>
                        )}

                      </div>

                      <button
                        type="button"
                        className="delete-education-btn"
                        onClick={() =>
                          deleteEducation(index)
                        }
                      >
                        Delete
                      </button>

                    </div>
                  ))}

                </div>
              )}

              <div className="education-form">

                <h3>
                  {educationList.length > 0
                    ? "Add another education"
                    : "Add education"}
                </h3>

                <div className="form-grid">

                  <div className="form-group">

                    <label htmlFor="institution">
                      Institution / School
                    </label>

                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={educationForm.institution}
                      onChange={handleEducationChange}
                      placeholder="e.g. University BDT College of Engineering"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="degree">
                      Degree / Qualification
                    </label>

                    <input
                      type="text"
                      id="degree"
                      name="degree"
                      value={educationForm.degree}
                      onChange={handleEducationChange}
                      placeholder="e.g. B.E."
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="fieldOfStudy">
                      Field of study
                    </label>

                    <input
                      type="text"
                      id="fieldOfStudy"
                      name="fieldOfStudy"
                      value={educationForm.fieldOfStudy}
                      onChange={handleEducationChange}
                      placeholder="e.g. Computer Science and Engineering"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="location">
                      Location
                    </label>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={educationForm.location}
                      onChange={handleEducationChange}
                      placeholder="e.g. Davangere, Karnataka"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="startYear">
                      Start year
                    </label>

                    <input
                      type="text"
                      id="startYear"
                      name="startYear"
                      value={educationForm.startYear}
                      onChange={handleEducationChange}
                      placeholder="e.g. 2023"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="endYear">
                      End year / Expected
                    </label>

                    <input
                      type="text"
                      id="endYear"
                      name="endYear"
                      value={educationForm.endYear}
                      onChange={handleEducationChange}
                      placeholder="e.g. 2027"
                    />

                  </div>

                  <div className="form-group form-group-full">

                    <label htmlFor="description">
                      Description
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      value={educationForm.description}
                      onChange={handleEducationChange}
                      placeholder="Add relevant coursework, achievements, CGPA, or other details..."
                      rows="5"
                    ></textarea>

                    <span className="field-hint">
                      Optional. You can add your CGPA,
                      percentage, achievements, or relevant coursework.
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="add-education-btn"
                  onClick={addEducation}
                >
                  + Add Education
                </button>

              </div>

            </div>
          )}
          {/* PROJECTS */}


        {/* TECHNICAL SKILLS */}
{currentSection.id === "skills" && (
  <div className="resume-section">

    <div className="resume-section-heading">

      <div>
        <h2>Technical Skills</h2>

        <p>
          Organize your technical skills into categories.
        </p>
      </div>

      <span className="optional-label">
        Optional
      </span>

    </div>

    {/* ADD CATEGORY */}
    <div className="skills-form">

      <label htmlFor="skillCategoryInput">
        Skill category
      </label>

      <div className="skill-input-row">

        <input
          type="text"
          id="skillCategoryInput"
          value={skillCategoryInput}
          onChange={(event) =>
            setSkillCategoryInput(event.target.value)
          }
          onKeyDown={handleSkillCategoryKeyDown}
          placeholder="e.g. Languages, Frontend, Backend"
        />

        <button
          type="button"
          className="add-skill-btn"
          onClick={addSkillCategory}
        >
          + Add Category
        </button>

      </div>

      <span className="field-hint">
        Create categories such as Languages, Frontend,
        Backend, Databases, Concepts, or Tools.
      </span>

    </div>

    {/* CATEGORIES */}
    {skillCategories.length > 0 && (
      <div className="technical-skills-editor">

        {skillCategories.map((category, categoryIndex) => (

          <div
            className="skill-category-card"
            key={categoryIndex}
          >

            <div className="skill-category-header">

              <h3>
                {category.category}
              </h3>

              <button
                type="button"
                className="delete-skill-category-btn"
                onClick={() =>
                  deleteSkillCategory(categoryIndex)
                }
              >
                Delete Category
              </button>

            </div>

            {/* ADD SKILL TO THIS CATEGORY */}
            <div className="skill-input-row">

              <input
                type="text"
                value={skillInput}
                onChange={(event) =>
                  setSkillInput(event.target.value)
                }
                onKeyDown={(event) =>
                  handleSkillKeyDown(event, categoryIndex)
                }
                placeholder={`Add a skill to ${category.category}`}
              />

              <button
                type="button"
                className="add-skill-btn"
                onClick={() =>
                  addSkill(categoryIndex)
                }
              >
                + Add Skill
              </button>

            </div>

            {/* SKILLS IN CATEGORY */}
            {category.skills.length > 0 && (
              <div className="skill-tags">

                {category.skills.map(
                  (skill, skillIndex) => (

                    <div
                      className="skill-tag"
                      key={skillIndex}
                    >

                      <span>
                        {skill}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          deleteSkill(
                            categoryIndex,
                            skillIndex
                          )
                        }
                        aria-label={`Remove ${skill}`}
                      >
                        ×
                      </button>

                    </div>

                  )
                )}

              </div>
            )}

            {category.skills.length === 0 && (
              <span className="field-hint">
                No skills added to this category yet.
              </span>
            )}

          </div>

        ))}

      </div>
    )}

    {skillCategories.length === 0 && (
      <div className="skills-empty">

        <div className="skills-empty-icon">
          ✦
        </div>

        <p>
          No skill categories added yet.
        </p>

        <span>
          Create your first category above.
        </span>

      </div>
    )}

  </div>
)}
          {/* EXPERIENCE */}
{currentSection.id === "experience" && (
  <div className="resume-section">

    <div className="resume-section-heading">

      <div>
        <h2>Work Experience</h2>

        <p>
          Add your professional work experience.
          You can add multiple entries.
        </p>
      </div>

      <span className="optional-label">
        Optional
      </span>

    </div>

    {/* SAVED EXPERIENCE */}
    {experienceList.length > 0 && (
      <div className="experience-list">

        {experienceList.map((experience, index) => (
          <div
            className="experience-card"
            key={index}
          >

            <div className="experience-card-content">

              <h3>
                {experience.jobTitle ||
                  "Work Experience"}
              </h3>

              <p className="experience-company">
                {experience.company}
              </p>

              {(experience.startDate ||
                experience.endDate ||
                experience.currentlyWorking) && (
                <p className="experience-dates">

                  {experience.startDate}

                  {experience.startDate &&
                    (experience.endDate ||
                      experience.currentlyWorking) &&
                    " - "}

                  {experience.currentlyWorking
                    ? "Present"
                    : experience.endDate}

                </p>
              )}

              {experience.location && (
                <p>
                  {experience.location}
                </p>
              )}

              {experience.description && (
                <p className="experience-description">
                  {experience.description}
                </p>
              )}

            </div>

            <button
              type="button"
              className="delete-experience-btn"
              onClick={() =>
                deleteExperience(index)
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    )}

    {/* ADD EXPERIENCE FORM */}
    <div className="experience-form">

      <h3>
        {experienceList.length > 0
          ? "Add another experience"
          : "Add work experience"}
      </h3>

      <div className="form-grid">

        <div className="form-group">

          <label htmlFor="jobTitle">
            Job title
          </label>

          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={experienceForm.jobTitle}
            onChange={handleExperienceChange}
            placeholder="e.g. Software Developer"
          />

        </div>

        <div className="form-group">

          <label htmlFor="company">
            Company
          </label>

          <input
            type="text"
            id="company"
            name="company"
            value={experienceForm.company}
            onChange={handleExperienceChange}
            placeholder="e.g. ABC Technologies"
          />

        </div>

        <div className="form-group">

          <label htmlFor="location">
            Location
          </label>

          <input
            type="text"
            id="location"
            name="location"
            value={experienceForm.location}
            onChange={handleExperienceChange}
            placeholder="e.g. Bengaluru, Karnataka"
          />

        </div>

        <div className="form-group">

          <label htmlFor="startDate">
            Start date
          </label>

          <input
            type="text"
            id="startDate"
            name="startDate"
            value={experienceForm.startDate}
            onChange={handleExperienceChange}
            placeholder="e.g. Jan 2026"
          />

        </div>

        <div className="form-group">

          <label htmlFor="endDate">
            End date
          </label>

          <input
            type="text"
            id="endDate"
            name="endDate"
            value={experienceForm.endDate}
            onChange={handleExperienceChange}
            placeholder="e.g. Dec 2026"
            disabled={experienceForm.currentlyWorking}
          />

        </div>

        <div className="form-group form-group-checkbox">

          <label className="checkbox-label">

            <input
              type="checkbox"
              name="currentlyWorking"
              checked={experienceForm.currentlyWorking}
              onChange={handleExperienceChange}
            />

            <span>
              I currently work here
            </span>

          </label>

        </div>

        <div className="form-group form-group-full">

          <label htmlFor="experienceDescription">
            Description
          </label>

          <textarea
            id="experienceDescription"
            name="description"
            value={experienceForm.description}
            onChange={handleExperienceChange}
            placeholder="Describe your responsibilities, contributions, and results..."
            rows="7"
          ></textarea>

          <div className="ai-section-actions">

            <button
              type="button"
              className="ai-enhance-btn"
              onClick={handleEnhanceExperience}
            >
              ✦ Enhance with AI
            </button>

            <span className="field-hint">
              AI will improve your description without
              silently replacing your original text.
            </span>

          </div>

        </div>

      </div>

      <button
        type="button"
        className="add-experience-btn"
        onClick={addExperience}
      >
        + Add Experience
      </button>

    </div>

  </div>
)}
{/* CERTIFICATIONS */}
{currentSection.id === "certifications" && (
  <div className="resume-section">
    <div className="resume-section-heading">
      <div>
        <h2>Certifications</h2>
        <p>Add certifications, courses, or professional credentials.</p>
      </div>
      <span className="optional-label">Optional</span>
    </div>

    {certificationList.length > 0 && (
      <div className="certification-list">
        {certificationList.map((certification, index) => (
          <div className="certification-card" key={index}>
            <div className="certification-card-content">
              <h3>
                {certification.name || "Certification"}
              </h3>

              {certification.organization && (
                <p className="certification-organization">
                  {certification.organization}
                </p>
              )}

              {certification.issueDate && (
                <p className="certification-date">
                  Issued: {certification.issueDate}
                </p>
              )}

              {certification.credentialId && (
                <p>
                  Credential ID: {certification.credentialId}
                </p>
              )}

              {certification.description && (
                <p className="certification-description">
                  {certification.description}
                </p>
              )}
            </div>

            <button
              type="button"
              className="delete-certification-btn"
              onClick={() => deleteCertification(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )}

    <div className="certification-form">
      <h3>
        {certificationList.length > 0
          ? "Add another certification"
          : "Add certification"}
      </h3>

      <div className="form-grid">

        <div className="form-group">
          <label htmlFor="certificationName">
            Certification name
          </label>

          <input
            type="text"
            id="certificationName"
            name="name"
            value={certificationForm.name}
            onChange={handleCertificationChange}
            placeholder="e.g. AWS Certified Developer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificationOrganization">
            Issuing organization
          </label>

          <input
            type="text"
            id="certificationOrganization"
            name="organization"
            value={certificationForm.organization}
            onChange={handleCertificationChange}
            placeholder="e.g. Amazon Web Services"
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificationIssueDate">
            Issue date
          </label>

          <input
            type="text"
            id="certificationIssueDate"
            name="issueDate"
            value={certificationForm.issueDate}
            onChange={handleCertificationChange}
            placeholder="e.g. June 2026"
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificationCredentialId">
            Credential ID
          </label>

          <input
            type="text"
            id="certificationCredentialId"
            name="credentialId"
            value={certificationForm.credentialId}
            onChange={handleCertificationChange}
            placeholder="e.g. ABC123XYZ"
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="certificationCredentialUrl">
            Credential URL
          </label>

          <input
            type="url"
            id="certificationCredentialUrl"
            name="credentialUrl"
            value={certificationForm.credentialUrl}
            onChange={handleCertificationChange}
            placeholder="https://..."
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="certificationDescription">
            Description
          </label>

          <textarea
            id="certificationDescription"
            name="description"
            value={certificationForm.description}
            onChange={handleCertificationChange}
            placeholder="Add a short description of the certification..."
            rows="5"
          ></textarea>
        </div>

      </div>

      <button
        type="button"
        className="add-certification-btn"
        onClick={addCertification}
      >
        + Add Certification
      </button>
    </div>
  </div>
)}

{currentSection.id === "achievements" && (
  <div className="resume-section">
    <div className="section-header">
      <div>
        <h2>Achievements</h2>
        <p>Add achievements, awards, or accomplishments.</p>
      </div>
    </div>

    <div className="achievement-list">
      {achievements.map((achievement, index) => (
        <div className="achievement-card" key={index}>
          <div className="achievement-card-content">
            <p>{achievement}</p>
          </div>

          <button
            type="button"
            className="delete-achievement-btn"
            onClick={() => {
              setAchievements(
                achievements.filter(
                  (_, achievementIndex) => achievementIndex !== index
                )
              );
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>

    <div className="achievement-form">
      <div className="form-group">
        <label htmlFor="achievementInput">
          Achievement
        </label>

        <textarea
          id="achievementInput"
          value={achievementInput}
          onChange={(e) => setAchievementInput(e.target.value)}
          placeholder="e.g. Secured first place in a college-level coding competition."
          rows="4"
        ></textarea>

        <span className="field-hint">
          Add one achievement or accomplishment at a time.
        </span>
      </div>

      <button
        type="button"
        className="add-achievement-btn"
        onClick={() => {
          if (!achievementInput.trim()) return;

          setAchievements([
            ...achievements,
            achievementInput.trim(),
          ]);

          setAchievementInput("");
        }}
      >
        + Add Achievement
      </button>
    </div>
  </div>
)}
{currentSection.id === "internships" && (
  <div className="resume-section">
    <div className="section-header">
      <div>
        <h2>Internships</h2>
        <p>Add your internship experience and responsibilities.</p>
      </div>
    </div>

    <div className="internship-list">
      {internships.map((internship, index) => (
        <div className="internship-card" key={index}>
          <div className="internship-card-content">
            <p>{internship}</p>
          </div>

          <button
            type="button"
            className="delete-internship-btn"
            onClick={() => {
              setInternships(
                internships.filter(
                  (_, internshipIndex) => internshipIndex !== index
                )
              );
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>

    <div className="internship-form">
      <div className="form-group">
        <label htmlFor="internshipInput">
          Internship
        </label>

        <textarea
          id="internshipInput"
          value={internshipInput}
          onChange={(e) => setInternshipInput(e.target.value)}
          placeholder="e.g. Developed responsive web pages using React and integrated REST APIs."
          rows="4"
        ></textarea>

        <span className="field-hint">
          Add one internship experience at a time.
        </span>
      </div>

      <button
        type="button"
        className="add-internship-btn"
        onClick={() => {
          if (!internshipInput.trim()) return;

          setInternships([
            ...internships,
            internshipInput.trim(),
          ]);

          setInternshipInput("");
        }}
      >
        + Add Internship
      </button>
    </div>
  </div>
)}

{currentSection.id === "languages" && (
  <div className="resume-section">
    <div className="section-header">
      <div>
        <h2>Languages</h2>
        <p>Add the languages you know.</p>
      </div>
    </div>

    <div className="language-list">
      {languages.map((language, index) => (
        <div className="language-card" key={index}>
          <div className="language-card-content">
            <p>{language}</p>
          </div>

          <button
            type="button"
            className="delete-language-btn"
            onClick={() => {
              setLanguages(
                languages.filter(
                  (_, languageIndex) => languageIndex !== index
                )
              );
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>

    <div className="language-form">
      <div className="form-group">
        <label htmlFor="languageInput">
          Language
        </label>

        <input
          type="text"
          id="languageInput"
          value={languageInput}
          onChange={(e) => setLanguageInput(e.target.value)}
          placeholder="e.g. English"
        />

        <span className="field-hint">
          Add one language at a time. You can include your proficiency level.
        </span>
      </div>

      <button
        type="button"
        className="add-language-btn"
        onClick={() => {
          if (!languageInput.trim()) return;

          setLanguages([
            ...languages,
            languageInput.trim(),
          ]);

          setLanguageInput("");
        }}
      >
        + Add Language
      </button>
    </div>
  </div>
)}

{currentSection.id === "volunteer" && (
  <div className="resume-section">
    <div className="section-header">
      <div>
        <h2>Participation and Involment</h2>
        <p>Add your volunteer work and community involvement.</p>
      </div>
    </div>

    <div className="volunteer-list">
      {volunteerExperience.map((volunteer, index) => (
        <div className="volunteer-card" key={index}>
          <div className="volunteer-card-content">
            <p>{volunteer}</p>
          </div>

          <button
            type="button"
            className="delete-volunteer-btn"
            onClick={() => {
              setVolunteerExperience(
                volunteerExperience.filter(
                  (_, volunteerIndex) => volunteerIndex !== index
                )
              );
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>

    <div className="volunteer-form">
      <div className="form-group">
        <label htmlFor="volunteerInput">
          Volunteer Experience
        </label>

        <textarea
          id="volunteerInput"
          value={volunteerInput}
          onChange={(e) => setVolunteerInput(e.target.value)}
          placeholder="e.g. Volunteered at a college technical fest and coordinated student activities."
          rows="4"
        ></textarea>

        <span className="field-hint">
          Add one volunteer experience at a time.
        </span>
      </div>

      <button
        type="button"
        className="add-volunteer-btn"
        onClick={() => {
          if (!volunteerInput.trim()) return;

          setVolunteerExperience([
            ...volunteerExperience,
            volunteerInput.trim(),
          ]);

          setVolunteerInput("");
        }}
      >
        + Add Volunteer Experience
      </button>
    </div>
  </div>
)}
{/* PROJECTS */}
{currentSection.id === "projects" && (
  <div className="resume-section">
    <div className="resume-section-heading">
      <div>
        <h2>Projects</h2>
        <p>Add projects that demonstrate your skills and technical experience.</p>
      </div>
      <span className="optional-label">Optional</span>
    </div>

    {projectList.length > 0 && (
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-content">
              <h3>{project.name || "Project"}</h3>

              {project.role && (
                <p className="project-role">
                  {project.role}
                </p>
              )}

              {project.technologies && (
                <p className="project-technologies">
                  Technologies: {project.technologies}
                </p>
              )}

              {(project.startDate || project.endDate) && (
                <p className="project-dates">
                  {project.startDate}
                  {project.startDate && project.endDate && " - "}
                  {project.endDate}
                </p>
              )}

              {project.url && (
                <p className="project-url">
                  {project.url}
                </p>
              )}

              {project.description && (
                <p className="project-description">
                  {project.description}
                </p>
              )}
            </div>

            <button
              type="button"
              className="delete-project-btn"
              onClick={() => deleteProject(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )}

    <div className="project-form">
      <h3>
        {projectList.length > 0
          ? "Add another project"
          : "Add project"}
      </h3>

      <div className="form-grid">

        <div className="form-group">
          <label htmlFor="projectName">
            Project name
          </label>

          <input
            type="text"
            id="projectName"
            name="name"
            value={projectForm.name}
            onChange={handleProjectChange}
            placeholder="e.g. AI Resume Builder"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectRole">
            Your role
          </label>

          <input
            type="text"
            id="projectRole"
            name="role"
            value={projectForm.role}
            onChange={handleProjectChange}
            placeholder="e.g. Full Stack Developer"
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="projectTechnologies">
            Technologies used
          </label>

          <input
            type="text"
            id="projectTechnologies"
            name="technologies"
            value={projectForm.technologies}
            onChange={handleProjectChange}
            placeholder="e.g. React, Flask, MongoDB, Gemini API"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectStartDate">
            Start date
          </label>

          <input
            type="text"
            id="projectStartDate"
            name="startDate"
            value={projectForm.startDate}
            onChange={handleProjectChange}
            placeholder="e.g. Jan 2026"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectEndDate">
            End date
          </label>

          <input
            type="text"
            id="projectEndDate"
            name="endDate"
            value={projectForm.endDate}
            onChange={handleProjectChange}
            placeholder="e.g. May 2026"
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="projectUrl">
            Project URL
          </label>

          <input
            type="url"
            id="projectUrl"
            name="url"
            value={projectForm.url}
            onChange={handleProjectChange}
            placeholder="https://github.com/username/project"
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="projectDescription">
            Description
          </label>

          <textarea
            id="projectDescription"
            name="description"
            value={projectForm.description}
            onChange={handleProjectChange}
            placeholder="Describe the project, your contribution, features, and results..."
            rows="7"
          ></textarea>

          <div className="ai-section-actions">
            <button
              type="button"
              className="ai-enhance-btn"
              onClick={handleEnhanceProject}
            >
              ✦ Enhance with AI
            </button>

            <span className="field-hint">
              AI will improve your description without silently replacing your original text.
            </span>
          </div>
        </div>

      </div>

      <button
        type="button"
        className="add-project-btn"
        onClick={addProject}
      >
        + Add Project
      </button>
    </div>
  </div>
)}
          
          {/* FUTURE SECTIONS */}
          


          {/* NAVIGATION */}
          <div className="editor-navigation">

            <button
              type="button"
              className="previous-btn"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              ← Previous
            </button>

            <div className="navigation-right">

              {!currentSection.required && (
                <button
                  type="button"
                  className="skip-btn"
                  onClick={handleSkip}
                >
                  Skip →
                </button>
              )}

              {!isLastStep ? (
                <button
                  type="button"
                  className="next-btn"
                  onClick={handleNext}
                >
                  Save & Next →
                </button>
              ) : (
                <button
                  type="button"
                  className="next-btn"
                >
                  Save Resume ✓
                </button>
              )}

            </div>

          </div>

        </section>
        
        
        {/* RIGHT SIDE - LIVE PREVIEW */}
        <section className="resume-preview-panel">

          <div className="preview-toolbar">

            <span>
              Live Preview
            </span>

            <span className="preview-status">
              ● Auto preview
            </span>

          </div>
          

          <div className="resume-preview">

            <div className="resume-preview-content">

              {/* HEADER */}
              <div className="preview-header">

                {personalInfo.image && (
                  <img
                    src={URL.createObjectURL(personalInfo.image)}
                    alt="Profile"
                    className="preview-profile-image"
                  />
                )}

                <h1>
                  {personalInfo.fullName || "Your Name"}
                </h1>

                {personalInfo.profession && (
  <h2>{personalInfo.profession}</h2>
)}

                <div className="preview-contact">

                  {personalInfo.email && (
                    <span>
                      {personalInfo.email}
                    </span>
                  )}

                  {personalInfo.phone && (
                    <span>
                      {personalInfo.phone}
                    </span>
                  )}

                </div>

                {(personalInfo.linkedin ||
                  personalInfo.website) && (
                  <div className="preview-links">

                    {personalInfo.linkedin && (
                      <span>
                        {personalInfo.linkedin}
                      </span>
                    )}

                    {personalInfo.website && (
                      <span>
                        {personalInfo.website}
                      </span>
                    )}

                  </div>
                )}

              </div>

              {/* SUMMARY */}
              {summary && (
                <>
                  

                  <div className="preview-placeholder-section">

                    <h3>
                      Professional Summary
                    </h3>

                    <p>
                      {summary}
                    </p>

                  </div>
                </>
              )}

              {skillCategories.some(
  (category) => category.skills.length > 0
) && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">

      <h3>
        Technical Skills
      </h3>

      <div className="preview-technical-skills">

        {skillCategories
          .filter(
            (category) => category.skills.length > 0
          )
          .map((category, categoryIndex) => (

            <div
              className="preview-skill-category"
              key={categoryIndex}
            >

              <strong>
                {category.category}
              </strong>

              <span>
                {category.skills.join(" • ")}
              </span>

            </div>

          ))}

      </div>

    </div>
  </>
)}

{/* PROJECTS */}
{projectList.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Projects</h3>

      {projectList.map((project, index) => (
        <div
          className="preview-project-item"
          key={index}
        >
          <div className="preview-project-top">
            <strong>
              {project.name || "Project"}
            </strong>

            {(project.startDate || project.endDate) && (
              <span>
                {project.startDate}

                {project.startDate &&
                  project.endDate &&
                  " - "}

                {project.endDate}
              </span>
            )}
          </div>

          {project.role && (
            <div className="preview-project-role">
              {project.role}
            </div>
          )}

          {project.technologies && (
            <div className="preview-project-technologies">
              {project.technologies}
            </div>
          )}

          {project.description && (
            <p className="preview-project-description">
              {project.description}
            </p>
          )}

          {project.url && (
            <div className="preview-project-url">
              {project.url}
            </div>
          )}
        </div>
      ))}
    </div>
  </>
)}

              {educationList.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Education</h3>

      {educationList.map((education, index) => (
        <div className="preview-education-item" key={index}>

          {/* Institution + Dates */}
          <div className="preview-education-row">
            <strong className="preview-education-institution">
              {education.institution || "Institution"}
            </strong>

            {(education.startYear || education.endYear) && (
              <span className="preview-education-date">
                {education.startYear}
                {education.startYear && education.endYear && " – "}
                {education.endYear}
              </span>
            )}
          </div>

          {/* Degree + Location */}
          <div className="preview-education-row preview-education-subrow">
            <div className="preview-education-degree">
              {education.degree && (
                <strong>{education.degree}</strong>
              )}

              {education.fieldOfStudy && (
                <>
                  {education.degree && " in "}
                  {education.fieldOfStudy}
                </>
              )}
            </div>

            {education.location && (
              <span className="preview-education-location">
                {education.location}
              </span>
            )}
          </div>

          {/* Additional information */}
          {education.description && (
            <p className="preview-education-description">
              {education.description}
            </p>
          )}

        </div>
      ))}
    </div>
  </>
)}
              {/* EXPERIENCE */}
{experienceList.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">

      <h3>
        Experience
      </h3>

      {experienceList.map((experience, index) => (
        <div
          className="preview-experience-item"
          key={index}
        >

          <div className="preview-experience-top">

            <strong>
              {experience.jobTitle || "Job Title"}
            </strong>

            {(experience.startDate ||
              experience.endDate ||
              experience.currentlyWorking) && (
              <span>

                {experience.startDate}

                {experience.startDate &&
                  (experience.endDate ||
                    experience.currentlyWorking) &&
                  " - "}

                {experience.currentlyWorking
                  ? "Present"
                  : experience.endDate}

              </span>
            )}

          </div>

          {experience.company && (
            <div className="preview-experience-company">
              {experience.company}
            </div>
          )}

          {experience.location && (
            <div className="preview-experience-location">
              {experience.location}
            </div>
          )}

          {experience.description && (
            <p className="preview-experience-description">
              {experience.description}
            </p>
          )}

        </div>
      ))}

    </div>
  </>
)}

{/* INTERNSHIPS */}
{internships.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Internships</h3>

      {internships.map((internship, index) => (
        <div
          className="preview-internship-item"
          key={index}
        >
          {internship}
        </div>
      ))}
    </div>
  </>
)}

{/* CERTIFICATIONS */}
{certificationList.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Certifications</h3>

      {certificationList.map((certification, index) => (
        <div
          className="preview-certification-item"
          key={index}
        >
          <div className="preview-certification-top">
            <strong>
              {certification.name || "Certification"}
            </strong>

            {certification.issueDate && (
              <span>
                {certification.issueDate}
              </span>
            )}
          </div>

          {certification.organization && (
            <div className="preview-certification-organization">
              {certification.organization}
            </div>
          )}

          {certification.credentialId && (
            <div className="preview-certification-credential">
              Credential ID: {certification.credentialId}
            </div>
          )}

          {certification.description && (
            <p className="preview-certification-description">
              {certification.description}
            </p>
          )}

          {certification.credentialUrl && (
            <div className="preview-certification-url">
              {certification.credentialUrl}
            </div>
          )}
        </div>
      ))}
    </div>
  </>
)}

{/* ACHIEVEMENTS */}
{achievements.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Achievements</h3>

      {achievements.map((achievement, index) => (
        <div
          className="preview-achievement-item"
          key={index}
        >
          {achievement}
        </div>
      ))}
    </div>
  </>
)}


{/* LANGUAGES */}
{languages.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Languages</h3>

      <div className="preview-languages">
        {languages.map((language, index) => (
          <span
            className="preview-language"
            key={index}
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  </>
)}


{/* VOLUNTEER EXPERIENCE */}
{volunteerExperience.length > 0 && (
  <>
    <div className="preview-line"></div>

    <div className="preview-placeholder-section">
      <h3>Participation and Involment</h3>

      {volunteerExperience.map((volunteer, index) => (
  <div className="preview-volunteer-item" key={index}>
    {volunteer}
  </div>
))}
    </div>
  </>
)}

  

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ResumeEditor;