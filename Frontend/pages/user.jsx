import axios from "axios"
import { useEffect, useState } from "react"


const AuthCheck = () => {

	const [data, setData] = useState(null)

	const fetchUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:4000/user",
		})
		.then((res) => {
			setData(res)
			console.log(res)
		})
	}

	// useEffect(() => {
	// }, [])

	return (
		<>
			<button onClick={fetchUser}>Get User</button>
		</>
	)
}

export default AuthCheck
