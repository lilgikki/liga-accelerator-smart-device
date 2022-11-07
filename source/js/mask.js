/* eslint-disable new-cap */
import IMask from 'imask';

const callbacklTel = document.getElementById('tel-modal');
const feedbacklTel = document.getElementById('tel');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const getMask = () => {
  if (callbacklTel) {
    IMask(callbacklTel, maskOptions);
  }
  if (feedbacklTel) {
    IMask(feedbacklTel, maskOptions);
  }
};

export {getMask};
