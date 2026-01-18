'use client'

import Icon from "./icon"

type ProjectCardProps = {
    title: string,
    subtitle: string,
    image: string,
    website?: string,
    github?: string,
} & React.ComponentPropsWithoutRef<'div'>

type ProjectCardButtonProps = {
    icon: string,
    link: string
} & React.HTMLAttributes<HTMLAnchorElement>

export default function ProjectCard({title, subtitle, image, website, github} : ProjectCardProps) {
    return (
        <div className="w-full sm:flex-1 sm:min-w-[49%] min-h-70 h-90 border border-portgray  flex flex-col overflow-hidden items-center justify-end relative transition-all hover:border-[#4d4d4d] group">
            { image && <div className={`bg-cover bg-center absolute w-full h-full group-hover:h-[110%] transition-all`} style={{backgroundImage: `url(/${image})`}} />}
            <div className="bg-linear-to-b from-portblack/20 to-portblack w-full h-full absolute"></div>
            <div className="w-9/10 z-10 mb-2 md:mb-3">
                <h3 className="w-full font-semibold text-sm/tight">{title}</h3>
                <h4 className="w-full opacity-50 text-sm">{subtitle}</h4>
            </div>
            <div className="flex justify-end w-9/10 z-10 mb-5 gap-1">
                { github && <ProjectButton icon='github' link={github} /> }
                { website && <ProjectButton icon='website' link={website} /> }
            </div>
            
        </div>
    )
}

function ProjectButton({icon, link, ...props} : ProjectCardButtonProps) {
    return (
        <a className="flex items-center opacity-50 gap-1 border rounded-full p-0.5 px-2 transition-all hover:opacity-100 cursor-pointer" {...props} href={link} target="_blank">
            <Icon icon={icon} className="w-5"/>
            { icon == 'github' && <p className="text-xs">GitHub</p> }
            { icon == 'website' && <p className="text-xs">Website</p> }
        </a>
    )
}