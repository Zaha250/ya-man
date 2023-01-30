document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            allowTouchMove: false
        }
    });

    function animationBG() {
        const animBG = document.querySelector('.main-section-mobile');
        const variants = [
            'url("./assets/images/index-cover-bg_1-mobile.png") no-repeat center / cover',
            'url("./assets/images/index-cover-bg_3-mobile.png") no-repeat center / cover',
            'url("./assets/images/index-cover-bg_2-mobile.png") no-repeat center / cover',
        ];
        let count = 0;

        setInterval(() => {
            if(count > variants.length - 1) {
                count = 0;
            }
            animBG.style.background = variants[count];
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
