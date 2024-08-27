import React from 'react'
import Title from '../../home/Title'
import EducationDetails from './EducationDetails'
import ExamScoreDetails from './ExamScoreDetails'

const Education = () => {
  return (
    <section id='education'>
      <Title title='My' subTitle='Education' />
      <EducationDetails />
      <ExamScoreDetails />
    </section>
  )
}

export default Education
