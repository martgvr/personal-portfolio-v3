import "./button.css"
import { useState } from "react"

export default function Button({ text, bgColor, txtColor, hoverBgColor, hoverTxtColor, link }) {
	const [isHovered, setIsHovered] = useState(false)
	const handleHover = () => setIsHovered(!isHovered)

	return (
		<a
			className="button__container"
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			style={{ backgroundColor: isHovered ? hoverBgColor : bgColor, color: isHovered ? hoverTxtColor : txtColor }}
			href={link}
		>
			{text}
		</a>
	)
}