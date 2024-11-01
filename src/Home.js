/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Left from './components/home/Left'
import About from './components/about/About'
import { IoIosPaper } from 'react-icons/io'
// import { BsTelephonePlusFill } from 'react-icons/bs'
// import { FaEnvelope, FaUser } from 'react-icons/fa'
// import { SiGooglechat } from 'react-icons/si'
// import { MdWork } from 'react-icons/md'
import Education from './components/resume/education/Education'
import Contact from './components/contact/Contact'
import Work from './components/resume/work/Work'
import { BiCodeAlt } from 'react-icons/bi'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import Sidenav from './components/home/sidenav/Sidenav'
import ThemeSwitch from './common/ThemeContext'
import { useTheme } from './ThemeUtils'
import ReactGA from 'react-ga4'

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [about, setAbout] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [education, setEducation] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [workExperience, setWorkExperience] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [blog, setBlog] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [contact, setContact] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [sidenav, setSidenav] = useState(false)
  const ref = useRef()
  const { getBG, getColorText, getNormalLightText, getBGHoverText } = useTheme()

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false)
        ReactGA.event({
          category: 'Button', // Event category
          action: 'Click_false', // Event action
          label: 'Sidenav' // Optional label
        })
      }
    })
  }, [])
  return (
    <div className='w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0'>
      {/* ================= Left Icons End here ======================== */}
      <div className='w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4'>
        <ThemeSwitch />
        {/* ======= Home Icon start */}
        <div
          onClick={() => {
            setSidenav(true)
            ReactGA.event({
              category: 'Button', // Event category
              action: 'Click_true', // Event action
              label: 'Sidenav' // Optional label
            })
          }}
          className={`w-full h-20 ${getBG} rounded-3xl flex justify-center items-center cursor-pointer group`}
        >
          <div className='flex flex-col gap-1.5 overflow-hidden'>
            <span
              className={`w-8 h-[2px] ${getBGHoverText} inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300`}
            ></span>
            <span className={`w-8 h-[2px] ${getBGHoverText} inline-block group-hover:bg-designColorLight duration-300`}></span>
            <span
              className={`w-8 h-[2px] ${getBGHoverText} inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300`}
            ></span>
          </div>
        </div>
        {/* ======= Home Icon End */}

        {/* ============= Sidenav Start here ============= */}
        {sidenav && (
          <div className={`w-full h-screen fixed top-0 left-0 ${getBG} bg-opacity-50 z-50`}>
            <div className='w-96 h-full relative'>
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-full h-full ${getBG} overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]`}
              >
                <Sidenav />
                <span
                  onClick={() => {
                    setSidenav(false)
                    ReactGA.event({
                      category: 'Button', // Event category
                      action: 'Click_false', // Event action
                      label: 'Sidenav' // Optional label
                    })
                  }}
                  className={`absolute top-0 -right-16 w-12 h-12 ${getBG} text-2xl ${getNormalLightText} hover:text-designColorLight duration-300 cursor-pointer flex items-center justify-center z-50`}
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}

        {/* ============= Sidenav End here =============== */}
        {/* ======= Other Icons Start */}
        <div className={`w-full h-80 ${getBG} rounded-3xl flex flex-col items-center justify-between py-6`}>
          {/*About Icon*/}
          <span
            onClick={() => {
              setAbout(true)
              setEducation(false)
              setWorkExperience(false)
              setProjects(false)
              setBlog(false)
              setContact(false)
              ReactGA.event({
                action: 'Click_about', // Event category
                category: 'Button', // Event action
                label: 'Menu' // Optional label
              })
            }}
            className={`${
              about
                ? getColorText
                : `w-full h-6 ${getNormalLightText} text-xl flex items-center justify-center hover:${getColorText} duration-300 cursor-pointer relative group`
            } w-full h-6 text-xl flex items-center justify-center hover:${getColorText} duration-300 cursor-pointer relative group`}
          >
            <FaUser className={`${about ? getColorText : getNormalLightText}`} />
            <span
              className={`${getNormalLightText} font-medium text-xs uppercase ${getBG} px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20`}
            >
              About
            </span>
          </span>

          {/* Education Icon */}
          <span
            onClick={() => {
              setAbout(false)
              setEducation(true)
              setWorkExperience(false)
              setProjects(false)
              setBlog(false)
              setContact(false)
              ReactGA.event({
                action: 'Click_education', // Event category
                category: 'Button', // Event action
                label: 'Menu' // Optional label
              })
            }}
            className={`${
              education
                ? getColorText
                : 'w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group`}
          >
            <IoIosPaper className={`${education ? getColorText : getNormalLightText}`} />
            <span className='text-black font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              Education
            </span>
          </span>

          {/* Work Icon */}
          <span
            onClick={() => {
              setAbout(false)
              setEducation(false)
              setWorkExperience(true)
              setProjects(false)
              setBlog(false)
              setContact(false)
              ReactGA.event({
                action: 'Click_workExperience', // Event category
                category: 'Button', // Event action
                label: 'Menu' // Optional label
              })
            }}
            className={`${
              workExperience
                ? getColorText
                : 'w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group`}
          >
            <BiCodeAlt className={`${workExperience ? getColorText : getNormalLightText}`} />
            <span
              className={`${getNormalLightText} font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20`}
            >
              Work Experience
            </span>
          </span>

          {/*/!* Project Icon *!/*/}
          {/*<span*/}
          {/*  onClick={() =>*/}
          {/*    setAbout(false) & setEducation(false) & setWorkExperience(false) & setProjects(true) & setBlog(false) & setContact(false)*/}
          {/*  }*/}
          {/*  className={`${*/}
          {/*    projects*/}
          {/*      ? 'text-designColorLight'*/}
          {/*      : 'w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'*/}
          {/*  } w-full h-6 text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group`}*/}
          {/*>*/}
          {/*  <MdWork />*/}
          {/*  <span className='text-black font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>*/}
          {/*    Projects*/}
          {/*  </span>*/}
          {/*</span>*/}

          {/*/!* Blog Icon *!/*/}
          {/*<span*/}
          {/*  onClick={() =>*/}
          {/*    setAbout(false) & setEducation(false) & setWorkExperience(false) & setProjects(false) & setBlog(true) & setContact(false)*/}
          {/*  }*/}
          {/*  className={`${*/}
          {/*    blog*/}
          {/*      ? 'text-designColorLight'*/}
          {/*      : 'w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'*/}
          {/*  } w-full h-6 text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group`}*/}
          {/*>*/}
          {/*  <SiGooglechat />*/}
          {/*  <span className='text-black font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>*/}
          {/*    Blog*/}
          {/*  </span>*/}
          {/*</span>*/}

          {/*Contact Icon*/}
          <span
            id='SpanContact'
            onClick={() => {
              setAbout(false)
              setEducation(false)
              setWorkExperience(false)
              setProjects(false)
              setBlog(false)
              setContact(true)
              ReactGA.event({
                action: 'Click_contact', // Event category
                category: 'Button', // Event action
                label: 'Menu' // Optional label
              })
            }}
            className={`${
              contact
                ? getColorText
                : 'w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope className={`${contact ? getColorText : getNormalLightText}`} />
            <span className='text-black font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              Contact
            </span>
          </span>
          {/*<span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColorLight duration-300 cursor-pointer relative group'>*/}
          {/*  <BsTelephonePlusFill />*/}
          {/*  <span className='text-black font-medium text-xs uppercase bg-designColorLight px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>*/}
          {/*    Call*/}
          {/*  </span>*/}
          {/*</span>*/}
        </div>
        {/* ======= Other Icons End */}
      </div>

      {/* ================= Left Icons Start here ====================== */}
      <div className='w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center'>
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className={`w-full lgl:w-8/12 h-[95%] ${getBG} rounded-2xl flex justify-center items-center`}>
          {/* ======================== Smaller device content Start ======================== */}
          <div className='w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6'>
            <About />
            <Education />
            <Work />
            {/*<Projects />*/}
            {/*<Blog />*/}
            <Contact />
          </div>

          {/* ======================== Smaller device content End ========================== */}
          <div className='w-full h-[96%] hidden lgl:flex overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>
            {about && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <About />
              </motion.div>
            )}
            {education && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Education />
              </motion.div>
            )}
            {workExperience && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Work />
              </motion.div>
            )}
            {/*{projects && (*/}
            {/*  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>*/}
            {/*    <Projects />*/}
            {/*  </motion.div>*/}
            {/*)}*/}
            {/*{blog && (*/}
            {/*  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>*/}
            {/*    <Blog />*/}
            {/*  </motion.div>*/}
            {/*)}*/}
            {contact && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
