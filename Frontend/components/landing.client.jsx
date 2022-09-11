import NavBar from '../components/navbar.client'
import Login from "../components/login.client"
import Register from "../components/register.client"
import Profile from "../components/user.client"
import Dashboard from "../components/dashboard.client"
import List from "../components/list.client"
import Upload from "../components/upload.client"

// import { useStore } from "zustand"
// import { useAppContext } from "../context/state"
import { AppContext } from "../context/state"
import { useContext, useState } from "react"

export default function () {

    // const [value, setValue] = useState()
    const context = useContext(AppContext)

	// const toggleLogin = useStore((state) => state.toggleLogin)
	// const app = useAppContext()

	return(
	<>
		<NavBar />
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
