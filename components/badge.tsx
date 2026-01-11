

export default function Badge({children, ...props} : React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="text-white text-[12px] bg-portgray rounded-sm px-2 py-0.5" {...props}>{children}</div>
    )
}