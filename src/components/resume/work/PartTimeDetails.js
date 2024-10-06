import React from 'react'
import ResumeTitle from '../ResumeTitle'
import WorkCard from './WorkCard'
import { SiFreelancer } from 'react-icons/si'
import { partTimeData } from './PartTimeData'

const PartTimeDetails = () => {
  const workCardItems = partTimeData?.map((item) => (
    <WorkCard
      key={item.id}
      badge={item.badge}
      title={item.title}
      subTitle={item.subTitle}
      keyProjects={item.keyProjects}
      summaries={item.summaries}
      keyTechnologies={item.keyTechnologies}
      responsibilities={item.responsibilities}
      keyLearnings={item.keyLearnings}
      achievements={item.achievements}
      url={item.url}
    />
  ))
  return (
    <div className='w-full grid px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Part-Time' icon={<SiFreelancer />} />
        {workCardItems}
      </div>
    </div>
  )
}

export default PartTimeDetails
