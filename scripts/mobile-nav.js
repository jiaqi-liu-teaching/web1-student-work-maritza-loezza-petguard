(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var links = nav.querySelector('.nav-links');
  if (!toggle || !links) return;

  function closeMenu() {
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    nav.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.addEventListener('click', function (event) {
    if (event.target && event.target.tagName === 'A') {
      closeMenu();
    }
  });
})();
