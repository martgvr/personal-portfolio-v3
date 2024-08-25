import "./Education.css"
import { useEffect, useState } from "react"

import Reveal from "../../components/Reveal/Reveal"
import EducationCard from "../../components/EducationCard/EducationCard"

const coursesDone = [
	{
		year: 2022,
		month: "Abril",
		title: "Desarrollo Web",
		description:
			"Adquiridos conocimientos relacionados con la creación de sitios web estáticos, el diseño web utilizando HTML y CSS, el uso de herramientas como GIT y SASS para el desarrollo web, la aplicación de Bootstrap en proyectos, la optimización para SEO, la implementación de sitios en servidores, y la gestión de clientes, incluyendo la presentación de presupuestos.",
		institution: "Coderhouse",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
		highlight: false,
	},
	{
		year: 2022,
		month: "Julio",
		title: "Javascript",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en los fundamentos del lenguaje de programación más utilizado en la actualidad, con la capacidad de crear una amplia variedad de aplicaciones. Durante el curso, exploré las herramientas esenciales del lenguaje, analicé casos prácticos de aplicación y comprendí la utilidad de las librerías.",
		certificateURL: "https://www.coderhouse.com/certificados/6303ba973f29be012f36b91c?lang=es",
		highlight: false,
	},
	{
		year: 2022,
		month: "Agosto",
		title: "ReactJS",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en la programación por componentes a través de JavaScript (JS) y ES6, además de comprender las ventajas de la utilización de flujos de datos. Durante el curso, apliqué el manejo de rutas utilizando Firebase y comprendí la utilización del virtual DOM a través de los desarrollos en React JS.",
		certificateURL: "https://www.coderhouse.com/certificados/631e0a95d692f7002459fc78?lang=es",
		highlight: false,
	},
	{
		year: 2022,
		month: "Agosto",
		title: "Carrera de Desarrollo Frontend React",
		institution: "Coderhouse",
		description:
			"Culminación exitosa de mi formación en diversas áreas clave del desarrollo web. Este certificado fue otorgado tras completar los módulos de Desarrollo Web, Javascript y ReactJS, lo que implica haber adquirido un conjunto integral de habilidades en el campo del desarrollo frontend.",
		certificateURL: "https://www.coderhouse.com/certificados/63d2d8cf3aa51027d45bb5f3?lang=es",
		highlight: true,
	},
	{
		year: 2023,
		month: "Febrero",
		title: "Programación Backend",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en el desarrollo de aplicaciones modernas utilizando Node.js y MongoDB. Programé en JavaScript en el lado del servidor, aplicando técnicas asincrónicas. Aprendí a trabajar con bases de datos NoSQL, dominando la gestión eficiente, ágil y altamente escalable de los datos.",
		certificateURL: "https://www.coderhouse.com/certificados/640f2d97341fdd000fa2c008?lang=es",
		highlight: false,
	},
	{
		year: 2023,
		month: "Febrero",
		title: "Carrera de Desarrollo Full Stack",
		institution: "Coderhouse",
		description:
			"Este certificado me fue otorgado después de completar con éxito el módulo de Node.js, un componente fundamental en la construcción de aplicaciones web full stack. Luego de completar el módulo de 'Programación backend', y además, como parte de la certificación full stack, me fue otorgado por haber completado exitosamente los módulos de Desarrollo Web, JavaScript y ReactJS.",
		certificateURL: "https://www.coderhouse.com/certificados/640f2d98341fdd000fa2c00b?lang=es",
		highlight: true,
	},
	{
		year: 2023,
		month: "Agosto",
		title: "Desarrollo de aplicaciones",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos y bases para crear aplicaciones bridge con capacidad de despliegue en Android e iOS, utilizando React Native y JavaScript. Te conectaste a APIs y adquiriste habilidades para la sincronización con Firebase o Realm DB.",
		certificateURL: "https://www.coderhouse.com/certificados/650177dbd545c3173842d5c7?lang=es",
		highlight: false,
	},
	{
		year: 2023,
		month: "Agosto",
		title: "Carrera de Desarrollo de Aplicaciones ",
		institution: "Coderhouse",
		description:
			"Completados los módulos de frontend, obtuve otro certificado de 'Carrera de Desarrollo de Aplicaciones' en reconocimiento por haber finalizado con éxito el curso de React Native. Este certificado demuestra mi capacidad para desarrollar aplicaciones móviles utilizando React Native, una tecnología que amplía mis habilidades en el desarrollo de aplicaciones a plataformas móviles.",
		certificateURL: "https://www.coderhouse.com/certificados/650177dbd545c365ec42d5ce?lang=es",
		highlight: true,
	},
]

export default function Education() {
	const [yearSelected, setYearSelected] = useState(2023)
	const [coursesToShow, setCoursesToShow] = useState([])

	useEffect(() => {
		const filteredCourses = coursesDone.filter((course) => course.year === yearSelected)
		setCoursesToShow(filteredCourses)
	}, [yearSelected])

	return (
		<div className="contentContainer">
			<div className="abouteducation__container flex-column">
				<div className="abouteducation__header flex-row">
					<Reveal>
						<h1>Estudios realizados</h1>
					</Reveal>

					<Reveal delay={0.5}>
						<ul className="abouteducation__yearSelector flex-row">
							<li className={yearSelected === 2022 ? "active" : ""} onClick={() => setYearSelected(2022)}>
								2022
							</li>
							<p>|</p>
							<li className={yearSelected === 2023 ? "active" : ""} onClick={() => setYearSelected(2023)}>
								2023
							</li>
						</ul>
					</Reveal>
				</div>

				<Reveal delay={0.8}>
					<h2>{yearSelected}</h2>
				</Reveal>

				<Reveal delay={1.0}>
					<div className="abouteducation__years flex-row">
						{coursesToShow.map((course, index) => (
							<EducationCard data={course} />
						))}
					</div>
				</Reveal>
			</div>
		</div>
	)
}
