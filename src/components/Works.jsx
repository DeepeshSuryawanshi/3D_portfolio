import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles.'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../Constants'
import { fadeIn,textVariant } from '../utils/motion'

// ProjectCard
const ProjectCard = ({index,name,description,tags,image,source_code_link}) =>{
  return(
   <motion.div
   variants={fadeIn("up","spring",index *0.5, 0.75)}
   >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='w-full h-[230px] relative'>
            <img src={image} alt={name} className='w-full h-full object-contain rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>  
              <div
              onClick={()=>window.open(source_code_link,'_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt="Github" className='w-9 h-9 object-contain' />
              </div>
            </div>
        </div>
        <div className='mt-2'>
            <h3 className='text-white font-bold text-[24px]' >{name}</h3>
            <p className='mt-2 text-secondary text-[14px]' >{description}</p>
        </div>
        <div className='flex flex-wrap mt-2 gap-2'>
          {tags.map((tag,index)=>(
            <p  key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
   </motion.div>
  )
}


const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()} >
    <p className={styles.sectionSubText} >My Work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className="flex w-full ">
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Following projects showcases my skills
          and experience through
          real-world examples of my work. Each
          project is briefly described with
          links to code repositories and live
          demos in it. It reflects my
          ability to solve complex problems, work
          with different technologies,
          and manage projects effectively.
      </motion.p>
    </div>
    <div className='flex flex-wrap gap-7 mt-12'>
      {projects.map((project,index)=>(<ProjectCard index={index} key={`Project-${index}`} {...project} />))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"");