import '@pnotify/core/dist/BrightTheme.css';
import { notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

function pnotifyNotice(message) {
  notice({
    text: `${message}`,
    delay: 1000,
    addClass: 'pnotify-notice',
    width: '320px',
  });
}

function pnotifyInfo(message) {
  info({
    text: `${message}`,
    delay: 1000,
    addClass: 'pnotify-info',
    width: '320px',
  });
}

function pnotifySuccess(message) {
  success({
    text: `${message}`,
    delay: 1000,
    addClass: 'pnotify-success',
    width: '320px',
  });
}

function pnotifyError(message) {
  error({
    text: `${message}`,
    delay: 1000,
    addClass: 'pnotify-error',
    width: '320px',
  });
}

export { pnotifyNotice, pnotifyInfo, pnotifySuccess, pnotifyError };
