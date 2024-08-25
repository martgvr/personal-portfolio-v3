import "./StackSmallCard.css"

function StackSmallCard({ name, icon }) {
	return (
		<div className="aboutstacksmallcard__container flex-row">
			<img src={icon} alt="" />
			<p>{name}</p>
		</div>
	)
}

export default StackSmallCard
