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

//Products Overlay

const detailBtn = document.querySelectorAll('.overlay-btn');
const caption = document.querySelectorAll('figcaption');
const closeDetail = document.querySelectorAll('.close-detail');

detailBtn.forEach((detailBtn, index)=>{
    detailBtn.addEventListener('click', ()=>{
        caption[index].classList.add('show');
    });
});

closeDetail.forEach((closeDetail, index)=>{
    closeDetail.addEventListener('click', ()=>{
        caption[index].classList.remove('show')
    })
})

//Product Zoom

const figures = document.querySelectorAll('figure');
let currentlyZoomedImg = null;

figures.forEach(figure => {
  const zoomIcon = figure.querySelector('.zoom-btn');
  const productImg = figure.querySelector('.zoomed');
  const closeBtn = figure.querySelector('.close-zoomed');

  zoomIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    productImg.style.display = 'flex'; 
    setTimeout(() => {
      productImg.classList.add('show'); 
      currentlyZoomedImg = productImg;
    }, 10); 
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    productImg.classList.remove('show');
    currentlyZoomedImg = null;
    setTimeout(() => {
      productImg.style.display = 'none'; 
    }, 300); 
  });

  document.addEventListener('click', (event) => {
    if (
      currentlyZoomedImg && 
      !currentlyZoomedImg.contains(event.target) &&
      !event.target.closest('.zoom-btn')
    ) {
      currentlyZoomedImg.classList.remove('show');
      setTimeout(() => {
        currentlyZoomedImg.style.display = 'none';
        currentlyZoomedImg = null;
      }, 300);
    }
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

