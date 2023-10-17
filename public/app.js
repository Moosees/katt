const btn = document.querySelector('.nav-button');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
	menu.classList.toggle('nav-menu--show');
});
