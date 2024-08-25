import "./Who.css"
import Button from "../../components/Button/Button"
import Reveal from "../../components/Reveal/Reveal"

function Who() {
	return (
		<div className="contentContainer">
			<div className="whoContent">
                <Reveal delay={0.1}>
				    <h1>Hola! soy Martín.</h1>
                </Reveal>
                <Reveal delay={0.2}>
				    <h2>Desarrollador Full Stack</h2>
                </Reveal>
                <Reveal delay={0.3}>
				    <p>Desarrollador en Stack MERN y estudiante universitario con una sólida formación en el desarrollo de aplicaciones web.</p>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="whoContent__icons flex-row">
                        <a href="">
                            <img src="github.png" alt="" />
                        </a>
                        <a href="">
                            <img src="linkedin.png" alt="" />
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.5}>
                    <Button text={"Descargar CV"} />
                </Reveal>
			</div>
		</div>
	)
}

export default Who
