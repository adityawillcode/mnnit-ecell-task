import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
function PhoneNavigation() {

    const [showPhoneNav, setShawPhoneNav] = useState(false)
    return (

        <div className={`${!showPhoneNav && 'shadow-[0px_3px_5px_0px_#00000024] '} w-[100vw] justify-center items-center flex flex-col  relative py-[6px]`}>
            <div className=' md:hidden flex items-center justify-end w-[100vw] pr-[2rem] ' onClick={() => { setShawPhoneNav(!showPhoneNav) }} >
                {
                    showPhoneNav ?
                        <RxCross1 size={30} className='text-neutral-400' /> :
                        <GiHamburgerMenu size={30} className='text-neutral-400' />
                }
            </div>
            {
                showPhoneNav &&
            <div className='  top-[100%] flex flex-col w-[100vw] justify-center items-center gap-y-2 mt-2 shadow-[0px_3px_5px_0px_#00000024] pb-[1rem]'>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/'}>Grid</NavLink>
                    <NavLink to={'https://www.linkedin.com/in/aditya-rawat-1a72091b5/'}>Linkedin</NavLink>
            </div>
            }
        </div>

    )
}

export default PhoneNavigation