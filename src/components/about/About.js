import React from 'react'
import Title from '../home/Title'
import AboutMe from './AboutMe'
import MySkills from './MySkills'

const About = () => {
  return (
    <section id='about' className='w-full'>
      <Title title='About' subTitle='Me' />
      <AboutMe />
      <Title title='My' subTitle='Skills' />
      <MySkills />
      {/*<Title title='Fun' subTitle='Fact'/>*/}
      {/*<FunFact/>*/}
    </section>
  )
}

export default About
