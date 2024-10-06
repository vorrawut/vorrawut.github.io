import React from 'react'
import ResumeTitle from '../ResumeTitle'
import { MdWork } from 'react-icons/md'
import WorkCard from './WorkCard'
import { fullTimeData } from './FullTimeData'

const FullTimeDetails = () => {
  const workCardItems = fullTimeData?.map((item) => (
    <WorkCard
      key={item.id}
      badge={item.badge}
      title={item.title}
      subTitle={item.subTitle}
      keyProjects={item.keyProjects}
      summaries={item.summaries}
      keyTechnologies={item.keyTechnologies}
      responsibilities={item.responsibilities}
      keyLearning={item.keyLearning}
      achievements={item.achievements}
      url={item.url}
    />
  ))
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Full-Time' icon={<MdWork />} />
        {workCardItems}
      </div>
    </div>
  )
}

export default FullTimeDetails
