const sitePages = document.querySelector('.site-pages');
const sitePagesToggle = document.querySelector('.site-pages__button');
const location = document.querySelector('.location');
const locationToggle = document.querySelector('.location__button');

sitePages.classList.remove('site-pages--no-js');
location.classList.remove('location--no-js');

const clickSitePages = () => {
  if (sitePages.classList.contains('site-pages--close')) {
    sitePages.classList.remove('site-pages--close');
    sitePages.classList.add('site-pages--open');
  } else {
    sitePages.classList.add('site-pages--close');
    sitePages.classList.remove('site-pages--open');
  }
};

const clickLocation = () => {
  if (location.classList.contains('location--close')) {
    location.classList.remove('location--close');
    location.classList.add('location--open');
  } else {
    location.classList.add('location--close');
    location.classList.remove('location--open');
  }
};

sitePagesToggle.addEventListener('click', clickSitePages);
locationToggle.addEventListener('click', clickLocation);
