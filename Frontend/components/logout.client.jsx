import axios from "axios"
import { useRouter } from "next/router"
import getEnv from "../utils/env"

export const Logout = (props) => {

	const router = useRouter()

	const handleRefresh = () => {
		router.reload(window.location.pathname)
	}

	const logout = () => {
		axios({
			method: "POST",
			withCredentials: true,
			url: `${getEnv()}/logout`,
		})
		.then((res) => console.log(res))
		.then(handleRefresh)
	}

	return (
		<button className={props.className}
			onClick={logout}>Logout
		</button>
	)
}
