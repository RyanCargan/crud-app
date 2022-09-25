import {
	Dashboard,
	Login,
	Navbar,
	Register,
	User as Profile,
} from "../utils/barrel"

// import { useStore } from "zustand"
// import { useAppContext } from "../context/state"
import { AppContext } from "../context/state"
import { useContext, useState } from "react"

export const Landing = () => {

    // const [value, setValue] = useState()
    const context = useContext(AppContext)

	// const toggleLogin = useStore((state) => state.toggleLogin)
	// const app = useAppContext()

	return(
	<>
		<Navbar />
		<h1>Recipe Tracker</h1>
		<hr />
		{context.session[0].state && <Login />}
		{context.session[1].state && <Register />}
		{context.session[2].state && <Profile />}
		{context.session[3].state && <Dashboard />}
		{/* <List />
		<Upload /> */}
	</>
	)
}
