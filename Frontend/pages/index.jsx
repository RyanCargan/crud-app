import Head from "next/head"
import { Landing } from "../utils/barrel"

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
