const MAX_MOBILE_WIDTH = 767;
const SECOND_PAR_TEXT = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND.';
const THIRD_PAR_TEXT = 'Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
const FOURTH_PAR_TEXT = 'Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% из которых продолжают сотрудничество по сей день. На данный момент насчитывается более 14 офисов по всей стране и 20 городов присутствия.';

const aboutBlock = document.querySelector('.about__block--hidden');
const aboutButton = document.querySelector('.about__button');

const secondPar = document.querySelector('.about__par--2');
const fourthPar = document.querySelector('.about__par--4');

let screenWidth;

aboutBlock.classList.remove('about__block--no-js');

const setParsTextContent = () => {
  screenWidth = document.documentElement.clientWidth;
  if (screenWidth <= MAX_MOBILE_WIDTH) {
    secondPar.textContent = SECOND_PAR_TEXT;
    fourthPar.textContent = THIRD_PAR_TEXT + ' ' + FOURTH_PAR_TEXT;
  } else {
    secondPar.textContent = SECOND_PAR_TEXT + THIRD_PAR_TEXT;
    fourthPar.textContent = FOURTH_PAR_TEXT;
  }
};

const openBlock = () => {
  aboutBlock.classList.remove('about__block--hidden');
  aboutBlock.classList.add('about__block--active');
  aboutButton.textContent = 'Свернуть';
};

const closeBlock = () => {
  aboutBlock.classList.add('about__block--hidden');
  aboutBlock.classList.remove('about__block--active');
  aboutButton.textContent = 'Подробнее';
};

const clickAboutButton = () => {
  aboutButton.addEventListener('click', () => {
    if (aboutBlock.classList.contains('about__block--hidden')) {
      openBlock();
    } else {
      closeBlock();
    }
  });
};

const changeParsTextContent = () => {
  window.addEventListener('resize', () => {
    setParsTextContent();
  }, false);
};

export {clickAboutButton, changeParsTextContent, setParsTextContent};
