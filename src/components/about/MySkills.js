import React from 'react'
import { FaChartLine, FaMobile } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import SkillsCard from './SkillsCard'

const MySkills = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <SkillsCard
        icons={<FaChartLine />}
        title='Agile & Scrum'
        subTitle='Helping teams collaborate effectively and deliver high-quality products efficiently.'
      />
      <SkillsCard
        icons={<BiCodeAlt />}
        title='Full-Stack Web Development'
        subTitle='Creating responsive, user-friendly websites using both front-end and back-end technologies.'
      />
      <SkillsCard
        icons={<FaMobile />}
        title='Mobile Application'
        subTitle='Creating high-quality and user-friendly apps that perform seamlessly across platforms.'
      />
      <SkillsCard
        icons={<SiFlutter />}
        title='Cross Platform'
        subTitle='Building efficient apps that run smoothly on both iOS and Android with Flutter.'
      />
    </div>
  )
}

export default MySkills
