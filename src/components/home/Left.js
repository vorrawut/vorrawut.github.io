import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BsCloudLightningFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import CV from '../../assets/Vorrawut Judasri Resume.pdf'
import { bannerImage } from '../../assets/index'
import { useTheme } from '../../ThemeUtils'
import MusicPlayer from '../musicPlayer/MusicPlayer'

const onContactButtonDidTap = () => {
  document.getElementById('SpanContact').click()
}

const Left = () => {
  const { getBGWithNormalText, getBGWithColorText } = useTheme()

  const [text] = useTypewriter({
    words: ['Agile Engineer', 'Full Stack Developer', 'Mobile Developer', 'Proactive-Introvert :)', 'Pet Lover <3', 'Roamers :p'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000
  })

  return (
    <div className={`w-full lgl:w-5/12 h-full ${getBGWithNormalText} rounded-2xl shadow-testShwdow z-10`}>
      <div className='w-full h-3/5'>
        <img className='w-full h-full object-cover rounded-2xl' src={bannerImage} loading='priority' alt='bannerImage' />
      </div>
      <div className='w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl'>
        <div className='flex flex-col items-center gap-2 py-10'>
          <h1 className={`${getBGWithNormalText} text-4xl font-semibold`}>Vorrawut Judasri</h1>
          <p className={`${getBGWithColorText} text-base tracking-wide`}>
            {text}
            <Cursor cursorBlinking='false' cursorStyle='|' />
          </p>
          <div className='flex justify-center gap-2 mt-2'>
            {/* ======= Github */}
            <a href='https://github.com/vorrawut'>
              <span className='hover:text-designColorLight duration-300 cursor-pointer text-xl'>
                <FaGithub />
              </span>
            </a>

            {/* ======= Medium */}
            <a href='https://medium.com/@vortj'>
              <span className='hover:text-designColorLight duration-300 cursor-pointer text-xl'>
                <FaMedium />
              </span>
            </a>

            {/* ======= Linkedin */}
            <a href='https://www.linkedin.com/in/vorrawutj'>
              <span className='hover:text-designColorLight duration-300 cursor-pointer text-xl'>
                <FaLinkedin />
              </span>
            </a>

            {/* ======= Twitter */}
            <a href='https://x.com/vorrawut294048'>
              <span className='hover:text-designColorLight duration-300 cursor-pointer text-xl'>
                <AiFillTwitterCircle />
              </span>
            </a>
          </div>
        </div>

        <MusicPlayer />

        <div className='flex h-14'>
          <a
            href={CV}
            target='_blank'
            className='w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColorLight duration-300'
            rel='noreferrer'
          >
            <button className='w-full h-full flex justify-center items-center gap-2'>
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button
            onClick={() => onContactButtonDidTap()}
            className='w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColorLight duration-300'
          >
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Left
