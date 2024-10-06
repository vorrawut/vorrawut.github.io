import { sendMessage } from 'webext-bridge'
import * as chrome from 'webextension-polyfill'

// Send a message to the active tab's content script
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  sendMessage('add-tab-media', { mediaType: 'video' }, `content-script@${tabs[0].id}`)
})

console.log('Background Script Loaded')
