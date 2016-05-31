window.onload = function () {

	var envelope = document.getElementById('email-display');
	var contactForm = document.getElementById('email-contact-form');
	var main = document.getElementsByTagName('main')[0];
	var burger = document.getElementById('hamburger');
	var menu = document.getElementById('header');
	var exit = document.getElementById('exit-btn-contact');
	var opacity = 0;
	var interval;

	function fadeIn() {
		opacity += 0.01;
		contactForm.style.opacity = opacity;
		if (opacity >= 1) clearInterval(interval);
	}

	function fadeOut() {
		opacity -= 0.01;
		contactForm.style.opacity = opacity;
		if (opacity <= 0) {
			contactForm.style.display = "none";
			clearInterval(interval);
		}


	}
	envelope.addEventListener('click', function () {
		contactForm.classList.add('show');
		interval = setInterval(fadeIn, 10);
		main.classList.add('opacity-toggle');

	});
	exit.addEventListener('click', function () {
		interval = setInterval(fadeOut, 10);
		main.classList.remove('opacity-toggle');
	});

	burger.addEventListener('click', function () {

		menu.classList.toggle('show-burger');

	});

};
