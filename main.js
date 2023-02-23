// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// CONTACT BUTTONS (Circular text buttons)

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text= textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// SWIPER JS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60    
        }
    }
  });

//   Responsive nav bar =======

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__btn__open');
const closeNavBtn = document.querySelector('#nav__btn__close');

const openNAV = () => {
    nav.style.display = 'flex'
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}

openNavBtn.addEventListener('click', openNAV);

const closeNAV = () => {
    nav.style.display = 'none'
    openNavBtn.style.display = 'inline-Block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNAV);

nav.querySelectorAll('li a').forEach(navlink => {
    navlink.addEventListener('click', closeNAV);
})

// Content

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navlink => {
        navlink.addEventListener('click' closeNav)
    })
}