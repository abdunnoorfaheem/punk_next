import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Feature = () => {
    return (
        <>
            <section className='bg-[#010101] text-white '>
                <Container>
                    <div className="text-center ">
                        <h3 className='w-[842px]  m-auto  text-[55px] font-bold font-orbitron'>Dive into the Cybernetic <span className='text-[#F0B71F]'>Universe</span></h3>
                        <p className='text-[#DDDDDD] text-[18px] font-montserrat w-[936px] m-auto py-[37px]'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-4">
                            <div className="">
                                <Image src={"/featureone.png"} height={46} width={46} alt='featureone.png'  className='border border-[#F0B71F] p-1 rounded-[8px]'/>
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-medium font-montserrat'>Discover the Future</h4>
                                <p className='text-[#DDDDDD] text-[18px] font-montserrat w-[300px]'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="">
                                <Image src={"/featuretwo.png"} height={46} width={46} alt='featuretwo.png'  className='border border-[#F0B71F] p-1 rounded-[8px]'/>
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-medium font-montserrat'>Explore Features</h4>
                                <p className='text-[#DDDDDD] text-[18px] font-montserrat w-[300px]'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="">
                                <Image src={"/featurethree.png"} height={46} width={46} alt='featurethree.png'  className='border border-[#F0B71F] p-1   rounded-[8px]'/>
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-medium font-montserrat'>Explore Features</h4>
                                <p className='text-[#DDDDDD] text-[18px] font-montserrat w-[300px]'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                       

                    </div>
                    
                </Container>
            </section>
        </>
    )
}

export default Feature
