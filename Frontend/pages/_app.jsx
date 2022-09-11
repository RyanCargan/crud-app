import "./styles.scss"
import { useState } from "react"
import { AppContext } from "../context/state"

export default function Application({ Component, pageProps }) {

	const initialState = {
		visibility: {login: false}
	}

	const [session, setSession] = useState(initialState)

	return (
		<AppContext.Provider value={{ session, setSession }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	)
}
