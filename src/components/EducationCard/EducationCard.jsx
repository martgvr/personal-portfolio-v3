import './EducationCard.css'
import Button from '../Button/Button'

function EducationCard({ data }) {
	const { month, title, institution, description, certificateURL, highlight } = data
	console.log(highlight)

	return (
		<div className="abouteducationcard__container flex-column" style={{ border: highlight ? "1px solid #8f8760" : "" }}>
			<div>
				<h2>{month}</h2>
				<h3>{title}</h3>
				<h4>{institution}</h4>
				<p>{description}</p>
			</div>

			<div style={{ alignSelf: "center" }}>
				<Button text={"Ver certificado"} link={certificateURL} bgColor={highlight ? "#8f8760" : ""} />
			</div>
		</div>
	)
}

export default EducationCard
