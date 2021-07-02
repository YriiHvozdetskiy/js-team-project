import { refs } from './refs.js';

refs.modalStudentsLink.addEventListener('click', openModalFooter);
refs.closeModalStudents.addEventListener('click', closeModalFooter);

function openModalFooter(e) {
  e.preventDefault();
  refs.modalStudents.classList.add('modal-open');
  refs.backdropFooterModal.classList.remove('is-hidden-footer');
  refs.backdropFooterModal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onKeydownCloseFooter);
  document.body.classList.toggle('modal-open');
}

function closeModalFooter() {
  refs.modalStudents.classList.remove('modal-open');
  refs.backdropFooterModal.classList.add('is-hidden-footer');
  refs.backdropFooterModal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onKeydownCloseFooter);
  document.body.classList.toggle('modal-open');
}

function onKeydownCloseFooter(e) {
  if (e.code === 'Escape') {
    closeModalFooter();
  }
}

function onBackdropClick(e) {
  if (e.target === refs.backdropFooterModal) {
    closeModalFooter();
  }
}
