import { refs } from './refs';
import { favEventsId } from './favEventsId';

function deleteEventFromFavorite(e) {
  if (e.target.classList.contains('btn-delete-event')) {
    const eventId = e.target.getAttribute('data-id');
    document.querySelector(`.events__list [data-id="${eventId}"]`).remove();
    favEventsId.splice(favEventsId.indexOf(eventId), 1);

    if (document.querySelectorAll('.events__list li').length == 0) {
      refs.noFavoriteEvents.classList.remove('visually-hidden');
    }
  }

  updateFavoriteCounter();
}

function updateFavoriteCounter() {
  refs.favoriteEventsCounter.innerHTML = favEventsId.length;
}

export { deleteEventFromFavorite, updateFavoriteCounter };
