// Portfolio JavaScript

// ScrollSpy: highlight navbar link of visible section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function scrollSpy() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(sectionId)) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', scrollSpy);

// Typed.js animation
new Typed('#typed-text', {
  strings: [
    '<i class="fas fa-laptop-code"></i> Full Stack Java Developer',
    '<i class="fas fa-brain"></i> ML Enthusiast',
    '<i class="fas fa-lightbulb"></i> Problem Solver',
    '<i class="fas fa-rocket"></i> Tech Explorer'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
  showCursor: false
});

// Contact form validation
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const confirmation = document.getElementById('confirmation');

  if (name && email && message) {
    confirmation.textContent = `✅ Thank you, ${name}. Your message has been sent!`;
    confirmation.style.color = "lime";
    e.target.reset();
  } else {
    confirmation.textContent = "⚠️ Please fill out all fields.";
    confirmation.style.color = "orange";
  }
}

document.querySelector('form')?.addEventListener('submit', handleSubmit);

// Inject Skills Section
const skillsSection = document.createElement('section');
skillsSection.id = 'skills';
skillsSection.className = 'glass max-w-5xl mx-auto my-16 p-8 text-white';
skillsSection.innerHTML = `
  <h2 class="text-3xl font-bold text-cyan-400 mb-6">Skills & Experience</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <div>
      <h3 class="text-xl font-semibold mb-4">Programming Languages</h3>
      <ul class="grid grid-cols-3 gap-4 text-center text-sm">
        <li><i class="fab fa-python text-2xl"></i><br>Python</li>
        <li><i class="fab fa-java text-2xl"></i><br>Java</li>
        <li><i class="fas fa-code text-2xl"></i><br>C</li>
        <li><i class="fas fa-code text-2xl"></i><br>C++</li>
        <li><i class="fab fa-js text-2xl"></i><br>JavaScript</li>
        <li><i class="fab fa-html5 text-2xl"></i><br>HTML</li>
        <li><i class="fab fa-css3-alt text-2xl"></i><br>CSS</li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-4">Frameworks / Libraries</h3>
      <ul class="grid grid-cols-3 gap-4 text-center text-sm">
        <li><i class="fab fa-react text-2xl"></i><br>React</li>
        <li><i class="fab fa-node-js text-2xl"></i><br>Node.js</li>
        <li><i class="fas fa-bolt text-2xl"></i><br>Bootstrap</li>
        <li><i class="fas fa-wind text-2xl"></i><br>Tailwind</li>
        <li><i class="fas fa-stream text-2xl"></i><br>Express</li>
        <li><i class="fas fa-leaf text-2xl"></i><br>Django</li>
      </ul>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-4">Tools & Platforms</h3>
      <ul class="grid grid-cols-3 gap-4 text-center text-sm">
        <li><i class="fab fa-git-alt text-2xl"></i><br>Git</li>
        <li><i class="fab fa-github text-2xl"></i><br>GitHub</li>
        <li><i class="fas fa-terminal text-2xl"></i><br>VS Code</li>
        <li><i class="fas fa-cloud text-2xl"></i><br>Netlify</li>
        <li><i class="fas fa-database text-2xl"></i><br>MongoDB</li>
        <li><i class="fas fa-server text-2xl"></i><br>MySQL</li>
      </ul>
    </div>
  </div>
`;
document.body.appendChild(skillsSection);
