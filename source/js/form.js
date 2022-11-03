const formCallback = document.getElementById('callback-form');
const formFeedback = document.getElementById('feedback-form');

const nameCallback = document.getElementById('name-modal');
const nameFeedback = document.getElementById('name');

const phoneCallback = document.getElementById('tel-modal');
const phoneFeedback = document.getElementById('tel');

const submitForm = (name, tel) => {
  localStorage.setItem('username', name);
  localStorage.setItem('phone', tel);
};

const submitFormCallback = () => {
  if (formCallback) {
    formCallback.addEventListener('submit', (evt) => {
      if (!nameCallback.value || !phoneCallback.value) {
        evt.preventDefault();
      } else {
        evt.preventDefault();
        submitForm(nameCallback.value, phoneCallback.value);
        formCallback.reset();
      }
    }
    );
  }
};

const submitFormFeedback = () => {
  if (formFeedback) {
    formFeedback.addEventListener('submit', (evt) => {
      if (!nameFeedback.value || !phoneFeedback.value) {
        evt.preventDefault();
      } else {
        evt.preventDefault();
        submitForm(nameFeedback.value, phoneFeedback.value);
        formFeedback.reset();
      }
    }
    );
  }
};

export {submitFormCallback, submitFormFeedback};
