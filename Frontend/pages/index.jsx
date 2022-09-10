import styles from "./index.module.scss"
import { useState } from "react"
/*	Using Next.js for implicit, automated routing with dependency injection
	to reduce redundant code,
	and automatic server-side rendering for increased client-side performance,
	UX, and improved SEO.
	Web crawlers like Googlebot have technically been able to access
	dynamic single page applications
	(that use client-side rendering) for a while now.
	However, the slower rendering times for CSR apps (among other issues)
	could influence ranking to some extent.
	SSR is still typically considered optimal assuming the developer can deal
	with some additional requirements when coding.
*/
import Link from 'next/link'
import Head from "next/head"
// import {
// 	Head,
// 	Link,
// } from "next"
import axios from "axios"

export default function HomePage() {

	const [regName, setRegName] = useState("")
	const [regPass, setRegPass] = useState("")

	const [logName, setLogName] = useState("")
	const [logPass, setLogPass] = useState("")

	const [data, setData] = useState(null)

	const register = () => {
		axios({
			method: "POST",
			data: {
				username: regName,
				password: regPass,
			},
			withCredentials: true,
			url: "http://localhost:4000/register",
		})
		.then((res) => console.log(res))
	}

	const login = () => {
		axios({
			method: "POST",
			data: {
				username: logName,
				password: logPass,
			},
			withCredentials: true,
			url: "http://localhost:4000/login",
		})
		.then((res) => console.log(res))
		.then(console.log(logName))
		.then(console.log(logPass))
	}

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:4000/user",
		})
		.then((res) => {
			setData(res.data)
			console.log(res.data)
		})
		.then(console.log(data))
	}

	return (
	<div className={styles.App}>
		<Head>
		<title>Recipe Tracker</title>
		<meta
			name="description"
			content="A CRUD app showcasing the MERN stack"
		/>
		</Head>

		<h1>Home</h1>
		<hr />
		<h1>Register</h1>
			<input placeholder="username"
				onChange={e => setRegName(e.target.value)} />
			<input placeholder="password"
				onChange={e => setRegPass(e.target.value)} />
			<button onClick={register}>Submit</button>
		<h1>Login</h1>
			<input placeholder="username"
				onChange={e => setLogName(e.target.value)} />
			<input placeholder="password"
				onChange={e => setLogPass(e.target.value)} />
			<button
				onClick={login}>Submit</button>
		<h1>Get User</h1>
			<button onClick={getUser}>Submit</button>
		<br />
		<button>
			<Link href="/user">My Profile</Link>
		</button>
		<br />
		<button>
			<Link href="/dashboard">My Dashboard</Link>
		</button>
	</div>
)}
