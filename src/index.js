import './styles.css';
import items from './menu.json';
import template from './template.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  button: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(Theme.LIGHT);

const markup = template(items);
refs.menu.insertAdjacentHTML('beforeend', markup);

refs.button.addEventListener('change', onCheck);

function onCheck(event) {
  event.preventDefault();

  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === Theme.DARK) {
  refs.body.classList.add('dark-theme');
  refs.button.checked = true;
}

if (savedTheme === Theme.LIGHT) {
  refs.body.classList.add('light-theme');
  refs.button.checked = false;
}
