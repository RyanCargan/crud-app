import { useState } from "react"
import axios from "axios"

export default function () {

	const [regName, setRegName] = useState("")
	const [regPass, setRegPass] = useState("")

	const register = () => {
		axios({
			method: "POST",
			data: {
				username: regName,
				password: regPass,
			},
			withCredentials: true,
			url: `${process.env.NEXT_PUBLIC_URL}/register`,
		})
		.then((res) => console.log(res))
	}

	return (
	<>
		<h1>Register</h1>
		<input placeholder="username"
			onChange={e => setRegName(e.target.value)} />
		<input placeholder="password"
			onChange={e => setRegPass(e.target.value)} />
		<button onClick={register}>Submit</button>
	</>
	)
}
