import React from 'react'
import ecellLogo from '../Images/ecelllogo.png'
function EcellLogo() {
    return (
        <div>
            <div className='h-[350px] w-[350px]   shadow-[0px_0px_3px_3px_rgba(0,0,0,0.40)] bg-[#D9D9D9]  rounded-lg '>
                <img src={ecellLogo} className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    )
}

export default EcellLogo