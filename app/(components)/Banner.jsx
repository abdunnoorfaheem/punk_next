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



                    </Container>
                </div>
            </section>
        </>
    )
}

export default Banner
