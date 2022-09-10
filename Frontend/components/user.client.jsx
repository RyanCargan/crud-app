import { useState } from "react"
import axios from "axios"

export default function () {

	const [data, setData] = useState(null)

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
	<>
		<h1>Get User</h1>
		<button onClick={getUser}>Submit</button>
	</>
	)
}
