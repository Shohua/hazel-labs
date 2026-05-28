/* ═══════════════════════════════════════════════════════════════
   HAZEL LABS — main.js
   Navigation · Scroll reveals · Counters · Contact form
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAV SCROLL STATE ──────────────────────────────────── */
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ─── MOBILE NAV TOGGLE ─────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ─── SCROLL REVEAL ─────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─── COUNTER ANIMATION ─────────────────────────────────── */
  function animateCounter(el, target, duration = 1600) {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.counter').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
      counterObserver.disconnect();
    }
  }, { threshold: 0.3 });

  const impactSection = document.getElementById('impact');
  if (impactSection) counterObserver.observe(impactSection);

  /* ─── CONTACT FORM ──────────────────────────────────────── */
  window.handleContact = function() {
    const successEl = document.getElementById('contact-success');
    if (!successEl) return;
    const msg = (window.getLang && window.getLang() === 'en')
      ? '✓ Message sent. The Hazel Labs team will contact you shortly.'
      : '✓ Mensaje enviado. El equipo de Hazel Labs te contactará pronto.';
    successEl.textContent = msg;
    successEl.classList.add('show');
    ['fi-name','fi-company','fi-email','fi-type','fi-msg'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    setTimeout(() => successEl.classList.remove('show'), 5000);
  };

  /* ─── SMOOTH ACTIVE NAV ON SCROLL ──────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--text)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => activeObserver.observe(s));

  /* ─── DEBOUNCED RESIZE HELPER ───────────────────────────── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Re-trigger canvas redraws via custom event
      window.dispatchEvent(new Event('hazel-resize'));
    }, 100);
  }, { passive: true });

});
