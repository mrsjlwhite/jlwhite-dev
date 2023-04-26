import { useEffect, useState } from "react"

type Props = {
    icon: string
    className?: string
}

const TechIcon = ({ icon, className }: Props) => {
    const [iconName, setIconName] = useState('');
    const [iconTooltip, setIconTooltip] = useState('');
    const [iconClassName, setIconClassName] = useState('');

    useEffect(() => {
        if (icon && icon.length) {
            setIconName(icon);
            setIconTooltip(icon.split('-')[0]);
        }
    }, [icon])

    useEffect(() => {
        if (className && className.length) {
            setIconClassName(className)
        }
    }, [className])

    return (
        <i key={iconName}
            className={`devicon-${iconName} colored ${iconClassName}`}
            data-toggle="tooltip"
            data-placement="top"
            title={iconTooltip}>
        </i>
    )
}

export default TechIcon