import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../Constants'
import { div } from 'framer-motion/client'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' > 
          {
            technologies.map((tech,index)=>(
              <div className='w-28 h-28' key={tech.name}>
                  <BallCanvas icon={tech.icon}/>
              </div>
            ))
          }
    </div>
  )
}

export default Tech