import React from 'react'
import SidenavTitle from './SidenavTitle'
import { useTheme } from '../../../ThemeUtils'

const Sidenav = () => {
  const { getNormalLightText } = useTheme()
  return (
    <div className='px-7 py-4'>
      {/*<SidenavTitle title='M' subTitle='enu' />*/}
      {/*<ul>*/}
      {/*  <li className='sidenavLi'>Blog Page</li>*/}
      {/*  <li className='sidenavLi'>Portfolio Page</li>*/}
      {/*</ul>*/}
      {/*<SidenavTitle title='P' subTitle='rojects' />*/}
      {/*<ul>*/}
      {/*  <li className='sidenavLi'>Web Development</li>*/}
      {/*  <li className='sidenavLi'>E-commerce</li>*/}
      {/*  <li className='sidenavLi'>Chatting Applications</li>*/}
      {/*  <li className='sidenavLi'>Portfolio Websites</li>*/}
      {/*  <li className='sidenavLi'>Backend Setup</li>*/}
      {/*  <li className='sidenavLi'>Amazon Clone</li>*/}
      {/*</ul>*/}
      {/*<SidenavTitle title='L' subTitle='atest Posts' />*/}
      {/*<ul>*/}
      {/*  <li className='sidenavLi'>UI & UX Conference at Lviv 2022</li>*/}
      {/*  <li className='sidenavLi'>How to become a creative designer</li>*/}
      {/*  <li className='sidenavLi'>Designers thoughts about mobile UI templates</li>*/}
      {/*  <li className='sidenavLi'>Designer Conference at Florida, USA 2020</li>*/}
      {/*</ul>*/}
      <SidenavTitle title='R' subTitle='each Me' />
      <ul>
        <li className={`sidenavLi ${getNormalLightText}`}>+66 922683583</li>
        <li className={`sidenavLi ${getNormalLightText}`}>vorrawutjud.work@gmail.com</li>
      </ul>
    </div>
  )
}

export default Sidenav
