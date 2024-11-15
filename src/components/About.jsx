import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles.'
import { services } from '../Constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) =>(
  <Tilt className="xs:w-[250px] w-full" >
      <motion.div
      variants={fadeIn("right",'spring',index * 0.5 , 1)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
        >
            <img src={icon} alt={title} className=' w-16 h-16  object-contain' />
            <h3 className='text-center text-white text-[20px] font-bold'  >{title}</h3>
        </div>
      </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.15, 1)}
      className='mt-4 text-[17px] text-secondary leading-7 max-w-3xl'
      >
        I'm a Full Stack Developer adept in React.js, Express.js, and Node.js.
        Creating Dynamic and  Responcive User-interfacing. 
        Skilled in HTML, CSS, and JavaScript and Typescript
        I also have experience with Databases like MySQL,SQL and MongoDB. 
        I have good knowledge in React-native, Mobile App Developer and Next.js.
        I'm Familiar with working in Next.js, Tailwind css. 
        I have an internship in Full Stack Development from Numeric infosystem, Gwalior. 
        Beyond work, I enjoy honing programming logic, swiftly learning new tech.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
          {
            services.map((service,index)=>(
              <ServiceCard key={index} {...service} />
            ))
          }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")