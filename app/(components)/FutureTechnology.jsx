import React from 'react'
import Container from './Container'
import Image from 'next/image'

const FutureTechnology = () => {
  return (
    <>
      <section className='bg-[#010101] text-white py-30'>
        <Container>
          <div className="">
            <div className="flex justify-between items-center">
             <div className="w-[49%]">
              <Image src={"/brain.png"} width={614} height={598} alt='brain.png'/>
              </div>   
             <div className="w-[49%]">
              <h1 className='text-[50px] font-bold font-orbitron w-[501px]'>Your <span className='text-[#F0B71F]'>Portal to a Gritty,</span> Tech-Driven Future.</h1>
              <p className='text-[#DDDDDD] text-[18px] font-montserrat py-[43px]'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
              <div className="">
                <button className='border border-[#F0B71F] px-6 py-3 text-[17px] font-semibold  rounded-[5px] hover:bg-linear-to-r from-[#F0B71F] to-[#E03609] duration-700 text-[#F0B71F] hover:text-white cursor-pointer'>Read More</button>
                <button className='border border-[#F0B71F] px-6 py-3 text-[17px] font-semibold ml-8 rounded-[5px] hover:bg-linear-to-r from-[#F0B71F] to-[#E03609] duration-700 text-[#F0B71F] hover:text-white cursor-pointer'>Learn More</button>
              </div>
              </div>   
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FutureTechnology
