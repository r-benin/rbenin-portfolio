import Icon from "./icon"

type ExperienceCardProps = {
    title: string,
    subtitle: string,
    year: string | null
} & React.ComponentPropsWithoutRef<'div'>

export default function ExperienceCard({title, subtitle, year, ...props} : ExperienceCardProps) {
    return (
        <div className="w-full flex justify-between items-center border border-portgray rounded-md p-3" {...props}>
            <div className="">
                <p className="text-sm font-semibold tracking-tight">{title}</p>
                <p className="text-sm opacity-50 tracking-tight">{subtitle}</p>
            </div>
            <div className="text-sm font-semibold">
                { year === 'loading' ? <Icon icon="loading"/> : year && <div>{year}</div> }
            </div>
        </div>
    )
}