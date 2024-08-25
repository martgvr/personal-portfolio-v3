import "./ProjectsCard.css"
import { useState } from "react"

import Reveal from "../Reveal/Reveal"
import Button from "../Button/Button"

export default function ProjectsCard({ project, delay }) {
	const [showContent, setShowContent] = useState(true)
	const { title, description, tech, photo, repoURL, deployURL } = project

	const handleHover = () => setShowContent(!showContent)

	return (
		<Reveal slide delay={delay}>
			<div className="projectsCard" style={{ backgroundImage: `url(${photo})` }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
				{showContent && (
					<div className="projectsCard__content flex-column">
						<div className="projectsCard__upper">
							<h2>{title}</h2>
							<p>{description}</p>
						</div>

						<div className="projectsCard__middle flex-row">
							{tech.map((technology, index) => (
								<p key={index} style={{ backgroundColor: (technology == "HTML" && "#e44d26") || (technology == "CSS" && "#0070ba") || (technology == "JS" && "#63a814") || (technology == "PYTHON" && "#ffc30f") || (technology == "REACT NATIVE" && "#08a5d7") }}>
									{technology}
								</p>
							))}
						</div>

						<div className="projectsCard__lower flex-row">
							{
								repoURL && <Button text={"Repositorio"} bgColor={'#ddd'} txtColor={'#000'} link={repoURL} />
							}
							{
								deployURL && <Button text={"Deploy"} bgColor={'#ddd'} txtColor={'#000'} link={deployURL} />
							}
						</div>
					</div>
				)}
			</div>
		</Reveal>
	)
}
