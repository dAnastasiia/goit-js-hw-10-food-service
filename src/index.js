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

const markup = template(items);
refs.menu.insertAdjacentHTML('beforeend', markup);

refs.button.addEventListener('change', onCheck);

function onCheck(event) {
  event.preventDefault();

  const changeTheme = (oldTheme, newTheme) => {
    refs.body.classList.add(newTheme);
    refs.body.classList.remove(oldTheme);
  };

  if (event.target.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.button.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}
