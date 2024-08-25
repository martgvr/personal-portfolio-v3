import "./App.css"
import './theme.css'
import { useState } from "react"

import Who from "./screens/Who/Who"
import Stack from "./screens/Stack/Stack"
import Header from "./components/Header/Header"
import Projects from "./screens/Projects/Projects"
import Education from "./screens/Education/Education"

function App() {
	const [showingSection, setShowingSection] = useState(1)

	return (
		<>
			<Header setShowingSection={setShowingSection} showingSection={showingSection} />
			{showingSection == 1 && <Who />}
			{showingSection == 2 && <Stack />}
			{showingSection == 3 && <Education />}
			{showingSection == 4 && <Projects />}
		</>
	)
}

export default App
