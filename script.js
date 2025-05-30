
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



// Slide SHow
const container = document.querySelector('.image-container');
const slideRight = document.getElementById('slide-right');
const slideLeft = document.getElementById('slide-left');
const slideShow = document.querySelector('.slide-show');

let currentIndex = 0;
const totalSlides = 4;
let autoSlideInterval;

function getSlideWidth() {
    return slideShow.clientWidth;
}

function goToSlide(index) {
    const width = getSlideWidth();
    container.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


startAutoSlide();

slideRight.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

slideLeft.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

slideShow.addEventListener('mouseenter', stopAutoSlide);
slideShow.addEventListener('mouseleave', startAutoSlide);

window.addEventListener('resize', () => {
    goToSlide(currentIndex);
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

// Products Like

const likeCounterPhone = document.getElementById('like-phone');
const likeCounterDesktop = document.getElementById('like-desktop');
const likeBtns = document.querySelectorAll('.like-btn');

for (let likeBtn of likeBtns) {
    likeBtn.isLiked = false;

    likeBtn.addEventListener('click', () => {
        const icon = likeBtn.querySelector('i');

        if (likeBtn.isLiked) {
            likeCounterPhone.textContent = parseInt(likeCounterPhone.textContent) - 1; 
            likeCounterDesktop.textContent = parseInt(likeCounterDesktop.textContent) - 1;
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            likeBtn.classList.remove('liked');
        } else {
            likeCounterPhone.textContent = parseInt(likeCounterPhone.textContent) + 1; 
            likeCounterDesktop.textContent = parseInt(likeCounterDesktop.textContent) + 1;
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            likeBtn.classList.add('liked');
        }

        likeBtn.isLiked = !likeBtn.isLiked;
    });
}

//Add to cart
const cartCounterDesktop = document.getElementById('cart-desktop');
const cartCounterPhone = document.getElementById('cart-phone');
const addCartButtons = document.querySelectorAll('.add-cart');

let count = 0;

addCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('added')) {
      count--;
      button.textContent = 'Add to Cart';
      button.classList.remove('added');
    } else {
      count++;
      button.textContent = 'Added!';
      button.classList.add('added');
    }
    cartCounterDesktop.textContent = count;
    cartCounterPhone.textContent = count;
  });
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





