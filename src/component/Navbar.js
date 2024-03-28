import React from 'react'
import { downicon, searchIcon } from '../assets/Icon'
function Navbar() {
    return (
        <div className='bg-[#12406f] flex items-center h-15 z-10'>

            <div className='text-white hidden sm:block h-14 items-center flex justify-center w-40'>
                <div className='font-bold text-2xl'>Logo</div>
            </div>

            <div className='text-white flex flex-wrap justify-between gap-4 cursor-pointer sm:gap-2'>
                <div className='flex items-center'>Qualification <p>{downicon}</p></div>
                <div className='flex items-center'>Qualification {downicon}</div>
                <div className='flex items-center'>Qualification {downicon}</div>
                <div className='flex items-center'>LoremIpsum {downicon}</div>
                <div className='flex items-center'>Lorem Ipsum {downicon}</div>
            </div>

            <div className='text-white flex items-center gap-2 ml-auto'>
                {searchIcon}
                <button className='bg-white pt-2 pb-2 pr-8 pl-8 rounded-lg text-[#12406f]'>Enrolment</button>
            </div>

        </div>

    )
}

export default Navbar