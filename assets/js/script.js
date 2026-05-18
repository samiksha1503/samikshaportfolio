/* ============================================================
   JQUERY — Navigation, Scroll Spy, Smooth Scroll, Contact Form
   ============================================================ */
$(document).ready(function () {

  /* Mobile menu toggle */
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  /* Scroll spy + scroll-to-top button */
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top    = $(window).scrollTop();
      let id     = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  /* Smooth scroll */
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      { scrollTop: $($(this).attr('href')).offset().top },
      480,
      'swing'
    );
  });

  /* Contact form — EmailJS */
  $('#contact-form').submit(function (event) {
    event.preventDefault();
    emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');
    emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
      .then(function (response) {
        document.getElementById('contact-form').reset();
        alert('Message sent successfully!');
      }, function (error) {
        alert('Could not send message. Please try again.');
      });
  });

});


/* ============================================================
   TAB VISIBILITY — title swap
   ============================================================ */
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    document.title = 'Samiksha Jadhav — Data Engineer & GenAI Developer';
    $('#favicon').attr('href', 'assets/images/favicon.png');
  } else {
    document.title = 'Come Back To Portfolio';
    $('#favicon').attr('href', 'assets/images/favhand.png');
  }
});


/* ============================================================
   TYPED.JS — Hero typewriter effect
   ============================================================ */
var typed = new Typed('.typing-text', {
  strings: [
    'ETL & data pipelines',
    'GenAI / RAG systems',
    'scalable cloud pipelines',
    'LLM-powered applications',
  ],
  loop:      true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});


/* ============================================================
   SKILLS — dynamic load from skills.json
   ============================================================ */
async function fetchSkills() {
  try {
    const response = await fetch('skills.json');
    const data     = await response.json();
    showSkills(data);
  } catch (e) {
    /* skills.json missing — static HTML fallback already in place */
  }
}

function showSkills(skills) {
  const container = document.getElementById('skillsContainer');
  if (!container) return;
  container.innerHTML = skills.map(skill => `
    <div class="bar">
      <div class="info">
        <img src="${skill.icon}" alt="${skill.name}" loading="lazy" />
        <span>${skill.name}</span>
      </div>
    </div>
  `).join('');
}

fetchSkills();


/* ============================================================
   SCROLL REVEAL — restrained, non-repeating entrance animations
   ============================================================ */
const sr = ScrollReveal({
  origin:   'bottom',
  distance: '28px',
  duration: 700,
  easing:   'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  reset:    false,   /* once is elegant — never re-animates */
});

/* Hero */
sr.reveal('.home .content h2',  { delay: 100 });
sr.reveal('.home .content p',   { delay: 180 });
sr.reveal('.home .btn',         { delay: 260 });
sr.reveal('.home .socials',     { delay: 340 });
sr.reveal('.home .image',       { delay: 200, origin: 'right' });

/* About */
sr.reveal('.about .row .image',   { delay: 100, origin: 'left' });
sr.reveal('.about .row .content', { delay: 200, origin: 'right' });

/* Skills */
sr.reveal('.skills .container', { delay: 100 });
sr.reveal('.skills .container .bar', { interval: 60, delay: 100 });

/* Experience cards */
sr.reveal('.education .box', { interval: 120, delay: 100 });

/* Project cards */
sr.reveal('.work .box-container .box', { interval: 100, delay: 80 });

/* Timeline */
sr.reveal('.experience .container', { interval: 150, delay: 100 });

/* Contact */
sr.reveal('.contact .container', { delay: 100 });


/* ============================================================
   TAWK.TO — Live chat (async, non-blocking)
   ============================================================ */
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement('script'),
      s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src   = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
