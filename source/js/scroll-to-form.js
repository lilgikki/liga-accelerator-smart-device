const formFeedback = document.getElementById('feedback-form');
const bannerButton = document.getElementById('banner-button');

const scrollToForm = () => {
  if (formFeedback && bannerButton) {
    bannerButton.addEventListener('click', () => {
      formFeedback.scrollIntoView();
    });
  }
};

export {scrollToForm};
