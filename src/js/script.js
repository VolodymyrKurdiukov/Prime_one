const hamburber = document.querySelector('.hamburger'),
	menu = document.querySelector('.header-menu'),
	closeElem = document.querySelector('.header-menu__close');

hamburber.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

