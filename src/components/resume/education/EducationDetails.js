import React from 'react'
import EducationCard from './EducationCard'
import ResumeTitle from '../ResumeTitle'
import { GiGraduateCap } from 'react-icons/gi'

const EducationDetails = () => {
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Study Timelines' icon={<GiGraduateCap />} />
        <EducationCard
          badge='2023 - 2024'
          title='General English: Intermediate to Advanced Level'
          subTitle='Impact English College Melbourne, Melbourne'
          url='https://www.impactenglish.edu.au/'
        />
        <EducationCard
          badge='2011 - 2015'
          title='Bachelor of Engineering (B.Eng.), Computer Engineering'
          subTitle='Mahidol University, Nakhon Pathom'
          url='https://mahidol.ac.th/'
        />
        <EducationCard
          badge='2006 - 2011'
          title='Secondary-Senior High school, Math-Science'
          subTitle='Princess Chulabhorn College, Phetchaburi'
          url='https://www.pccphet.ac.th/'
        />
      </div>
    </div>
  )
}

export default EducationDetails
