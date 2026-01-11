'use client'

import { useEffect, useState } from "react"
import Icon from "./icon"

type ExperienceCardProps = {
    title: string,
    subtitle: string,
    year: string | null
} & React.ComponentPropsWithoutRef<'div'>

const placeholderTitles = [
    'Software Developer Intern',
    'Software Engineer Intern',
    'Fullstack Developer Intern',
    'Frontend Developer Intern',
    'Backend Developer Intern'
]

export default function ExperienceCard({title, subtitle, year, ...props} : ExperienceCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() =>          
            {
                if (isHovered) {
                    if (index == (placeholderTitles.length - 1)) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    }
                }
                
            }, 1000)
        
        return () => {
            if (!isHovered) {
                setIndex(0)
            }
            clearInterval(interval)
        }

    }, [index, isHovered])
    
    return (
        <div className="w-full flex justify-between items-center border border-portgray hover:border-[#4d4d4d] rounded-md p-3 group" {...props} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="">
                {
                    title === '???' ? <p className="text-sm font-semibold tracking-tight">{isHovered ? placeholderTitles[index] : '???'}</p> :
                    <p className="text-sm font-semibold tracking-tight">{title}</p>
                }
                <p className="text-sm opacity-50 tracking-tight">{subtitle}</p>
            </div>
            <div className={`text-sm font-semibold ${year === 'loading' && 'group-hover:animate-spin'}`}>
                { year === 'loading' ? <Icon icon="loading" /> : year && <div>{year}</div> }
            </div>
        </div>
    )
}