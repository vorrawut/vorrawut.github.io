import React from 'react'
import { FaLink } from 'react-icons/fa'
import { useTheme } from '../../../ThemeUtils'

const EducationCard = ({ badge, title, subTitle, des, url }) => {
  const { getH1ColorText } = useTheme()

  return (
    <div className='w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800'>
      {badge === '' ? (
        <h6 className='w-28 text-center text-sm py-[1px] text-designColorLight border-[1px] border-designColor rounded-sm'>2022-Present</h6>
      ) : (
        <h6 className='w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm'>{badge}</h6>
      )}
      <h2 className={`text-lg font-titleFont ${getH1ColorText} font-medium`}>{title}</h2>

      {subTitle && <p className='text-sm text-[#999] -mt-2'>{subTitle}</p>}

      {des && <p className='text-base text-[#999] font-medium pr-10'>{des}</p>}

      {url && (
        <a href={url}>
          <span className='flex flex-row space-x-1 hover:text-designColorLight cursor-pointer text-xs text-[#999] pr-10'>
            <FaLink />
            <p>LINK</p>
          </span>
        </a>
      )}
    </div>
  )
}

export default EducationCard
