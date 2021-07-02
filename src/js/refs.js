const refs = {
  cardsList: document.querySelector('.cards-list'),
  main: document.querySelector('.main'),
  dataContainer: document.querySelector('#data-container'),
  paginationContainer: document.querySelector('#pagination-container'),
  loader: document.querySelector('[data-loader]'),
  eventsOpenModalBtn: document.querySelector('[data-events-modal-open]'),
  eventCloseModalBtn: document.querySelector('[data-events-modal-close]'),
  eventsModal: document.querySelector('[data-events-modal]'),
  eventsList: document.querySelector('.events__list'), //Юра список в який дод квитки
  mainModal: document.querySelector('[data-insert]'), // !Юра куда пендерем модалку!
  noFavoriteEvents: document.querySelector('.no-events'),
  inputRef: document.querySelector('.input'),
  optionRef: document.querySelector('.country-option'),
  selectRef: document.querySelector('.select-country'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  formRef: document.querySelector('form'),
  buttonRef: document.querySelector('button'),
  favoriteEventsCounter: document.querySelector('#valuebask'),
  modalStudentsLink: document.querySelector('.footer-students'),
  closeModalStudents: document.querySelector('.modal-close-footer'),
  modalStudents: document.querySelector('.footer-modal'),
  backdropFooterModal: document.querySelector('.backdrop-footer'),
  footer: document.querySelector('.footer'),
};

export { refs };
