const contentBox = document.getElementById("contentBox");

const content = {
  profile: `
            <section class="screen-section" data-aos="fade-right">
              <div class="profile-box1">
                <div class="avatar-placeholder">
                  <img
                    src="picture/WhatsApp Image 2026-03-15 at 18.59.26.jpeg"
                    alt="Kula"
                  />  
                </div>
                <h3 class="profile-name" data-aos="slide-up" data-aos-duration="2000">Kula</h3>
                <div class="profile-role" data-i18n="role" data-aos="zoom-in" data-aos-duration="2000">Web Developer & AI Entusiast</div>
                  <div class="profile-info">
                    <div class="profile-info-item">
                      <span class="info-label" data-i18n="age" data-aos="slide-right" data-aos-duration="2000">Age</span>
                      <span class="info-value" data-i18n="years" data-aos="slide-left" data-aos-duration="2000">15 Years.</span>
                    </div>
                    <div class="profile-info-item">
                      <span class="info-label" data-i18n="edu" data-aos="slide-right" data-aos-duration="2000">Education</span>
                      <span class="info-value" data-i18n="school" data-aos="slide-left" data-aos-duration="2000">Santiphab high school.</span>
                    </div>
                    <div class="profile-info-item">
                      <span class="info-label" data-i18n="addr" data-aos="slide-right" data-aos-duration="2000">Address</span>
                      <span class="info-value" data-i18n="live" data-aos="slide-left" data-aos-duration="2000">LPD (Laos).</span>
                    </div>
                    <div class="profile-info-item">
                      <span class="info-label" data-i18n="exper" data-aos="slide-right" data-aos-duration="2000">Experience</span>
                      <span class="info-value" data-i18n="exper_years" data-aos="slide-left" data-aos-duration="2000">1+ Year.</span>
                    </div>
                    <div class="arrow-cv" data-aos="slide-up" data-aos-duration="2000">
                      <div class="arrow-info">
                        <span class="arrow-text-info"><small data-i18n="arrow_text2">Hire Me </small>
                        &#8594;
                        </span>
                      </div>
                      <div class="CV-btn">
                        <a href="Modern Professional CV Resume.pdf" target="_blank" download id="link-btn-CV">
                          <i class="fa-regular fa-file"></i>
                          <span data-i18n="DownloadCV2">Download CV</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  `,

  skills: `
      <div class="skills-grid" data-aos="zoom-in" data-aos-duration="2000">
        <div class="skill-item">
          <div class="skill-name"><i class="fa-solid fa-code"></i>HTML / CSS</div>
          <div class="skill-desc" data-i18n="html_css">Front-end & Design</div>
        </div>
        <div class="skill-item">
          <div class="skill-name"><i class="fa-brands fa-js"></i>JavaScript</div>
          <div class="skill-desc">Frontend & Logic</div>
        </div>
        <div class="skill-item">
          <div class="skill-name"><i class="fa-brands fa-python"></i>Python</div>
          <div class="skill-desc">Backend & AI</div>
        </div>
        <div class="skill-item">
          <div class="skill-name" data-i18n="web"><i class="fa-solid fa-globe"></i>Web Development</div>
          <div class="skill-desc" data-i18n="web_port">Portfolio & Websites</div>
        </div>
        <div class="skill-item">
          <div class="skill-name" data-i18n="ai"><i class="fa-solid fa-robot"></i>AI Enthusiast</div>
          <div class="skill-desc" data-i18n="ai_function">Learning & Exploring</div>
        </div>
        <div class="skill-item">
          <div class="skill-name" data-i18n="ai_tools"><i class="fa-solid fa-tools"></i>AI Tools</div>
          <div class="skill-desc">Claude, Gemini & ChatGPT</div>
        </div>
        <div class="skill-item">
          <div class="skill-name"><i class="fa-solid fa-pen-nib"></i>Graphic Design</div>
          <div class="skill-desc">Affinity & Canva</div>
        </div>
        <div class="skill-item">
          <div class="skill-name"><i class="fa-brands fa-microsoft"></i>Microsoft Office</div>
          <div class="skill-desc">Word, Excel, PowerPoint</div>
        </div>
      </div>
  `,

  certificate: `
      <div class="cert-grid" data-aos="zoom-in" data-aos-duration="2000">
        <div class="cert-card">
          <div class="cert-img">
            <a href="certificate.html" target="_blank">
              <img src="picture/Google.jpeg" alt="AI Ready ASEAN."/>
            </a>
          </div>
          <div class="cert-body">
            <div class="cert-title-text" data-i18n="Name_cert">AI Ready ASEAN.</div>
            <div class="cert-meta" data-i18n="Title_cert">ASEAN Foundation · 2026</div>
          </div>
        </div>
      </div>
  `, 

  project: `
      <div class="project-grid" data-aos="zoom-in" data-aos-duration="2000">
        <div class="project-card">
          <div class="project-img">
            <a href="project.html" target="_blank">
              <img src="picture/Screenshot_29-6-2026_222631_127.0.0.1.jpeg"/>
            </a>
          </div>
          <div class="project-body">
            <div class="project-title-text" data-i18n="Name_project">Project Portfolio</div>
            <div class="project-meta" data-i18n="Title_project">A responsive portfolio website showcasing my projects, skills and contact information with a modern and clean design.</div>
          </div>
        </div>
      </div>
  `
};

function showContent(section) {
  if (!section) return;
  const sectionKey = section.toLowerCase();

  contentBox.innerHTML = content[sectionKey];

  const currentButtons = document.querySelectorAll(".nav-button");
  currentButtons.forEach((button) => {
    button.classList.remove("active");
    if (button.dataset.section && button.dataset.section.toLowerCase() === sectionKey) {
      button.classList.add("active");
    }
  });

  if (sectionKey === "certificate" && typeof setupCertificateModal === "function") {
    setupCertificateModal();
  }

  if (typeof currentLang !== 'undefined') {
    applyTranslation(currentLang);
  }

  if (typeof AOS !== 'undefined') {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
}

document.addEventListener("click", function (event) {
  const button = event.target.closest(".nav-button");
  if (button) {
    const section = button.dataset.section;
    showContent(section);
  }
});



// Load "profile" by default on mobile screens (<= 768px) and "skills" on desktop
function loadDefaultTab() {
  if (window.innerWidth <= 768) {
    showContent("profile");
  } else {
    showContent("skills");
  }
}

// Initial load
loadDefaultTab();