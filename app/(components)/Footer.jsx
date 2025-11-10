import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <section className='bg-[#010101] text-white'>
                <Container>
                    <div className="flex justify-between items-center pt-[95px] pb-[62px] font-montserrat">
                        <div className="">
                            <h3 className='text-[22px] font-semibold font-montserrat'>Cyber.AI - Cyber Punk Website</h3>
                            <p className='text-[#DDDDDD] font-[18px] font-weight w-[388px] pt-[30px] pb-24'>Explore the high-tech, low-life world where the lines between humanity </p>

                        </div>
                        <div className="pb-24">
                            <h3 className='font-[18px] font-medium'>Information</h3>
                            <ul>
                                <li className='text-[#CBCBCB] text-[15.5px] pt-[9px]'>Press Centre</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Our Blog</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Term and Condition</li>
                            </ul>
                        </div>
                        <div className="pb-24">
                            <h3 className='font-[18px] font-medium'>Menu</h3>
                            <ul>
                                <li className='text-[#CBCBCB] text-[15.5px] pt-[9px]'>About</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Services</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Blog</li>
                            </ul>
                        </div>
                        <div className="pb-24">
                            <h3 className='font-[18px] font-medium'>Contact</h3>
                            <ul>
                                <li className='text-[#CBCBCB] text-[15.5px] pt-[9px]'>Phone : +123 456 789</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Email : @example.com</li>
                                <li className='text-[#CBCBCB] text-[15.5px]'>Address Line 01</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex justify-between items-center pb-[60px] font-montserrat">
                        <div className="">
                            <h4 className='font-[18px] font-weight'>&copy;Cyber.AI - Cyber Punk 2024. All rights reserved.</h4>
                        </div>
                        <div className="">
                            <ul className='flex gap-x-6 text-lg font-medium '>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center gap-x-3">
                                <Image src={"/linkedin.png"} width={50} height={50} alt='linkdin' />
                                <Image src={"/facebook.png"} width={50} height={50} alt='facebook' />
                                <Image src={"/twitter.png"} width={50} height={50} alt='twitter' />
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Footer
