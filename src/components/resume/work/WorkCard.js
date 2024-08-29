import React from 'react'
import { FaLink } from 'react-icons/fa'

const WorkCard = ({ badge, title, subTitle, des, url }) => {
  return (
    <div className='w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800'>
      <h6 className='w-48 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm'>{badge}</h6>

      <h2 className='text-lg font-titleFont text-gray-200 font-medium'>{title}</h2>

      {subTitle && <p className='text-sm text-[#999] -mt-2'>{subTitle}</p>}

      {des && <p className='text-xs text-[#999] font-medium px-10'>{des}</p>}

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

export default WorkCard
