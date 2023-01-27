document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

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
        console.log(modalBtn)

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
