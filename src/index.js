import './styles.css';
import items from './menu.json';
import template from './template.hbs';

const markup = template(items);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
