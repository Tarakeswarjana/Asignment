import React from 'react'
import { downicon, searchIcon } from '../assets/Icon'
function Navbar() {
    return (
        <div className='bg-[#12406f] flex items-center h-15 z-10 justify-end pl-[3rem] pr-[0rem]'>

            <div className='text-white hidden sm:block h-14 items-center flex justify-center w-40'>
                <div className='font-bold text-2xl mt-[0.6rem]'>
                    Logo
                </div>
            </div>


            <div className='text-white flex  sm:gap-[3rem] cursor-pointer gap:4 ml-[17rem]'>
                <div className='flex items-center'>Qualification <p>{downicon}</p></div>
                <div className='flex items-center'>Qualification {downicon}</div>
                <div className='flex items-center'>Qualification {downicon}</div>
                <div className='flex items-center'>LoremIpsum {downicon}</div>
                <div className='flex items-center'>Lorem Ipsum {downicon}</div>
            </div>

            <div className='text-white flex items-center gap-2 ml-auto mr-[3rem]'>
                {searchIcon}
                <button className='bg-white pt-2 pb-2 pr-8 pl-8 rounded-lg text-[#12406f]'>Enrolment</button>
            </div>

        </div>

    )
}

export default Navbar