import React from 'react'
import SidenavTitle from './SidenavTitle'
import { useTheme } from '../../../ThemeUtils'

const Sidenav = () => {
  const { getNormalLightText } = useTheme()
  return (
    <div className='px-7 py-4'>
      <SidenavTitle title='R' subTitle='each Me' />
      <ul>
        <li className={`sidenavLi ${getNormalLightText}`}>+66 922683583</li>
        <li className={`sidenavLi ${getNormalLightText}`}>
          <a href='mailto:vorrawutjud.work@gmail.com'>vorrawutjud.work@gmail.com</a>
        </li>
        <li className={`sidenavLi ${getNormalLightText}`}>
          <a href='https://github.com/vorrawut' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </li>
        <li className={`sidenavLi ${getNormalLightText}`}>
          <a href='https://medium.com/@vortj' target='_blank' rel='noopener noreferrer'>
            Medium
          </a>
        </li>
        <li className={`sidenavLi ${getNormalLightText}`}>
          <a href='https://www.linkedin.com/in/vorrawut-judasri-b10663ba' target='_blank' rel='noopener noreferrer'>
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav
