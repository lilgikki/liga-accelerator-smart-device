const modal = document.getElementById('callback');

const modalClose = document.getElementById('modal-close');

const openButton = document.querySelector('[data-open-modal]');
const nameInput = document.getElementById('name-modal');

const getPopup = () => {
  if (openButton && modal) {
    openButton.addEventListener('click', () => {
      modal.classList.add('is-active');
      nameInput.focus();
    });

    modal.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest('.modal__content')) {
        modal.classList.remove('is-active');
      }
    });

    modalClose.addEventListener('click', () => {
      modal.classList.remove('is-active');
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        modal.classList.remove('is-active');
      }
    });
  }
};

export {getPopup};
