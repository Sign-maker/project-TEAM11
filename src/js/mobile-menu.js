
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu-body');
  const menuBtn = document.querySelector('.menu-icon');
  const body = document.body;

  if (menu && menuBtn) {
      menuBtn.addEventListener('click', function() {
          menu.classList.toggle('active'); // Toggle menu visibility
          menuBtn.classList.toggle('active'); // Toggle menu icon state
          body.classList.toggle('lock'); // Toggle body scrolling
      });
  }
});


