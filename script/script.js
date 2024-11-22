const btnBurger = document.querySelector('.btn_burger')
const openBurger = document.querySelector('.nav_list')
const crossBurger = document.querySelectorAll('.burger_line')
const vidButton = document.querySelector('.button_video')
const vidStart = document.querySelector('.my_video')
const stopSroll = document.querySelector('body')
const vidCross = document.querySelector('.cross_btn')
const ebaloOff = document.querySelector('.vidosii')
const photoSlider = document.querySelector('.fullscreen_slider_swiper')
const openPhoto = document.querySelectorAll('.photo_img_item')
const pagination = document.querySelector('.swiper-pagination')





vidButton.addEventListener('click', () => {
    vidStart.classList.toggle('open')
    stopSroll.classList.toggle('open')
    ebaloOff.src = "https://www.youtube.com/embed/WSk2Dis3oNA?autoplay=1&mute=1";
})


vidCross.addEventListener('click', () => {
    vidStart.classList.toggle('open')
    stopSroll.classList.toggle('open')
    ebaloOff.src = "";
})

vidStart.addEventListener('click', () => {
    vidStart.classList.remove('open')
    stopSroll.classList.remove('open')
    ebaloOff.src = "";
} )

openPhoto.forEach((openPhoto) =>{
    openPhoto.addEventListener('click', () => {
        photoSlider.classList.toggle('open')
        stopSroll.classList.toggle('open')

    } )
} )


photoSlider.addEventListener('click', () => {
    photoSlider.classList.toggle('open')
    stopSroll.classList.toggle('open')
})

if (pagination) {
    pagination.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

const slideImages = document.querySelectorAll('.photo_img_item_swiper img');
const slides = document.querySelectorAll('.photo_img_item_swiper');



slideImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});









btnBurger.addEventListener('click', () => {
    openBurger.classList.toggle('open')
    
})


crossBurger.forEach((crossBurger) => {
    btnBurger.addEventListener('click', ()=> {
        crossBurger.classList.toggle('open')
    })
} )

new Swiper ('.block_4_cards', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    /* breakpoints: {
        
        950: {
            slidesPerView: 3, 
        },
        
        800: {
            
            slidesPerView: 2.8, 
        },

       
    }, */
})

new Swiper ('.travel_wrap_swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
})

const bulletImages = [
    './img/Photo_block/photo_1.png',
    './img/Photo_block/photo_2.png',
    './img/Photo_block/photo_3.png',
    './img/Photo_block/photo_4.png',
    './img/Photo_block/photo_5.png',
    './img/Photo_block/photo_6.png'
];

const photoItems = document.querySelectorAll('.photo_img_item');

photoItems.forEach(item => {
    item.addEventListener('click', function() {
        // Получаем индекс слайда из data-атрибута
        const slideIndex = parseInt(this.getAttribute('data-slide-index'), 10);
        
        // Переключаем слайдер на соответствующий слайд
        fullscreenSwiper.slideTo(slideIndex);
        
    });
});

const fullscreenSwiper = new Swiper('.fullscreen_slider_swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            // Возвращаем HTML для каждого буллета с фоновым изображением
            return `<span class="${className}" style="background-image:url(${bulletImages[index]})"></span>`;
        }
    },
})


