// Search menu
const searchMenu = document.getElementById('search-menu');
const searchDropDown = document.getElementById('search-drop-down');
const arrow = document.getElementById('arrow');

searchMenu.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const isOpen = searchDropDown.classList.toggle('open');
  searchMenu.classList.toggle('active', isOpen);
  arrow.classList.toggle('rotate', isOpen);
});

document.addEventListener('click', () => {
  if (searchDropDown.classList.contains('open')) {
    searchDropDown.classList.remove('open');
    searchMenu.classList.remove('active');
    arrow.classList.remove('rotate');
  }
});

//Mega menu
const megaMenu = document.getElementById('mega-menu');
const megaOpen = document.getElementById('mega-menu-toggle');

megaOpen.addEventListener('click', (e) => {
    e.stopPropagation(); 
    megaMenu.classList.toggle('open-mega-menu');
    megaOpen.classList.toggle('toggle-btn'); 
});

document.addEventListener('click', (e) => {
    if (!megaMenu.contains(e.target) && !megaOpen.contains(e.target)) {
        megaMenu.classList.remove('open-mega-menu');
        megaOpen.classList.remove('toggle-btn');
    }
});


//Phone Menu

const leftBtn = document.getElementById('open-left-burger');
const rightBtn = document.getElementById('open-right-burger');
const leftMenu = document.getElementById('left-menu');
const rightMenu = document.getElementById('right-menu');
const body = document.body;
const closeBtns = document.querySelectorAll('.close-btn');

function closeMenus() {
  leftMenu.classList.remove('show');
  rightMenu.classList.remove('show');
  body.classList.remove('blur');
}


leftBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  leftMenu.classList.toggle('show');
  rightMenu.classList.remove('show'); 
  body.classList.toggle('blur', leftMenu.classList.contains('show'));
});


rightBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  rightMenu.classList.toggle('show');
  leftMenu.classList.remove('show'); 
  body.classList.toggle('blur', rightMenu.classList.contains('show'));
});


leftMenu.addEventListener('click', e => e.stopPropagation());
rightMenu.addEventListener('click', e => e.stopPropagation());


document.addEventListener('click', () => {
  closeMenus();
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenus();
  });
});
