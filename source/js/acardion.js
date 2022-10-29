const sitePages = document.querySelector('.site-pages');
const sitePagesToggle = document.querySelector('.site-pages__button');
const location = document.querySelector('.location');
const locationToggle = document.querySelector('.location__button');

sitePages.classList.remove('site-pages--no-js');
location.classList.remove('location--no-js');

const openSitePages = () => {
  sitePages.classList.remove('site-pages--close');
  sitePages.classList.add('site-pages--open');
};

const closeSitePages = () => {
  sitePages.classList.add('site-pages--close');
  sitePages.classList.remove('site-pages--open');
};

const openLocation = () => {
  location.classList.remove('location--close');
  location.classList.add('location--open');
};

const closeLocation = () => {
  location.classList.add('location--close');
  location.classList.remove('location--open');
};

const clickSitePages = () => {
  if (sitePages.classList.contains('site-pages--close')) {
    openSitePages();
    closeLocation();
  } else {
    closeSitePages();
  }
};

const clickLocation = () => {
  if (location.classList.contains('location--close')) {
    openLocation();
    closeSitePages();
  } else {
    closeLocation();
  }
};

const activateSitePages = () => {
  sitePagesToggle.addEventListener('click', clickSitePages);
};

const activateLocation = () => {
  locationToggle.addEventListener('click', clickLocation);
};

export {activateSitePages, activateLocation};
