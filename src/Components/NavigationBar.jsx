import React,{ useState } from 'react'


import DesktopNavigation from './DesktopNavigation'
import PhoneNavigation from './PhoneNavigation'
function NavigationBar() {
 
  return (
   <div>
     <div className='md:h-[55px] hidden md:flex item-center justify-end pr-[5rem]  shadow-[0px_3px_5px_0px_#00000024] py-3 right-0 left-0 top-0'>
          <DesktopNavigation/>
    </div>
    <div className='md:hidden flex'>
          <PhoneNavigation/>
    </div>

   </div>
  )
}

export default NavigationBar