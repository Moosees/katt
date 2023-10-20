// MOBILE MENY
const btn = document.querySelector('.nav-button');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
	menu.classList.toggle('nav-menu--show');
});

// CAROUSEL SCROLLING WITH BUTTONS
const carousels = document.querySelectorAll('.carousel');

const createScrollButtons = (carousel) => {
	const leftButton = carousel.querySelector('.carousel__button--left');
	const rightButton = carousel.querySelector('.carousel__button--right');
	const content = carousel.querySelector('.carousel__content');

	leftButton.addEventListener('click', () => {
		content.scrollLeft -= carousel.scrollWidth;
	});

	rightButton.addEventListener('click', () => {
		content.scrollLeft += carousel.scrollWidth;
	});
};

carousels.forEach((carousel) => createScrollButtons(carousel));
