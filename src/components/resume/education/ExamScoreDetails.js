import React from 'react'
import ResumeTitle from '../ResumeTitle'
import { PiExam } from 'react-icons/pi'
import EducationCard from './EducationCard'

const ExamScoreDetails = () => {
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Testings' icon={<PiExam />} />
        <EducationCard
          badge='June 2024'
          title='IELTS Band Scores: Academic Overall - 6.5'
          subTitle='IDP IELTS Test Centre Melbourne, Melbourne'
          url='https://ielts.com.au/australia/test-centre/idp-ielts-test-centre-melbourne'
        />
        <EducationCard
          badge='Sep 2022'
          title='TOEIC Scores: 660'
          subTitle='TOEIC® Services Thailand, Bangkok'
          url='https://cpathailand.co.th/'
        />
      </div>
    </div>
  )
}

export default ExamScoreDetails
