import React from 'react'
import { useTheme } from '../../ThemeUtils'

const SkillsCard = ({ icons, title, subTitle }) => {
  const { getNormalLightText } = useTheme()

  return (
    <div className='py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom'>
      <span className='text-4xl text-designColorLight mb-2'>{icons}</span>
      <h2 className={`${getNormalLightText} font-titleFont text-lg font-semibold`}>{title}</h2>
      <p className='text-base text-center text-zinc-400 px-6'>{subTitle}</p>
    </div>
  )
}

export default SkillsCard
