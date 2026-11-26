// Mobile menu toggle — no dependencies.
(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  var head = document.querySelector('.site-head');

  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (head) head.classList.toggle('menu-open', open);
  }

  btn.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  // Close after following an in-page link.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      btn.focus();
    }
  });
})();
