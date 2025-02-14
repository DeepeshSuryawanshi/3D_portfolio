import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles.'
import { navLinks } from '../Constants'
import { logo,menu,close } from '../assets'

const Navbar = () => {
  const [active,setActive] = useState("")
  const [toggle,setToggle] = useState(false)
  
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center p-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={"/"} className='flex items-center gap-2' 
        onClick={()=>{setActive("");window.scrollTo(0,0)}}>
          <img src={logo} alt="logo" className='w-24 object-contain' />
          <p className='text-white flex gap-1 text-[18px] font-semibold courser-pointer'>Deepesh <span className='sm:block hidden'>| Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link)=>(
              <li key={link.id}
              className={`${active === link.title? "text-white" : " text-secondary"}
              hover:text-white text-[18px] font-medium courser-pointer
              `}
              onClick={()=>setActive(link.title)}
              ><a href={`#${link.id}`}>{link.title}</a></li>
            ))
          }
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu} alt="menu"
              className='w-[28px] h-[28px] object-contain courser-pointer '
              onClick={()=>setToggle(!toggle)}
              />

          <div className={`${!toggle ? 'hidden' : 'flex'}
              p-6 black-gradient absolute top-14 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-lg`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title ? "text-white" : " text-secondary"}
                         font-poppins font-medium courser-pointer text-[16px]
                          `}
                    onClick={() =>{setActive(link.title);setToggle(!toggle)}}
                  ><a href={`#${link.id}`}>{link.title}</a></li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar