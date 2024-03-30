import React from 'react'
const facebook = require("../assets/Icon awesome-facebook-f.png")
const insta = require("../assets/Icon awesome-instagram.png")
const linkdn = require("../assets/Icon awesome-linkedin.png")
const twiter = require("../assets/Icon awesome-twitter.png")
const youtube = require("../assets/Icon awesome-youtube.png")
const quara = require("../assets/quora.png")
const location = require("../assets/Icon material-location-on.png")
const watch = require("../assets/Group 17190.png")
const train = require("../assets/Group 17156.png")
const bgimage = require("../assets/Group 17432.png")

function Footer() {

    return (
        <section className='relative'>

            <img className="h-[30rem]" src={bgimage} />
            <div className='absolute top-[76px] left-[106px] flex gap-[3rem] '>
                <div className='flex-col gap-10' >
                    <p className='text-white font-bold text-xl mb-10'>Contuct us</p>
                    <p className='text-white ' style={{ maxWidth: "29rem" }} >Address: amet, consetetur sadipscing elitr,
                        sed diam Email id: eirmod tempor invidunt ut labore et dolore Phone no: 123456789</p>
                </div>
                <div >
                    <p className='text-white font-bold text-xl'>Follow Us</p>
                    <div className='flex gap-10 mt-10'><img
                        className='h-6 ' src={facebook} />
                        <img className='h-6 ' src={linkdn} />
                        <img className='h-6 ' src={insta} />


                        <img className='h-6 ' src={twiter} />
                        <img className='h-6 ' src={youtube} />
                        <img className='h-6 ' src={quara} />
                    </div>
                </div>

                <div className='flex-col   '>
                    <p className='text-white font-bold text-xl mb-3 '>Head Office</p>
                    <div className='flex gap-3 mt-10'><div><img src={location} /></div><p className='text-white ' style={{ maxWidth: "24rem" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p></div>

                    <div className='flex gap-3 mt-3 '><div><img src={watch} /></div><p className='text-white ' >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>

                    <div className='flex gap-3 mt-3 '><div><img src={watch} /></div><p className='text-white '>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>

                    <div className='flex gap-3 mt-3'><div><img src={train} /></div><p className='text-white ' >
                        Lorem ipsum asd asdsaweeq Lorem Ipsum</p></div>

                </div>

            </div>
            <div className='absolute bg-[#002F5F] min-h-[4rem] bottom-0 left-0 right-0 flex justify-center items-center text-center'>
                <p className='text-white '>© 2021 All Rights Reserved. Privacy Policy</p>
            </div>
        </section >
    )
}

export default Footer