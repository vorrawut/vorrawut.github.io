import React from 'react'
import ResumeTitle from '../ResumeTitle'
import WorkCard from './WorkCard'
import { SiFreelancer } from 'react-icons/si'

const PartTimeDetails = () => {
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Part-Time' icon={<SiFreelancer />} />
        <WorkCard badge='2 Nov 2021 - 1 July 2022' title='Full-Stack Mobile Developer' subTitle='Client: True Corporation' />
        <WorkCard badge='5 Feb 2021 - 30 Sep 2021' title='Junior Developer: Odd-e (Thailand) Co Ltd.' subTitle='Client: safebsc.finance' />
        <WorkCard
          badge='4 Mar 2020 - 28 Aug 2020'
          title='Junior Developer: Odd-e (Thailand) Co Ltd.'
          subTitle='Client: The Stock Exchange of Thailand (SET)'
        />
      </div>
    </div>
  )
}

export default PartTimeDetails
