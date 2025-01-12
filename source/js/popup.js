const modal = document.getElementById('callback');

const modalClose = document.getElementById('modal-close');

const openButton = document.querySelector('[data-open-modal]');
const nameInput = document.getElementById('name-modal');

const getPopup = () => {
  if (openButton && modal) {
    openButton.addEventListener('click', () => {
      modal.classList.add('is-active');
      nameInput.focus();
      document.body.style.overflow = 'hidden';
    });

    modal.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest('.modal__content')) {
        modal.classList.remove('is-active');
        document.body.style.overflow = 'visible';
      }
    });

    modalClose.addEventListener('click', () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = 'visible';
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        modal.classList.remove('is-active');
        document.body.style.overflow = 'visible';
      }
    });
  }
};

export {getPopup};
