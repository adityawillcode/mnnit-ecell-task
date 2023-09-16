import React from 'react'
import GridBox from './GridBox'
import EcellLogo from './EcellLogo'
import GradientBox from './GradientBox'

function Grid() {
  return (
    <>
      <div className='pt-[2rem] flex justify-center items-center'>


        <div className=' flex justify-center items-center flex-col gap-y-[2rem] md:hidden '>

          <div className='flex flex-col gap-y-[2rem]'>
            <GridBox />
            <EcellLogo />
            <GradientBox />
          </div>

        </div>


        <div className='  md:flex justify-center hidden lg:hidden  '>
          <div className='flex flex-col gap-y-[2rem] justify-center items-center  '>
            <GradientBox />
            <div className='flex gap-x-[2rem]'>
              <EcellLogo />
              <GridBox />
            </div>
          </div>
        </div>

        <div className='  lg:flex justify-center hidden '>
          <div className='flex gap-x-[3rem]'>
            <GradientBox />
            <EcellLogo />
            <GridBox />

          </div>
        </div>

      </div>
    </>
  )
}

export default Grid