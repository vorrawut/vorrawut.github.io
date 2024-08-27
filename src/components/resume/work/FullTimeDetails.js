import React from 'react'
import ResumeTitle from '../ResumeTitle'
import { MdWork } from 'react-icons/md'
import WorkCard from './WorkCard'

const FullTimeDetails = () => {
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Full-Time' icon={<MdWork />} />
        <WorkCard
          badge='3 Jan 2022 - Present'
          title='Senior Agile Engineer:  Odd-e (Thailand) Co Ltd.'
          subTitle='Outsource: Work Remote at DKATALIS (Bank Jago, Indonesia)'
          des='Jago (Mobile Banking Application): Responsible for the development and maintenance of the mobile application (Flutter) integrated with microservices.
          Facilitates enhanced team productivity in product delivery through Agile methodologies and the utilisation of tools and processes to establish an optimal software development environment.'
        />
        <WorkCard
          badge='2 Jan 2020 - 31 Dec 2021'
          title='Junior Aglie Engineer:  Odd-e (Thailand) Co Ltd.'
          subTitle='Outsource: Securities and Exchange Commission of Thailand (SEC)'
        />
        <WorkCard
          badge='1 Feb 2019 - 1 Jan 2020'
          title='Junior Agile Engineer:  Odd-e (Thailand) Co Ltd.'
          subTitle='Outsource: KRUNG THAI BANK PUBLIC COMPANY LIMITED (KTB)'
        />
        <WorkCard
          badge='2 Oct 2017 - 31 Jan 2019'
          title='Junior Aglie Engineer:  Odd-e (Thailand) Co Ltd.'
          subTitle='Outsource: The Stock Exchange of Thailand (SET)'
        />
        <WorkCard
          badge='1 Dec 2016 - 30 Sep 2017'
          title='Junior Software Engineer:  RV CONNEX CO., LTD'
          subTitle='Full-time: RV CONNEX CO., LTD'
        />
        <WorkCard
          badge='1 Aug 2015 - 30 Nov 2016'
          title='Junior Software Engineer:  AVIA SATCOM CO.,LTD'
          subTitle='Full-time: AVIA SATCOM CO.,LTD'
        />
        <WorkCard
          badge='1 Apr 2014 - 30 Sep 2014'
          title='Internship Software Engineer:  AVIA SATCOM CO.,LTD'
          subTitle='Internship: AVIA SATCOM CO.,LTD'
        />
      </div>
    </div>
  )
}

export default FullTimeDetails
