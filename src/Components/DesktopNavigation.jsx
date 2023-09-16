import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function DesktopNavigation() {
  return (
    <div>
       
          <div className='hidden md:flex gap-x-[3rem] font-sans justify-center items-center text-[1.3rem] '>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/'}>Grid</NavLink>
            <NavLink to={'https://www.linkedin.com/in/aditya-rawat-1a72091b5/'}>Linkedin</NavLink>
            
          </div>
          
        
        </div>
  
  )
}

export default DesktopNavigation