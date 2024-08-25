import "./Header.css"
import Reveal from "../Reveal/Reveal"

function Header({ showingSection, setShowingSection }) {
	return (
		<div className="headerContainer">
			<div className="headerContent">
				<Reveal slide delay={0.1}>
					<img src='favicon.png' alt="" />
				</Reveal>

				<ul>
					<Reveal slide delay={0.2}>
						<li className={showingSection === 1 ? "active" : ""} onClick={() => setShowingSection(1)}>Quién soy</li>
					</Reveal>
					<Reveal slide delay={0.3}>
						<li className={showingSection === 2 ? "active" : ""} onClick={() => setShowingSection(2)}>Stack</li>
					</Reveal>
					<Reveal slide delay={0.4}>
						<li className={showingSection === 3 ? "active" : ""} onClick={() => setShowingSection(3)}>Estudios</li>
					</Reveal>
					<Reveal slide delay={0.5}>
						<li className={showingSection === 4 ? "active" : ""} onClick={() => setShowingSection(4)}>Proyectos</li>
					</Reveal>
				</ul>
			</div>
		</div>
	)
}

export default Header
