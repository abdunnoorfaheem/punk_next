import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Counter = () => {
    return (
        <>
            <section className='bg-[#010101] text-white '>
                <Container>
                    <div className="flex justify-between items-center py-5">
                        <div className="w-[49%]">

                            <div className="">
                                <h2 className='text-[57px] font-bold font-orbitron w-[585px]'>Where <span className='text-[#F0B71F]'>Neon Dreams & Digital</span> Nightmares Converge.</h2>
                                <p className='text-[#DDDDDD] font-montserrat text-[18px] font-medium py-10'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <h4 className='text-[47px] font-montserrat font-semibold text-[#F0B71F]'>89,2K+</h4>
                                        <h5 className='text-[17px] font-medium font-montserrat'>Discover the Future</h5>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[47px] font-montserrat font-semibold text-[#F0B71F]'>7001+</h4>
                                        <h5 className='text-[17px] font-medium font-montserrat'>Stories and Lore</h5>
                                    </div>
                                    <div className="">
                                        <h4 className='text-[47px] font-montserrat font-semibold text-[#F0B71F]'>3,124+</h4>
                                        <h5 className='text-[17px] font-medium font-montserrat'>Art and Design</h5>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="w-[49%]">
                            <Image src={"/futuretwo.png"} height={752} width={690} alt='futuretwo.png' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">

                        <div className="w-[49%]">
                            <Image src={"/futurethree.png"} height={818} width={656} alt='futurethree.png' />
                        </div>
                        <div className="w-[49%]">
                            <div className="ml-7">
                                <h2 className='text-[57px] font-bold font-orbitron w-[585px]'>Unveil <span className='text-[#F0B71F]'>the Secrets of the </span> Cybernetic Underworld</h2>
                                <p className='text-[#DDDDDD] font-montserrat text-[18px] font-medium py-10'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                                <div className="flex bg-[rgba(27,27,28,0.4)]  h-[263px] rounded-lg border border-[#F0B71F] w-[636px]">
                                    <div className="p-8">
                                        <Image src={"/futurefive.png"} width={200} height={198} alt='futureman.png' />
                                    </div>
                                    <div className="">
                                        <h3 className='text-[28px] font-semibold pt-15  leading-0 bg-transparent'>Join the Revolution</h3>
                                        
                                        <p className='w-[270px] text-[#DDDDDD] text-[18px] font-regular pt-[22px]'>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
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

export default Counter
