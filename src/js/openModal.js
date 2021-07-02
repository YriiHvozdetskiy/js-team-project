import { refs } from './refs';
import modalTpl from '../templates/modalTpl.hbs';
import eventsModalTpl from '../templates/events__modal.hbs';
import SearchService from './api_service';
import CountdownTimer from '../js/timer';
import { pnotifySuccess, pnotifyError } from '../js/pnotify.js';
import { favEventsId } from './favEventsId';
import { updateFavoriteCounter } from './favorite';
import { fetchData } from './input.js';

const searchServiceId = new SearchService();
const timer = new CountdownTimer();

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  if (!e.target.classList.contains('card-image') & !e.target.classList.contains('card-title')) {
    return;
  }

  document.body.classList.add('data-modal-open');
  refs.modal.classList.remove('is-hidden');
  window.addEventListener('keydown', onKeydownClose);
  refs.modal.addEventListener('click', onOverlay);

  const targetId = e.target.dataset.id;
  const author = e.target.dataset.author;

  searchServiceId
    .fetchApiById(targetId)
    .then(el => {
      timerCreate(el);

      return modalTpl(el);
    })
    .then(el => {
      refs.mainModal.innerHTML = el;
      const addToFaforitBtn = document.querySelector('.basket');
      addToFaforitBtn.addEventListener('click', onAddToFaforiteBtn);

      const moreFromThisAuthor = document.querySelector('[data-more-author]');
      moreFromThisAuthor.addEventListener('click', onClickMoreFromAuthor);
    });

  function onAddToFaforiteBtn() {
    if (favEventsId.includes(targetId)) {
      pnotifyError('Event already in favorites');
    } else {
      searchServiceId
        .fetchApiById(targetId)
        .then(el => eventsModalTpl(el))
        .then(el => {
          refs.eventsList.insertAdjacentHTML('beforeend', el);
          favEventsId.push(targetId);
          updateFavoriteCounter();
          pnotifySuccess('Event added to favorite');
        });
    }
  }

  function onClickMoreFromAuthor(e) {
    refs.inputRef.value = author;
    fetchData(e);
    onCloseModal();
  }
}

function onCloseModal() {
  document.body.classList.remove('data-modal-open');
  refs.modal.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeydownClose);
  refs.modal.removeEventListener('click', onOverlay);
  timer.stopTimer();
  clearModal();
}

function onKeydownClose(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onOverlay(e) {
  if (e.target === refs.modal) {
    onCloseModal();
  }
}

function timerCreate(el) {
  const { start } = el.dates;
  const { localDate, localTime } = start;
  const eventTime = {
    date: localDate,
    time: localTime,
  };
  const date = eventTime;
  const str = Object.values(date)[0].split('-').join(' ') + ' ' + Object.values(date)[1];
  timer.updateDate(str);
}
function clearModal() {
  refs.mainModal.innerHTML = '';
}
