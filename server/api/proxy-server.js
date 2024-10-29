const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()

app.use(cors())

// Define a route to proxy your request
app.get('/fetch-drive-file', async (req, res) => {
  console.error('Proxy Server fetch-drive-file with driveFileId: ', req.query.id)
  const driveFileId = req.query.id
  const url = `https://drive.google.com/uc?export=download&id=${driveFileId}`

  try {
    console.log(`Fetching URL: ${url}`)
    const response = await fetch(url)
    const textData = await response.text()
    console.log('Fetched data:', textData)

    res.json(JSON.parse(textData)) // Assuming it's a JSON-compatible response
  } catch (error) {
    console.error('Proxy Server Error:', error)
    res.status(500).send('Error fetching file: ' + error.message)
  }
})

module.exports = app
