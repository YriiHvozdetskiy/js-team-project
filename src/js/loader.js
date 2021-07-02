import { refs } from './refs.js';

export default function onLoaderActive() {
  document.body.classList.toggle('loader-open');
  refs.loader.classList.toggle('is-hidden');
}
