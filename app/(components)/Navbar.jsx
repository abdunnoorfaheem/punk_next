import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <section className='bg-[#010101] text-white'>
        <Container>
            <div className="flex justify-between items-center py-[52px] ">
                <div className="">
                    <Image src={"/logo.png"} height={29} width={107} alt='logo'/>
                </div>
                <div className="">
                    <ul className='flex gap-x-8 font-montserrat'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/pages"}>Pages</Link></li>
                        <li><Link href={"/support"}>Support</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="">
                    <Button className={"pt-3 pb-3 px-[21px] rounded-lg"}>Get started free</Button>
                </div>
                
            </div>
        </Container>
      </section>
    </>
  )
}

export default Navbar
