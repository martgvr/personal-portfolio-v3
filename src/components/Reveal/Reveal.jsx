import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function Reveal({ children, slide, delay }) {
	const ref = useRef(null)
	const mainControls = useAnimation()
	const isInView = useInView(ref, { once: false })

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
		}
	}, [isInView])

	return (
		<div ref={ref}>
			<motion.div
				variants={
					slide ?
					{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } }
					:
					{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }
				}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: delay || 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	)
}