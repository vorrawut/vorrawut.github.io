import { onMessage } from 'webext-bridge'

// Register the handler to listen for 'add-tab-media' messages
onMessage('add-tab-media', async (message) => {
  console.log('Message received:', message)
  // Do something with the message
  return { success: true }
})

console.log('Content Script Loaded')
