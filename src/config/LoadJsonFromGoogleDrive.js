import { useState, useEffect } from 'react'
import { CONFIG_FILE_URL } from '../constants/Constants'

const useGoogleDriveConfig = () => {
  const [configData, setConfigData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(CONFIG_FILE_URL)

        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        // Check if the content-type is JSON
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const jsonData = await response.json()
          setConfigData(jsonData)
        } else {
          throw new Error('Response is not JSON format')
        }
      } catch (err) {
        setError(err)
        console.error('Error loading configuration:', err)
      }
    }

    fetchConfig()
  }, [])

  return { configData, error }
}

export default useGoogleDriveConfig
