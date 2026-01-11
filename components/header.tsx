'use client'

import Image from "next/image"
import Diamond from "./diamond"
import { useEffect, useState } from "react"

export default function Header() {
    
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    
    return (
        <header className={`min-h-15 flex justify-center items-center ${scrolled ? 'bg-portblack/70 backdrop-blur-md' : 'bg-portblack' } sticky z-100 top-0`}>
            <div className="flex items-center gap-3 justify-center md:justify-start w-full lg:max-w-330 mx-5">
                <Image
                src='/rbenin-logo.svg'
                width={40}
                height={40}
                alt='RBenin'
                className="filter invert"
                />
                <Diamond size={5} color='white' />
                <p className="text-2xl font-medium text-white tracking-tight">RBenin</p>
            </div>
        </header>
    )
}