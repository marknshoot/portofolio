/* =========================================
   DARK MODE
   ========================================= */

function initDarkMode() {
  const toggle = document.querySelector('.dark-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  if (initial === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* =========================================
   STICKY NAV ON SCROLL
   ========================================= */

function initStickyNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

/* =========================================
   ACTIVE NAV LINK ON SCROLL
   ========================================= */

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActive() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActive);
  updateActive();
}

/* =========================================
   MOBILE NAV TOGGLE
   ========================================= */

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
}

/* =========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#top' || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* =========================================
   SCROLL REVEAL — SECTIONS FADE IN
   ========================================= */

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* =========================================
   PROFILE PICTURE — 3D TILT ON HOVER
   ========================================= */

function initProfileTilt() {
  const wrapper = document.querySelector('.about-image-wrapper');
  if (!wrapper) return;

  const image = wrapper.querySelector('.about-image');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });

  wrapper.addEventListener('mouseenter', () => {
    image.style.transition = 'transform 0.1s ease';
  });

  wrapper.addEventListener('mouseleave', () => {
    image.style.transition = 'transform 0.4s ease';
  });
}

/* =========================================
   PROJECT CARDS — 3D TILT ON HOVER
   ========================================= */

function initProjectTilt() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* =========================================
   SKILL BARS — ANIMATE ON SCROLL
   ========================================= */

function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (!skillBars.length) return;

  // Define skill levels (percentage)
  const skillLevels = {
    'Machine Learning': 85,
    'Data Analysis': 90,
    'Mathematics & Statistics': 80,
    'Data Engineering': 70,
    'Programming': 85,
    'LLMs & NLP': 75
  };

  // Set initial widths
  skillBars.forEach(bar => {
    const card = bar.closest('.skill-card');
    const title = card.querySelector('h3');
    if (title && skillLevels[title.textContent]) {
      bar.dataset.level = skillLevels[title.textContent];
      bar.style.width = '0%';
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;
        entry.target.style.width = level + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
}

/* =========================================
   STATS — COUNT UP ANIMATION
   ========================================= */

function initCountUp() {
  const stats = document.querySelectorAll('.stat-number');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.textContent);
        const suffix = el.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 40;
        const duration = 1500;
        const stepTime = duration / 40;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current) + suffix;
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

/* =========================================
   INIT ALL
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initStickyNav();
  initActiveNav();
  initMobileNav();
  initSmoothScroll();
  initScrollReveal();
  initProfileTilt();
  initProjectTilt();
  initSkillBars();
  initCountUp();
});