import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Button from './Button'

const Banner = () => {
    return (
        <>
            <section className='bg-[#010101] text-white '>
                <div className="h-[1340px]">
                    <Container>
                        <div className="bg-[url('/cyberPunk.png')] h-[248px]  bg-no-repeat bg-center bg-contain">
                            <Image src={"/banner.png"} width={862} height={811} alt='banner' className='m-auto pt-16' />
                        </div>
                        <div className="">
                            <div className="flex justify-between ">
                                <div className="pt-[244px]">
                                    <Image src={"/stories.png"} width={461} height={272} alt='stories' />
                                </div>

                                <div className="pt-[211px]">
                                    <h2 className='text-[36px] font-montserrat w-[272px] uppercase text-right  ml-7'>Events and Updates</h2>
                                    <p className='text-[#DDDDDD] text-lg w-[301px] text-right pt-11 pb-[58px]'>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                                    <div className="text-right ">
                                        <Button className={"px-6 py-[13px] rounded-[5px] "}>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between items-center font-montserrat">
                            <div className="">
                                <div className="flex bg-[rgba(27,27,28,0.4)]  h-[328px] rounded-lg border border-[#F0B71F] w-[655px]">
                                    <div className="p-8">
                                        <Image src={"/futureman.png"} width={200} height={260} alt='futureman.png' />
                                    </div>
                                    <div className="">
                                        <h3 className='text-[57px] font-semibold pt-14 text-[#F0B71F] bg-transparent'>76,285K+</h3>
                                        <h4 className='text-white text-[28px] font-medium pt-[22px] pb-[21px]'>Experience the Future</h4>
                                        <p className='w-[334px] text-[#DDDDDD] text-[18px] font-regular'>Explore the high-tech, low-life world where the lines between</p>
                                    </div>
                                </div>
                            </div>
                            <div className="font-montserrat">
                                <h3 className='w-[170px] text-[36px] font-medium uppercase '>Art and <span className='font-bold'>Design</span></h3>
                                <p className='w-[264px] text-[#DDDDDD] text-[18px] font-regular'>Feast your eyes on stunning visuals and concept art that bring the cyberpunk</p>
                            </div>
                            <div className="pt-15">
                                <div className="h-[251px]">
                                 <div className="bg-[rgba(27,27,28,0.4)]   rounded-lg border border-[#F0B71F]">
                                     <h3 className='text-[57px] font-semibold pt-7 text-[#F0B71F] bg-transparent pl-[38px]'>17+</h3>
                                     <p className='w-[177px]  text-[18px] font-regular pl-[47px] pb-8'>Years of Experiences</p>
                                    </div> 

                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Banner
