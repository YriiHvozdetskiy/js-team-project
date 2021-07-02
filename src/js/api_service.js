const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 't9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
    this.country = '';
  }
  async fetchApiEvent() {
    const url = `${BASE_URL}/events?keyword=${this.searchQuery}&apikey=${KEY}&countryCode=${this.country}&size=200&page=${this.page}`;

    const response = await fetch(url);
    const data = await response.json();
    const { _embedded } = data;

    return _embedded ? _embedded.events : null;
  }

  async fetchApiById(id) {
    const url = `${BASE_URL}/events/${id}.json?apikey=${KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
