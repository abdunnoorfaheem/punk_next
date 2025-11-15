import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Faq = () => {
  return (
    <>
      <div className="bg-[#010101] text-white">
        <Container>
            <div className="text-center">
                <h3 className='text-[55px] font-orbitron font-bold w-[742px] m-auto'>Frequently Asked <span className='text-[#F0B71F]'>Questions</span></h3>
                <p className='text-[#DDDDDD] font-montserrat text-[18px] font-medium w-[956px] m-auto'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.</p>
            </div>
            <div className="">
                <div className="flex justify-between">
                    <div className="flex gap-x-6 py-[30px]">
                    <div className="">
                        <Image src={"/one.png"} height={35} width={77} alt='one.png'/>
                    </div>
                    <div className="">
                        <h4 className='text-[24px] font-orbitron font-semibold w-[450px]'>How d I stay updated on new content and events?</h4>
                        <p className='text-[18px] font-montserrat font-semibold w-[510px] text-[#DDDDDD] pt-[26px] border-b border-b-[#F0B71F] pb-3'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
                    </div>
                </div>
                <div className="flex gap-x-6 py-[30px]">
                    <div className="">
                        <Image src={"/two.png"} height={35} width={77} alt='one.png'/>
                    </div>
                    <div className="">
                        <h4 className='text-[24px] font-orbitron font-semibold w-[450px]'>How can I contact customer cyber punk support?</h4>
                        <p className='text-[18px] font-montserrat font-semibold w-[510px] text-[#DDDDDD] pt-[26px] border-b border-b-[#F0B71F] pb-3'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
                    </div>
                </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-x-6 py-[30px]">
                    <div className="">
                        <Image src={"/three.png"} height={35} width={77} alt='one.png'/>
                    </div>
                    <div className="">
                        <h4 className='text-[24px] font-orbitron font-semibold w-[450px]'>Can I purchase cyberpunk-themed merchandise?</h4>
                        <p className='text-[18px] font-montserrat font-semibold w-[510px] text-[#DDDDDD] pt-[26px] border-b border-b-[#F0B71F] pb-3'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
                    </div>
                </div>
                <div className="flex gap-x-6 py-[30px]">
                    <div className="">
                        <Image src={"/four.png"} height={35} width={77} alt='one.png'/>
                    </div>
                    <div className="">
                        <h4 className='text-[24px] font-orbitron font-semibold w-[450px]'>Are there any rules or guidelines for participating in the community?</h4>
                        <p className='text-[18px] font-montserrat font-semibold w-[510px] text-[#DDDDDD] pt-[26px] border-b border-b-[#F0B71F] pb-3'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
                    </div>
                </div>
                </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Faq
