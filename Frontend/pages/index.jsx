import styles from "./index.module.scss"
import { useState } from "react"
import axios from "axios"

function HomePage() {

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
	</div>
)}

export default HomePage
