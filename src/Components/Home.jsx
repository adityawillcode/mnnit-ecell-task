import React from 'react'
import GridBox from './GridBox'
import EcellLogo from './EcellLogo'
import GradientBox from './GradientBox'
import profilePic from '../Images/rain-7833614_1280.jpg'
import {Link} from 'react-router-dom'
import {AiFillInstagram} from 'react-icons/ai'
function Home() {
    return (
      
        <div className='h-screen bg-neutral-200 flex justify-center  items-center'>
           <div className='flex flex-col lg:flex-row pt-[8rem] w-[1200px] gap-x-[10rem]'>
            <div className='  '> 
                <img src={profilePic} className=' border-black border-[2px] w-[500px] ' alt="" />
                
            </div>
            <div className='relative'>
                <span className='text-[3rem] font-bold'>Name:</span><span className='text-[3rem] font-mono font-semibold ml-[1rem] '>Aditya Rawat </span> <Link to={'https://www.instagram.com/aditya_rwt12/'}  className='absolute ml-[2rem] cursor-pointer top-4'><AiFillInstagram  size={50}/></Link><br />
                <span className='text-[3rem] font-bold'>Registration Number:</span><span className='text-[3rem] font-mono font-semibold ml-[1rem]'>20226014</span><br />
                <span className='text-[3rem] font-bold'>Tech stack:</span><span className='text-[3rem] font-mono font-semibold ml-[1rem]'>React Js,Tailwind Css</span><br/>
                <span className='text-[3rem] font-bold'>Department:</span><span className='text-[3rem] font-mono font-semibold ml-[1rem]'>Mechanical Engineering</span>


            </div>

           </div>
        </div>
       
    )
}

export default Home