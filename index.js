var window = require('global/window');

module.exports = (function (data) {
  try {
    if (!window.chrome || !window.chrome.storage || !window.chrome.storage.local) {
      return false;
    }

    window.chrome.storage.local.set(data);
    window.chrome.storage.local.remove(Object.keys(data));

    return true;
  } catch (_) {
    return false;
  }
}({'HAS-CHROME-STORAGE': 'foo'}));
