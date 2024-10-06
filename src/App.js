import React, { useEffect } from 'react'
import RoundOne from './components/roundDesigns/RoundOne'
import RoundTwo from './components/roundDesigns/RoundTwo'
import RoundThree from './components/roundDesigns/RoundThree'
import RoundFour from './components/roundDesigns/RoundFour'
import RoundFive from './components/roundDesigns/RoundFive'
import Home from './Home'
import ReactGA from 'react-ga4'

const MEASUREMENT_ID = 'G-RX522EVDM5'

function App() {
  useEffect(() => {
    // Initialize GA4
    ReactGA.initialize(MEASUREMENT_ID)

    // Track the first page view
    ReactGA.send({ hitType: 'pageview', page: '/home', title: 'Landing Page' })
  }, [])

  return (
    <div className='w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-slate-900 relative'>
      <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
        <Home />
      </div>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  )
}

export default App
