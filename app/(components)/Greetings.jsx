import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Greetings = () => {
    return (
        <>
            <section className='bg-[#010101] text-white py-30'>
                <Container>
                    <div className="bg-[url('/bannertwo.png')] h-[776px] bg-no-repeat bg-center bg-cover">
                        <div className="flex justify-between items-center">
                            <div className="w-[57%] py-[170px] pl-[84px]">
                                <h3 className='text-[68px] font-orbitron font-bold w-[638px] '>Greetings! Dive into the Cybernetic Universe</h3>

                                <p className='w-[558px] text-[#DDDDDD] text-[18px] pt-[80px]'>Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                            </div>
                            <div className="w-[40%]">
                                <div className="bg-[rgba(255,255,255,0.10)] h-[465px] rounded-[20px] w-[431px] border border-[#F0B71F] ">

                                    <div className="  pt-20 px-[60px] flex justify-between items-center">
                                        <div className="flex items-center gap-x-5">
                                            <div className="w-[17px] h-[17px] bg-[#F0B71F]"></div>
                                            <div className="w-[129px]">Join the Revolution</div>
                                        </div>
                                        <div className="">
                                            <Image src={"/arrow.png"} height={35} width={35} alt='arrow.png'/>
                                        </div>
                                    </div>
                                    <div className="  pt-12 px-[60px] flex justify-between items-center">
                                        <div className="flex items-center gap-x-5">
                                            <div className="w-[17px] h-[17px] bg-[#E03609]"></div>
                                            <div className="w-[129px]">Art and Design</div>
                                        </div>
                                        <div className="">
                                            <Image src={"/arrow.png"} height={35} width={35} alt='arrow.png'/>
                                        </div>
                                    </div>
                                    <div className=" pt-12  px-[60px] flex justify-between items-center">
                                        <div className="flex items-center gap-x-5">
                                            <div className="w-[17px] h-[17px] bg-[#F0B71F]"></div>
                                            <div className="w-[129px]">Tech and Gear</div>
                                        </div>
                                        <div className="">
                                            <Image src={"/arrow.png"} height={35} width={35} alt='arrow.png'/>
                                        </div>
                                    </div>
                                    <div className=" pt-12 px-[60px] flex justify-between items-center">
                                        <div className="flex items-center gap-x-5">
                                            <div className="w-[17px] h-[17px] bg-[#E03609]"></div>
                                            <div className="w-[129px]">Stories and Lore</div>
                                        </div>
                                        <div className="">
                                            <Image src={"/arrow.png"} height={35} width={35} alt='arrow.png'/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default Greetings
