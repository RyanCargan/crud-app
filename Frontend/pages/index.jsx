import Head from "next/head"
import Landing from "../components/landing.client"

export default function () {

	return (
	<div className="App">
		<Head>
		<title>Recipe Tracker</title>
		<meta
			name="description"
			content="A CRUD app showcasing the MERN stack"
		/>
		</Head>
		<Landing />
	</div>
)}
