function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
  });
});
