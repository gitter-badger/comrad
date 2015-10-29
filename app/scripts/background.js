'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});
console.log('\'Allo \'Allo! Event for Page Action');
//# sourceMappingURL=background.js.map
