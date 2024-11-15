import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles.'
import { experiences } from '../Constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { li } from 'framer-motion/client'

// experice caard
const ExperienceCard =({
      title,
      company_name,
      icon,
      iconBg,
      date,
      points
})=>{
  return(
   <VerticalTimelineElement
   contentStyle={{backgroundColor:'#1D1836',color:'#fff'}}
   contentArrowStyle={{borderRight:'7px solid #232631'}}
   date={date}
   iconStyle={{background:iconBg}}
   icon={
    <div>
      <img src={icon} alt={company_name} 
      className='p-1 object-contain'
      />
    </div>
   }
   >
    <div>
      <h3 className='text-white text-[20px] font-semibold' >{title}</h3>
      <p style={{margin:0}} className='text-secondary text-[16px] font-semibold '>{company_name}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          points.map((point,index)=>(
            <li key={index}
            className='text-white-100 text-[14px] pl-1 tracking-wide '
            >{point}</li>
          ))
        }
      </ul>
    </div>
   </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
    <p className={styles.sectionSubText} >What I have Done  SO far</p>
    <h2 className={styles.sectionHeadText}>Work Experiences.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'  >
      <VerticalTimeline>
        {
          experiences.map((experience,index)=><ExperienceCard key={index} {...experience}/>)
        }
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")