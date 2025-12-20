// portfolio/static/js/script.js

//  Helper: Create Tech Badges 
function createBadges(stackString, container) {
  container.innerHTML = '';
  if (!stackString) return;

  const techs = stackString.split(',');
  techs.forEach(tech => {
    tech = tech.trim();
    if (tech) {
      const span = document.createElement('span');
      span.className = 'px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs rounded font-medium border border-indigo-100';
      span.textContent = tech;
      container.appendChild(span);
    }
  });
}

//  Project Modal Functions 
function openProjectModalFromCard(card) {
  const title = card.dataset.title || '';
  const stack = card.dataset.stack || '';
  const github = card.dataset.github || '';
  const demo = card.dataset.demo || '';
  
  const descEl = card.querySelector('.hidden-description');
  const description = descEl ? descEl.innerHTML : '';

  const modal = document.getElementById('projectModal');
  document.getElementById('projectModalTitle').textContent = title;
  document.getElementById('projectModalDescription').innerHTML = description;

  const stackContainer = document.getElementById('projectModalStack');
  createBadges(stack, stackContainer);

  const linksEl = document.getElementById('projectModalLinks');
  linksEl.innerHTML = '';
  
  if (github) {
    const a = document.createElement('a');
    a.href = github;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'flex items-center px-4 py-2 bg-gray-100 rounded text-xs font-medium text-gray-700 hover:bg-gray-200 transition';
    a.innerHTML = '<i data-feather="github" class="w-3 h-3 mr-2"></i> GitHub';
    linksEl.appendChild(a);
  }
  if (demo) {
    const b = document.createElement('a');
    b.href = demo;
    b.target = '_blank';
    b.rel = 'noopener';
    b.className = 'flex items-center px-4 py-2 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition';
    b.innerHTML = '<i data-feather="external-link" class="w-3 h-3 mr-2"></i> Live Demo';
    linksEl.appendChild(b);
  }
  
  feather.replace();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

//  Research Modal Functions 
function openResearchModalFromCard(card) {
  const title = card.dataset.title || '';
  const stack = card.dataset.stack || '';
  const link = card.dataset.link || '';
  
  const descEl = card.querySelector('.hidden-description');
  const description = descEl ? descEl.innerHTML : '';

  const modal = document.getElementById('researchModal');
  document.getElementById('researchModalTitle').textContent = title;
  document.getElementById('researchModalDescription').innerHTML = description;

  const stackContainer = document.getElementById('researchModalStack');
  createBadges(stack, stackContainer);

  const linksEl = document.getElementById('researchModalLinks');
  linksEl.innerHTML = '';
  if (link) {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'flex items-center px-4 py-2 bg-indigo-900 text-white rounded text-xs font-medium hover:bg-indigo-700 transition';
    a.innerHTML = '<i data-feather="book-open" class="w-3 h-3 mr-2"></i> View Publication';
    linksEl.appendChild(a);
  }

  feather.replace();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeResearchModal() {
  const modal = document.getElementById('researchModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

//  Contact Modal Functions 
function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        const firstInput = modal.querySelector('input[name="name"]');
        if(firstInput) firstInput.focus();
    }, 100);
  }
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

//  EVENT LISTENERS (Initialize on Load) 
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Hook up Modal Close Buttons
  const pmClose = document.getElementById('projectModalClose');
  if (pmClose) pmClose.addEventListener('click', closeProjectModal);
  
  const rmClose = document.getElementById('researchModalClose');
  if (rmClose) rmClose.addEventListener('click', closeResearchModal);

  const cmClose = document.getElementById('contactModalClose');
  if (cmClose) cmClose.addEventListener('click', closeContactModal);

  // 2. Hook up Modal Backdrops
  const projectBackdrop = document.getElementById('projectModalBackdrop');
  if (projectBackdrop) projectBackdrop.addEventListener('click', closeProjectModal);

  const researchBackdrop = document.getElementById('researchModalBackdrop');
  if (researchBackdrop) researchBackdrop.addEventListener('click', closeResearchModal);

  const contactBackdrop = document.getElementById('contactModalBackdrop');
  if (contactBackdrop) contactBackdrop.addEventListener('click', closeContactModal);

  // 3. Mobile Menu Logic
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
  }
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  }

  // 4. Resume Dropdown Logic
  const resumeBtn = document.getElementById('resume-menu-button');
  const resumeDropdown = document.getElementById('resume-dropdown');

  if (resumeBtn && resumeDropdown) {
    // Toggle menu
    resumeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      resumeDropdown.classList.toggle('hidden');
    });

    // Close when clicking outside
    window.addEventListener('click', function (e) {
      if (!resumeDropdown.classList.contains('hidden')) {
        if (!resumeBtn.contains(e.target) && !resumeDropdown.contains(e.target)) {
          resumeDropdown.classList.add('hidden');
        }
      }
    });
  }
});

//  Global Key Handler (Escape Key) 
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeResearchModal();
    closeContactModal();
  }
});