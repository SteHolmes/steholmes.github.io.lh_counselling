import 'lodash';
import './scss/app.scss';

import './scripts/navigation.js';

import logo from './images/lighthouse_logo.svg';
import lighthouse from './images/lighthouse.jfif';
import beachKite from './images/beach_kite.jfif';
import footprints from './images/footprints.jfif';
import profile from './images/website-profile-square-min.jpg';
import leaves from './images/autumn_leaves.jpg';


// 'Back to top' button functionality //

const scrollButton = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};
scrollButton.addEventListener('click', scrollToTop)

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}