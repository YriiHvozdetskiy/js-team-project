import { data } from 'browserslist';
import * as pagination from 'paginationjs';
import cardsTmp from '../templates/eventCardsTpl.hbs';

export default function paginationCreate(items) {
  $('#pagination-container').pagination({
    pageSize: 20,
    showPrevious: false,
    showNext: false,
    dataSource: items,

    callback: function (data, pagination) {
      var markup = cardsTmp(data);
      $('#data-container').html(markup);
    },
  });
}
