import axios from "axios"
import { useRouter } from "next/router"

export default function (props) {

	const router = useRouter()

	const handleRefresh = () => {
		router.reload(window.location.pathname)
	}

	const logout = () => {
		axios({
			method: "POST",
			withCredentials: true,
			url: `${process.env.NEXT_PUBLIC_URL}/logout`,
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
