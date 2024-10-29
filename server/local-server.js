// local-server.js

const app = require('./api/proxy-server') // Import the Express app

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Local server running on http://localhost:${PORT}`)
})
