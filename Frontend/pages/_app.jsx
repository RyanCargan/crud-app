import "./styles.scss"
import { useState } from "react"
import { AppContext } from "../context/state"

export default function Application({ Component, pageProps }) {

	const initialState = [
		{
			id: "loginVisibility",
			state: false
		},
		{
			id: "registerVisibility",
			state: false
		},
		{
			id: "profileVisibility",
			state: false
		},
		{
			id: "dashboardVisibility",
			state: true
		},
	]

	const [session, setSession] = useState(initialState)

	return (
		<AppContext.Provider value={{ session, setSession }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	)
}
