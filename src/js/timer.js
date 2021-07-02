export default class CountdownTimer {
  constructor() {
    this.selector = '#timer-1';
    this.targetDate = '';
    this.intervalId = null;
  }
  getRefs() {
    return {
      days: document.querySelector(`${this.selector} [data-value='days']`),
      hours: document.querySelector(`${this.selector} [data-value='hours']`),
      mins: document.querySelector(`${this.selector} [data-value='mins']`),
      secs: document.querySelector(`${this.selector} [data-value='secs']`),
    };
  }
  updateDate(str) {
    this.targetDate = new Date(str);
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      if (time < 0) {
        clearInterval(this.intervalId);
        return;
      }
      this.getRefs().days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.getRefs().hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.getRefs().mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.getRefs().secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 100);
  }
  pad(value) {
      return String(value).padStart(2, '0');
    }
  stopTimer() {
    clearInterval(this.intervalId);
  }
}
