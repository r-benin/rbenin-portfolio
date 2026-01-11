

type DiamondProps = {
    size: number,
    color: string,
}

export default function Diamond({ size, color } : DiamondProps) {
    return (
        size && color ? <div className={`rotate-45`} style={{height: size, width: size, backgroundColor: color}}/> : null
    )
}