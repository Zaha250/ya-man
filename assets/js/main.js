document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            allowTouchMove: false,
            noSwiping: false
        }
    });

    function animationBG() {
        const animMobileBG = document.querySelector('.main-section-mobile');
        const animBG = document.querySelector('.main-section');
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        let variants = [];

        if(!isMobile) {
            variants = [
                '#000 url("./assets/images/index-cover-bg_1_v2.jpg") no-repeat center / cover',
                '#000 url("./assets/images/index-cover-bg_3_v2.jpg") no-repeat center / cover',
                '#000 url("./assets/images/index-cover-bg_2_v2.jpg") no-repeat center / cover',
            ]
        } else {
            variants = [
                '#000 url("./assets/images/index-cover-bg_3-mobile.jpg") no-repeat center / cover',
                '#000 url("./assets/images/index-cover-bg_2-mobile.jpg") no-repeat center / cover',
                '#000 url("./assets/images/index-cover-bg_1-mobile.jpg") no-repeat center / cover',
            ]
        }
        let count = 0;

        setInterval(() => {
            if(count > variants.length - 1) {
                count = 0;
            }
            if(!isMobile) {
                animBG.style.background = variants[count];
            } else {
                animMobileBG.style.background = variants[count];
            }
            count++;
        }, 4000);
    }
    animationBG();

    function openModal(modalSelector) {
        modalSelector.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalSelector) {
        modalSelector.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modal(modalSelector, modalTriggerSelector) {
        const modal = document.querySelector(modalSelector);
        const modalBtn = document.querySelectorAll(modalTriggerSelector);

        modalBtn.forEach(trigger => {
            trigger.addEventListener('click', () => {
                openModal(modal);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__close') || e.target == modal) {
                closeModal(modal);
            }
        });
    }
    modal('.modal', '[data-modal="open"]');
})
