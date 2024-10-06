import React from 'react'
import { FaLink } from 'react-icons/fa'
import { useTheme } from '../../../ThemeUtils'

const WorkCard = ({
  badge,
  title,
  subTitle,
  keyProjects,
  summaries,
  keyTechnologies,
  responsibilities,
  keyLearnings,
  achievements,
  url
}) => {
  const { getH1ColorText } = useTheme()

  const keyProjectItems = keyProjects?.map((item) => (
    <p className='text-xs text-[#999] font-medium px-4 py-1' key={'keyProjects_' + item.id}>
      <span className='pr-2'> &#8226;</span>
      {item.text}
    </p>
  ))
  const summariesItems = summaries?.map((item) => (
    <p className='text-xs text-[#999] font-medium px-4 py-1' key={'summaries_' + item.id}>
      <span className='pr-2'> &#8226;</span>
      {item.text}
    </p>
  ))
  const responsibilitiesItems = responsibilities?.map((item) => (
    <p className='text-xs text-[#999] font-medium px-10 py-1' key={'responsibilities_' + item.id}>
      <span className='pr-2'> &#8226;</span>
      {item.text}
    </p>
  ))
  const keyLearningsItems = keyLearnings?.map((item) => (
    <p className='text-xs text-[#999] font-medium px-10 py-1' key={'keyLearnings_' + item.id}>
      <span className='pr-2'> &#8226;</span>
      {item.text}
    </p>
  ))

  return (
    <div className='w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800'>
      <h6 className='w-48 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm'>{badge}</h6>

      <h2 className={`text-lg font-titleFont ${getH1ColorText} font-medium`}>{title}</h2>

      {subTitle && <p className='text-sm text-[#999] -mt-2'>{subTitle}</p>}

      {keyProjectItems && <div className='text-xs text-[#999] font-medium px-5'>Key Projects: {keyProjectItems}</div>}

      {summariesItems && <div className='text-xs text-[#999] font-medium px-5'>Summary: {summariesItems}</div>}

      {keyTechnologies && <p className='text-xs text-[#999] font-medium px-5'>Key Technologies: {keyTechnologies}</p>}

      {responsibilitiesItems && <div className='text-xs text-[#999] font-medium px-5'>Responsibilities: {responsibilitiesItems}</div>}

      {keyLearningsItems && <div className='text-xs text-[#999] font-medium px-5'>KeyLearning: {keyLearningsItems}</div>}

      {achievements && <p className='text-xs text-[#999] font-medium px-5'>Achievements: {achievements}</p>}

      {url && (
        <a href={url}>
          <span className='flex flex-row space-x-1 hover:text-designColorLight cursor-pointer text-xs text-[#999] px-5'>
            <FaLink />
            <p>LINK</p>
          </span>
        </a>
      )}
    </div>
  )
}

export default WorkCard
