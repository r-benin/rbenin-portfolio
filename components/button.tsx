'use client'

export default function Button({children , ...props} : React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="" {...props}>
            {children}
        </button>
    )
}