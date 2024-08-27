import React from 'react'
import Title from '../../home/Title'
// import Skills from './Skills'
import FullTimeDetails from './FullTimeDetails'
import PartTimeDetails from './PartTimeDetails'

const Work = () => {
  return (
    <section id='work'>
      <Title title='My' subTitle='Work Experience' />
      <FullTimeDetails />
      <PartTimeDetails />
      {/*<Title title='My' subTitle='Skills' />*/}
      {/*<Skills />*/}
    </section>
  )
}

export default Work
