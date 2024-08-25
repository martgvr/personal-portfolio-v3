import "./Projects.css"

import Reveal from "../../components/Reveal/Reveal"
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard"
import { useEffect, useState } from "react"

const projects = [
	{
		title: "Toyota Warnes",
		description: "Categorizador de repuestos desarrollado en Django + React.",
		tech: ["HTML", "CSS", "JS", "PYTHON"],
		photo: "https://www.toyotawarnes.com.ar/wp-content/uploads/2023/07/cropped-cropped-Logo-1-copia.jpg",
		category: "professional",
	},
	{
		title: "Barbell Calculator",
		description: "Aplicación desarrollada en React Native. Actualmente en proceso de testing en Play Console.",
		tech: ["REACT NATIVE"],
		category: "professional",
		deployURL: "https://play.google.com/store/apps/details?id=com.barbell.calculator",
		photo: "https://i.ibb.co/N9Cq6d1/barbell.jpg",
		repoURL: "https://github.com/martgvr/barbell_calculator",
	},
	{
		title: "Boost",
		description: "Emprendimiento dedicado a los servicios de asistencia a otros emprendedores.",
		tech: ["HTML", "CSS", "JS"],
		photo: "https://i.ibb.co/FYrQCbL/boost.jpg",
		category: "professional",
		repoURL: "https://github.com/martgvr/boost-cdh",
		deployURL: "https://boostcdh.netlify.app/",
	},
	{
		title: "Trigorinas",
		description: "Emprendimiento familiar dedicado a los servicios de panadería en la zona oeste de Buenos Aires",
		tech: ["HTML", "CSS", "JS"],
		photo: "https://i.ibb.co/Z6h0CkL/trigorinas.png",
		category: "professional",
		repoURL: "https://github.com/martgvr/trigorinas",
		deployURL: "https://trigorinas.netlify.app/",
	},
	{
		title: "New Kaam's Style",
		description: "Emprendimiento dedicado a la venta de indumentaria en la ciudad de Córdoba.",
		tech: ["HTML", "CSS", "JS", "Firebase"],
		photo: "https://i.ibb.co/9NV8BTB/nks.jpg",
		category: "professional",
		repoURL: "https://github.com/martgvr/new-kaams",
		deployURL: "https://newkaams.netlify.app/",
	},
	{
		title: "Rummy Online",
		description: "Juego de fichas online con websockets. Proyecto dividido en front y back, desarrollado con React y Node.",
		tech: ["Node", "React"],
		photo: "https://i.ibb.co/m94vVCF/rummy.jpg",
		category: "academic",
		repoURL: "https://github.com/martgvr/rummy_online",
	},
]

export default function Projects() {
	const [delayCounter, setDelayCounter] = useState(0.05)
	const [projectsToShow, setProjectsToShow] = useState([])
	const [categorySelected, setCategorySelected] = useState("professional")

	useEffect(() => {
		const projectsFound = projects.filter((project) => project.category === categorySelected)
		setProjectsToShow(projectsFound)
	}, [categorySelected])

	return (
		<div className="contentContainer">
			<div className="abouteducation__container flex-column">
				<div className="abouteducation__header flex-row">
					<Reveal>
						<h1>Galería de Proyectos</h1>
					</Reveal>

					<Reveal delay={0.5}>
						<ul className="abouteducation__yearSelector flex-row">
							<li className={categorySelected === "professional" ? "active" : ""} onClick={() => setCategorySelected("professional")}>
								Profesional
							</li>
							<p>|</p>
							<li className={categorySelected === "academic" ? "active" : ""} onClick={() => setCategorySelected("academic")}>
								Académico
							</li>
						</ul>
					</Reveal>
				</div>
				<Reveal delay={0.8}>
					<h2>{categorySelected === "professional" ? "Profesional" : "Académico"}</h2>
				</Reveal>

				<Reveal delay={1.0}>
					<div className="projects__cards flex-row">
						{projectsToShow.map((project, index) => (
							<ProjectsCard project={project} delay={delayCounter + index * 0.2} key={index} />
						))}
					</div>
				</Reveal>
			</div>
		</div>
	)
}
