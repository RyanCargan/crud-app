import { useState } from "react"
import axios from "axios"

export default function () {

	const [logName, setLogName] = useState("")
	const [logPass, setLogPass] = useState("")

	const login = () => {
		axios({
			method: "POST",
			data: {
				username: logName,
				password: logPass,
			},
			withCredentials: true,
			url: `${process.env.NEXT_PUBLIC_URL}/login`,
		})
		.then((res) => console.log(res))
		.then(console.log(logName))
		.then(console.log(logPass))
	}

	return (
	<>
		<h1>Login</h1>
		<input placeholder="username"
			onChange={e => setLogName(e.target.value)} />
		<input placeholder="password"
			onChange={e => setLogPass(e.target.value)} />
		<button
			onClick={login}>Submit</button>
	</>
	)
}
