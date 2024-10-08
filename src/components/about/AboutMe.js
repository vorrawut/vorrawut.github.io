import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row pb-6'>
      <div className='w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center'>
        <div className='py-6'>
          <p className='text-base leading-6 mb-3'>
            A software engineer who loves problem-solving and working with teams. Enjoy learning new technologies and continuously improving
            my skills.
          </p>
          <p className='text-base leading-6 '>Hobby: Watching game such as Dota 2, reading book or manga, and listening to music. 💻 🎧</p>
        </div>
      </div>
      <div className='w-full md:w-1/2 p-6'>
        <ul className='flex flex-col gap-1'>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Language:</span>
            THAI, ENGLISH
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Address:</span>
            Bangkok, Thailand
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Freelance:</span>
            Available
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Open To Relocation</span>
            New York, USA
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
