document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu-body');
  const menuBtn = document.querySelector('.menu-icon');
  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active'); // Toggle menu visibility
      menuBtn.classList.toggle('active'); // Toggle menu icon state
      body.classList.toggle('lock'); // Toggle body scrolling
    });
  }
  menu.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function () {
      menu.classList.remove('active'); // Toggle menu visibility
      menuBtn.classList.remove('active'); // Toggle menu icon state
      body.classList.remove('lock'); // Toggle body scrolling
    });
  });
});

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


